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

// Service worker (application installable, lecture hors connexion)
const version = "dk-" + crypto.createHash("sha1").update(data + fs.readFileSync(path.join(DIST, "index.html")) + fs.readFileSync(path.join(DIST, "app.js"))).digest("hex").slice(0, 10);
const coeur = ["./", "index.html", "app.js", "data.json", "logo.png", "manifest.webmanifest", "media/accueil-paysage.jpg",
  "fonts/pagella-regular.woff2", "fonts/pagella-italic.woff2", "fonts/pagella-bold.woff2", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
fs.writeFileSync(path.join(DIST, "sw.js"), `const VERSION = ${JSON.stringify(version)};
const COEUR = ${JSON.stringify(coeur)};
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(COEUR)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  const reseauDabord = req.mode === "navigate" || url.pathname.endsWith("/data.json") || url.pathname.endsWith("/app.js");
  if (reseauDabord) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put(req.mode === "navigate" ? "index.html" : req, c)); return r; })
      .catch(() => caches.match(req.mode === "navigate" ? "index.html" : req)));
    return;
  }
  e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => { if (r && r.ok) { const c = r.clone(); caches.open(VERSION).then(x => x.put(req, c)); } return r; })));
});
`);
console.log(`Site construit : ${articles.length} articles (${articles.filter(a => a.rubrique === "media").length} Média, ${articles.filter(a => a.rubrique === "pawol").length} Pawòl Desalin), version ${version}`);
