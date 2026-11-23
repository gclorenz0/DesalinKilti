// Construit le site dans le dossier « dist » à partir de « site », « media » et « content ».
// Lancé automatiquement par Netlify à chaque modification (commande : node scripts/build.js).
const fs = require("fs"), path = require("path"), crypto = require("crypto");
const RACINE = path.join(__dirname, ".."), DIST = path.join(RACINE, "dist");
fs.rmSync(DIST, { recursive: true, force: true });
fs.cpSync(path.join(RACINE, "site"), DIST, { recursive: true });
if (fs.existsSync(path.join(RACINE, "media"))) fs.cpSync(path.join(RACINE, "media"), path.join(DIST, "media"), { recursive: true });

function lire(fichier) {
  try { return JSON.parse(fs.readFileSync(fichier, "utf8")); }
  catch (e) { console.warn("Fichier ignoré (illisible) : " + fichier + " : " + e.message); return null; }
}
const articles = [];
for (const rubrique of ["media", "pawol"]) {
  const dossier = path.join(RACINE, "content", rubrique);
  if (!fs.existsSync(dossier)) continue;
  for (const f of fs.readdirSync(dossier)) {
    if (!f.endsWith(".json")) continue;
    const a = lire(path.join(dossier, f));
    if (!a || !a.titre) continue;
    a.slug = f.replace(/\.json$/, "");
    a.rubrique = rubrique;
    if (!a.tag) a.tag = rubrique === "pawol" ? "sosyal" : "kilti";
    articles.push(a);
  }
}
const date = (a) => String(a.date || "");
articles.sort((x, y) => {
  if (x.rubrique === "media" && y.rubrique === "media") {
    if (!!y.a_la_une !== !!x.a_la_une) return y.a_la_une ? 1 : -1;
    if (!!x.exemple !== !!y.exemple) return x.exemple ? 1 : -1;
  }
  return date(y).localeCompare(date(x)) || String(x.titre).localeCompare(String(y.titre));
});
const reglages = lire(path.join(RACINE, "content", "reglages.json")) || {};
const data = JSON.stringify({ articles, reglages });
fs.writeFileSync(path.join(DIST, "data.json"), data);

// Pages de partage : une page par article (/a/<slug>/) qui porte le titre, le résumé et l'image en tête
// pour l'aperçu dans Facebook, WhatsApp, Messenger, etc. Les visiteurs sont renvoyés vers l'article.
const SITE = String(process.env.URL || reglages.url_site || "https://desalinkilti.org").replace(/\/+$/, "");
const esc = (t) => String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const absolu = (u) => /^https?:\/\//.test(u) ? u : SITE + "/" + String(u).replace(/^\/+/, "");
const texteBrut = (h) => String(h || "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
function metas({ titre, description, image, url, langue, type }) {
  return [
    `<meta property="og:site_name" content="Desalin Kilti">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:locale" content="${langue === "ht" ? "ht_HT" : "fr_FR"}">`,
    `<meta property="og:title" content="${esc(titre)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(image)}">`,
    `<meta property="og:image:alt" content="${esc(titre)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(titre)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${esc(image)}">`,
  ].join("\n");
}
const imageDefaut = absolu("media/accueil-paysage.jpg");
// Page d'accueil : mêmes balises, avec l'image d'accueil
const accueilHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
const descAccueil = "Desalin Kilti, organisation culturelle et sociale de la commune de Dessalines : culture, traditions locales, éducation et lecture.";
fs.writeFileSync(path.join(DIST, "index.html"), accueilHtml.replace("</head>", metas({ titre: "Desalin Kilti", description: descAccueil, image: imageDefaut, url: SITE + "/", langue: "fr", type: "website" }) + "\n</head>"));
for (const a of articles) {
  const img = a.image || ((a.galerie || []).find((g) => g && g.image) || {}).image;
  const url = SITE + "/a/" + encodeURIComponent(a.slug) + "/";
  const desc = (a.resume && String(a.resume).trim()) || texteBrut(a.corps).slice(0, 200) || descAccueil;
  const cible = "/#article/" + encodeURIComponent(a.slug);
  const page = `<!DOCTYPE html>
<html lang="${a.langue === "ht" ? "ht" : "fr"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(a.titre)} | Desalin Kilti</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${esc(url)}">
${metas({ titre: a.titre, description: desc, image: img ? absolu(img) : imageDefaut, url, langue: a.langue, type: "article" })}
<meta http-equiv="refresh" content="0;url=${esc(cible)}">
<script>location.replace(${JSON.stringify(cible)});</script>
</head>
<body>
<p><a href="${esc(cible)}">${esc(a.titre)}</a></p>
</body>
</html>
`;
  fs.mkdirSync(path.join(DIST, "a", a.slug), { recursive: true });
  fs.writeFileSync(path.join(DIST, "a", a.slug, "index.html"), page);
}

// Service worker (application installable, lecture hors connexion)
const version = "dk-" + crypto.createHash("sha1").update(data + fs.readFileSync(path.join(DIST, "index.html")) + fs.readFileSync(path.join(DIST, "app.js"))).digest("hex").slice(0, 10);
const coeur = ["./", "index.html", "app.js", "data.json", "logo.png", "manifest.webmanifest", "media/accueil-paysage.jpg",
  "fonts/roboto.woff2", "fonts/roboto-italic.woff2", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
fs.writeFileSync(path.join(DIST, "sw.js"), `const VERSION = ${JSON.stringify(version)};
const COEUR = ${JSON.stringify(coeur)};
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(COEUR)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  const reseauDabord = req.mode === "navigate" || url.pathname.endsWith("/data.json") || url.pathname.endsWith("/app.js");
  if (reseauDabord) {
    e.respondWith(fetch(req).then(r => { if (!url.pathname.startsWith("/a/")) { const c = r.clone(); caches.open(VERSION).then(x => x.put(req.mode === "navigate" ? "index.html" : req, c)); } return r; })
      .catch(() => caches.match(req.mode === "navigate" ? "index.html" : req)));
    return;
  }
  e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => { if (r && r.ok) { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); } return r; })));
});
`);
console.log(`Site construit : ${articles.length} articles (${articles.filter(a => a.rubrique === "media").length} Média, ${articles.filter(a => a.rubrique === "pawol").length} Pawòl Desalin), version ${version}`);
