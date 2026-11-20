/* Desalin Kilti : affichage du site à partir de data.json (généré à partir des contenus du tableau de bord) */
(function(){
  var I18N = {"fr": {"doc_titre": "Desalin Kilti", "logo_aria": "Desalin Kilti, retour à l’accueil", "nav_aria": "Navigation principale", "lang_aria": "Choisir la langue", "nav_media": "Média", "nav_apropos": "À propos", "nav_equipe": "Équipe", "nav_contact": "Nous joindre", "hero_titre": "La culture de Dessalines, vivante et partagée.", "hero_texte": "Desalin Kilti fait rayonner la culture et les traditions de notre commune, et donne aux jeunes le goût de l’école et de la lecture.", "hero_b1": "Lire nos articles", "hero_b2": "Découvrir l’organisation", "media_titre": "Le média", "media_sous": "Reportages, portraits et conseils de lecture sur la vie culturelle de Dessalines.", "media_aria": "Filtrer les articles par thème", "tout": "Tout", "pawol_sous": "L’actualité politique, sociale et économique de Dessalines-Ville.", "pawol_aria": "Filtrer les nouvelles par rubrique", "apropos_titre": "Qui sommes-nous?", "apropos_intro": "Desalin Kilti est une organisation culturelle et sociale qui œuvre à la promotion de la culture tout en valorisant les traditions locales de la commune de Dessalines. Elle encourage aussi les jeunes à s'investir dans leur éducation et les sensibilise à l'importance de la lecture.", "m_kilti": "Promouvoir la culture sous toutes ses formes et donner de la visibilité aux talents de la commune.", "m_tradisyon": "Valoriser les traditions locales de Dessalines pour qu'elles se transmettent d'une génération à l'autre.", "m_edikasyon": "Encourager les jeunes à poursuivre leurs études et à croire en ce que l'école peut leur apporter.", "m_lekti": "Sensibiliser à l'importance de la lecture et faire du livre un compagnon du quotidien.", "equipe_titre": "L’équipe", "equipe_sous": "Les personnes qui font vivre Desalin Kilti au quotidien.", "fondateur": "Fondateur", "membre": "Membre", "contact_titre": "Nous joindre", "contact_texte": "Vous voulez participer à nos activités, proposer un sujet au média ou soutenir nos projets pour les jeunes? Écrivez-nous par courriel ou sur Facebook.", "contact_bouton": "Nous écrire", "courriel": "Courriel", "fb_lien": "Suivez notre page Facebook", "adresse": "Adresse", "adresse_val": "Dessalines, Haïti", "pied": "Organisation culturelle et sociale de Dessalines.", "retour_media": "Retour au média", "retour_pawol": "Retour à Pawòl Desalin", "par": "Par", "en_images": "En images", "photos_activite": "photos de l’activité.", "photo": "Photo :", "photos": "Photos :", "sur": "sur", "agrandir": "Agrandir la photo : ", "vis_aria": "Photo en grand format", "vis_prec": "Photo précédente", "vis_suiv": "Photo suivante", "vis_fermer": "Fermer", "exemple": "Article exemple", "lire": "Lire l’article", "vide_media": "Aucun article dans ce thème pour le moment.", "vide_pawol": "Aucune nouvelle publiée pour le moment.", "vide_rub_a": "Aucune nouvelle dans la rubrique ", "vide_rub_b": " pour le moment.", "vide_info": "Vous avez une information sur la vie de Dessalines-Ville? ", "ecrivez": "Écrivez-nous", "voir_fb": "Voir la vidéo de l’intervention sur Facebook", "installer": "Installer l’application", "lire_aussi": "Lire aussi", "radyo_sous": "Écoutez nos émissions en direct, partout dans le monde.", "radyo_attente": "Le lecteur radio s’affiche sur le site en ligne.", "en_direct": "En direct", "hors_antenne": "Hors antenne", "rediffusion": "Rediffusion", "voir_direct_fb": "Regarder sur Facebook", "photos_n": "photos.", "installer_ios": "Pour installer l’application sur iPhone : touchez le bouton Partager, puis « Sur l’écran d’accueil »."}, "ht": {"doc_titre": "Desalin Kilti", "logo_aria": "Desalin Kilti, retounen lakay", "nav_aria": "Navigasyon prensipal", "lang_aria": "Chwazi lang", "nav_media": "Medya", "nav_apropos": "Sou nou", "nav_equipe": "Ekip", "nav_contact": "Kontakte nou", "hero_titre": "Kilti Desalin, vivan epi pataje.", "hero_texte": "Desalin Kilti fè kilti ak tradisyon komin nou an klere, epi l ap bay jèn yo gou pou lekòl ak lekti.", "hero_b1": "Li atik nou yo", "hero_b2": "Dekouvri òganizasyon an", "media_titre": "Medya a", "media_sous": "Repòtaj, pòtre ak konsèy lekti sou lavi kiltirèl Desalin.", "media_aria": "Filtre atik yo pa tèm", "tout": "Tout", "pawol_sous": "Nouvèl politik, sosyal ak ekonomik Desalin-Vil.", "pawol_aria": "Filtre nouvèl yo pa ribrik", "apropos_titre": "Ki moun nou ye?", "apropos_intro": "Desalin Kilti se yon òganizasyon kiltirèl ak sosyal k ap travay pou ankouraje kilti a, pandan l ap valorize tradisyon lokal nan komin Desalin. Nou ankouraje jèn yo tou pou yo pran edikasyon yo oserye, epi sansibilize yo sou enpòtans lekti.", "m_kilti": "Ankouraje kilti a sou tout fòm li, epi bay talan komin nan plis vizibilite.", "m_tradisyon": "Valorize tradisyon lokal Desalin yo pou yo ka pase de jenerasyon an jenerasyon.", "m_edikasyon": "Ankouraje jèn yo pou yo kontinye etid yo epi kwè nan sa lekòl ka pote pou yo.", "m_lekti": "Sansibilize moun sou enpòtans lekti, epi fè liv tounen yon konpayon chak jou.", "equipe_titre": "Ekip la", "equipe_sous": "Moun ki fè Desalin Kilti viv chak jou.", "fondateur": "Fondatè", "membre": "Manm", "contact_titre": "Kontakte nou", "contact_texte": "Ou vle patisipe nan aktivite nou yo, pwopoze yon sijè pou medya a, oswa sipòte pwojè nou yo pou jèn yo? Ekri nou pa imèl oswa sou Facebook.", "contact_bouton": "Ekri nou", "courriel": "Imèl", "fb_lien": "Swiv paj Facebook nou an", "adresse": "Adrès", "adresse_val": "Desalin, Ayiti", "pied": "Òganizasyon kiltirèl ak sosyal Desalin.", "retour_media": "Retounen nan medya a", "retour_pawol": "Retounen nan Pawòl Desalin", "par": "Ekri pa", "en_images": "An imaj", "photos_activite": "foto aktivite a.", "photo": "Foto :", "photos": "Foto :", "sur": "sou", "agrandir": "Grandi foto a : ", "vis_aria": "Foto an gwo", "vis_prec": "Foto anvan", "vis_suiv": "Foto apre", "vis_fermer": "Fèmen", "exemple": "Egzanp atik", "lire": "Li atik la", "vide_media": "Pa gen atik nan tèm sa a pou kounye a.", "vide_pawol": "Poko gen nouvèl ki pibliye.", "vide_rub_a": "Pa gen nouvèl nan ribrik ", "vide_rub_b": " pou kounye a.", "vide_info": "Ou gen yon enfòmasyon sou lavi Desalin-Vil? ", "ecrivez": "Ekri nou", "voir_fb": "Gade videyo entèvansyon an sou Facebook", "installer": "Enstale aplikasyon an", "lire_aussi": "Li tou", "radyo_sous": "Koute emisyon nou yo an dirèk, toupatou sou latè.", "radyo_attente": "Lektè radyo a parèt sou sit la sou entènèt.", "en_direct": "An dirèk", "hors_antenne": "Pa an dirèk", "rediffusion": "Rediffizyon", "voir_direct_fb": "Gade l sou Facebook", "photos_n": "foto.", "installer_ios": "Pou enstale aplikasyon an sou iPhone : touche bouton Pataje a, epi « Sou ekran dakèy la »."}};
  var langue = "fr";
  try { var memo = localStorage.getItem("dk-langue"); if(memo === "ht" || memo === "fr"){ langue = memo; } } catch(e){}
  function T(k){ return (I18N[langue] && I18N[langue][k]) || I18N.fr[k] || k; }
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
  var noms = {kilti:"#Kilti", patrimwan:"#Patrimwàn", tradisyon:"#Tradisyon", lekti:"#Lekti", edikasyon:"#Edikasyon", politik:"#Politik", sosyal:"#Sosyal", ekonomi:"#Ekonomi"};
  var articles = [], REG = {direct:{etat:"aucun"}, radyo:{}, equipe:[]};
  var filtreMedia = "tout", filtrePawol = "tout", articleCourant = null;
  var zone = document.getElementById("articles"), zoneNouvelles = document.getElementById("nouvelles");
  function langArt(a){ return a.langue || "fr"; }
  function cadre(a){ return (a.cadrage != null && a.cadrage !== "") ? ' style="object-position:center ' + Number(a.cadrage) + '%"' : ""; }

  // ---------- Média ----------
  function afficher(filtre){
    filtreMedia = filtre; zone.innerHTML = "";
    var liste = articles.filter(function(a){ return a.rubrique === "media" && (filtre === "tout" || a.tag === filtre); });
    if(!liste.length){ zone.innerHTML = '<p class="vide-msg">' + T("vide_media") + '</p>'; return; }
    var uneFaite = false;
    liste.forEach(function(a){
      var el = document.createElement("article");
      var une = a.a_la_une && filtre === "tout" && !uneFaite; if(une){ uneFaite = true; }
      el.className = "article" + (une ? " une" : "");
      var lien = "#article/" + a.slug, la = langArt(a);
      var visuel = a.image ?
        '<div class="visuel v-photo"><img src="' + esc(a.image) + '" alt="" loading="lazy"' + cadre(a) + '></div>' :
        '<div class="visuel v-' + a.tag + '">' + (a.exemple ? '<span class="exemple">' + T("exemple") + '</span>' : '<span class="nom-visuel">' + esc(a.texte_visuel || "") + '</span>') + '<span class="grand" aria-hidden="true">#</span></div>';
      el.innerHTML =
        '<a class="lien-visuel" href="' + lien + '" tabindex="-1" aria-hidden="true">' + visuel + '</a>' +
        '<span class="tag">' + noms[a.tag] + (a.periode ? '<span class="date" lang="' + la + '"> ' + esc(a.periode) + '</span>' : '') + '</span>' +
        '<h3 lang="' + la + '"><a href="' + lien + '">' + esc(a.titre) + '</a></h3>' +
        '<p lang="' + la + '">' + esc(a.resume) + '</p>' +
        '<a class="lire" href="' + lien + '">' + T("lire") + '</a>';
      zone.appendChild(el);
    });
  }
  document.querySelectorAll("#media .filtre").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll("#media .filtre").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      b.setAttribute("aria-pressed","true"); afficher(b.dataset.filtre);
    });
  });

  // ---------- Pawòl Desalin ----------
  function afficherPawol(filtre){
    filtrePawol = filtre; zoneNouvelles.innerHTML = "";
    var liste = articles.filter(function(a){ return a.rubrique === "pawol" && (filtre === "tout" || a.tag === filtre); });
    if(!liste.length){
      var vide = document.createElement("div"); vide.className = "nouvelles-vide";
      vide.innerHTML = '<p class="vide-titre">' + (filtre === "tout" ? T("vide_pawol") : T("vide_rub_a") + noms[filtre] + T("vide_rub_b")) + '</p>' +
        '<p>' + T("vide_info") + '<a href="mailto:desalinkilti@yahoo.com">' + T("ecrivez") + '</a>.</p>';
      zoneNouvelles.appendChild(vide); return;
    }
    liste.forEach(function(a){
      var el = document.createElement("article"); el.className = "nouvelle";
      var lien = "#article/" + a.slug, la = langArt(a);
      el.innerHTML =
        '<div class="nouvelle-meta">' + (a.image ? '<a class="nouvelle-img" href="' + lien + '" tabindex="-1" aria-hidden="true"><img src="' + esc(a.image) + '" alt="" loading="lazy"' + cadre(a) + '></a>' : '') +
        '<span class="tag">' + noms[a.tag] + '</span>' + (a.periode ? '<span class="date" lang="' + la + '">' + esc(a.periode) + '</span>' : '') + '</div>' +
        '<div><h3 lang="' + la + '"><a href="' + lien + '">' + esc(a.titre) + '</a></h3><p lang="' + la + '">' + esc(a.resume) + '</p></div>';
      zoneNouvelles.appendChild(el);
    });
  }
  document.querySelectorAll("#pawol .filtre").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll("#pawol .filtre").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      b.setAttribute("aria-pressed","true"); afficherPawol(b.dataset.rubrique);
    });
  });

  // ---------- Direct Facebook ----------
  function afficherDirect(){
    var D = REG.direct || {}, bloc = document.getElementById("direct");
    var actif = (D.etat === "direct" || D.etat === "rediffusion") && D.lien;
    majNavDirect();
    if(!actif){ bloc.hidden = true; return; }
    bloc.hidden = false; bloc.classList.toggle("en-cours", D.etat === "direct");
    document.getElementById("direct-etat").textContent = T(D.etat === "direct" ? "en_direct" : "rediffusion");
    var titre = (langue === "ht" ? (D.titre_ht || D.titre_fr) : (D.titre_fr || D.titre_ht)) || "Pawòl Desalin";
    document.getElementById("direct-titre").textContent = titre;
    var ifr = document.getElementById("direct-iframe");
    var src = "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(D.lien) + "&show_text=false&width=1280";
    if(ifr.getAttribute("src") !== src){ ifr.setAttribute("src", src); }
    ifr.title = titre;
    var a = document.getElementById("direct-lien"); a.href = D.lien; a.textContent = T("voir_direct_fb");
  }

  // ---------- Radio ----------
  // Bouton « En direct » du menu : vidéo Facebook en priorité, sinon la radio
  function majNavDirect(){
    var D = REG.direct || {}, R = REG.radyo || {}, nav = document.getElementById("nav-direct");
    var video = D.etat === "direct" && D.lien, radio = R.afficher && R.jeton_public && R.etat === "direct";
    nav.hidden = !(video || radio);
    nav.setAttribute("href", video ? "#direct" : "#radyo");
  }
  function installerLecteurRadio(){
    var R = REG.radyo || {}, bloc = document.getElementById("radyo");
    if(!R.afficher || !R.jeton_public){ bloc.hidden = true; return; }
    var zoneW = document.getElementById("radyo-widget"); zoneW.innerHTML = "";
    var w = document.createElement("div"); w.className = "cstrEmbed";
    w.setAttribute("data-type", R.type_lecteur || "newStreamPlayer"); w.setAttribute("data-publicToken", R.jeton_public);
    w.setAttribute("data-theme", "light"); w.setAttribute("data-color", "000000"); w.setAttribute("data-channelId", R.id_chaine || ""); w.setAttribute("data-rendered", "false");
    w.innerHTML = '<a href="https://www.caster.fm">Shoutcast Hosting</a> <a href="https://www.caster.fm">Stream Hosting</a> <a href="https://www.caster.fm">Radio Server Hosting</a>';
    zoneW.appendChild(w);
    var sc = document.createElement("script"); sc.src = "https://cdn.cloud.caster.fm//widgets/embed.js"; zoneW.appendChild(sc);
  }
  // État de la radio (comme pour le direct) : hors antenne, en direct ou rediffusion
  function afficherRadio(){
    var R = REG.radyo || {}, bloc = document.getElementById("radyo");
    var etat = R.etat === "direct" || R.etat === "rediffusion" ? R.etat : "hors_antenne";
    bloc.classList.toggle("en-cours", etat === "direct");
    var badge = document.getElementById("radyo-badge");
    badge.hidden = etat === "hors_antenne";
    document.getElementById("radyo-etat").textContent = T(etat === "direct" ? "en_direct" : "rediffusion");
    var em = (langue === "ht" ? (R.titre_ht || R.titre_fr) : (R.titre_fr || R.titre_ht)) || "";
    var pe = document.getElementById("radyo-emission");
    pe.textContent = em; pe.hidden = !em || etat === "hors_antenne";
    majNavDirect();
  }

  // ---------- Équipe ----------
  var COULEURS = [["var(--bleu)","var(--jaune)"],["var(--jaune)","var(--bleu-fonce)"],["var(--rouge)","#fff"],["var(--bleu-fonce)","var(--rouge)"]];
  function afficherEquipe(){
    var ul = document.getElementById("liste-equipe"); ul.innerHTML = "";
    (REG.equipe || []).forEach(function(m, i){
      var mots = String(m.nom || "").trim().split(/\s+/).filter(function(x){ return /^[A-Za-zÀ-ÿ]/.test(x); });
      var ini = ((mots[0] || "")[0] || "") + ((mots.length > 1 ? mots[mots.length-1] : "")[0] || "");
      var c = COULEURS[i % COULEURS.length];
      var li = document.createElement("li"); li.className = "membre"; li.style.cssText = "--c:" + c[0] + ";--ci:" + c[1];
      li.innerHTML = '<div class="initiales" aria-hidden="true">' + esc(ini.toUpperCase()) + '</div><h3>' + esc(m.nom) + '</h3><p>' + T(m.role === "fondateur" ? "fondateur" : "membre") + '</p>';
      ul.appendChild(li);
    });
  }

  // ---------- Lecture d'un article ----------
  function typoNoeuds(el){
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n;
    while((n = w.nextNode())){ n.nodeValue = n.nodeValue.replace(/« /g, "«\u00a0").replace(/ (»|\?|!|:|;)/g, "\u00a0$1"); }
  }
  function preparerCorps(corps, a){
    // images insérées dans le texte : cadre + légende (texte alternatif, et crédit dans le titre)
    corps.querySelectorAll("img").forEach(function(img){
      var fg = document.createElement("figure"); fg.className = "figure-article";
      var p = img.parentNode; var seul = p && p.tagName === "P" && p.textContent.trim() === "" && p.querySelectorAll("img").length === 1;
      (seul ? p : img).replaceWith(fg); fg.appendChild(img); img.loading = "lazy";
      if(img.alt || img.title){
        var fc = document.createElement("figcaption"); fc.lang = "fr";
        fc.textContent = (img.alt || "") + (img.title ? (img.alt ? ". " : "") + T("photo") + " " + img.title + "." : (img.alt ? "." : ""));
        fg.appendChild(fc);
      }
      var verif = function(){ if(img.naturalHeight > img.naturalWidth * 1.1){ fg.classList.add("portrait"); } };
      if(img.complete){ verif(); } else { img.addEventListener("load", verif); }
    });
    corps.querySelectorAll('a[href^="http"]').forEach(function(l){ l.target = "_blank"; l.rel = "noopener"; });
    if(langArt(a) === "fr"){ typoNoeuds(corps); }
  }
  var liste = [], courant = 0, creditCourant = "";
  function ouvrirArticle(a){
    articleCourant = a;
    var la = langArt(a);
    document.getElementById("lecture").classList.toggle("sobre", !!a.sobre);
    document.getElementById("lecture-tag").textContent = noms[a.tag];
    var titreEl = document.getElementById("lecture-titre"); titreEl.textContent = a.titre; titreEl.setAttribute("lang", la);
    var ret = document.querySelector(".retour");
    ret.setAttribute("href", a.rubrique === "pawol" ? "#pawol" : "#media");
    ret.textContent = a.rubrique === "pawol" ? T("retour_pawol") : T("retour_media");
    var meta = document.getElementById("lecture-meta"); meta.innerHTML = "";
    if(a.auteur){ meta.appendChild(document.createTextNode(T("par") + " " + a.auteur + ".")); }
    if(a.periode){ var sp = document.createElement("span"); sp.lang = la; sp.textContent = " " + a.periode + "."; meta.appendChild(sp); }
    var corps = document.getElementById("lecture-corps"); corps.setAttribute("lang", la);
    corps.innerHTML = a.corps || "";
    preparerCorps(corps, a);
    if(a.lien_video){
      var pl = document.createElement("p"); pl.className = "lien-externe";
      var al = document.createElement("a"); al.className = "bouton plein"; al.href = a.lien_video; al.target = "_blank"; al.rel = "noopener"; al.textContent = T("voir_fb");
      pl.appendChild(al); corps.appendChild(pl);
    }
    if(a.auteur){ var sig = document.createElement("p"); sig.className = "signature"; sig.textContent = a.auteur; corps.appendChild(sig); }
    var enc = a.encadre || {}, lignes = (enc.lignes || []).filter(function(l){ return l && (l.libelle || l.valeur); });
    var pal = document.getElementById("lecture-palmares"); pal.innerHTML = "";
    document.getElementById("titre-palmares").textContent = enc.titre || "";
    document.getElementById("encadre").setAttribute("lang", la);
    lignes.forEach(function(l){
      var dt = document.createElement("dt"); dt.textContent = l.libelle || "";
      var dd = document.createElement("dd"); dd.textContent = l.valeur || "";
      pal.appendChild(dt); pal.appendChild(dd);
    });
    document.getElementById("encadre").hidden = !lignes.length;
    var fig = document.getElementById("photo-une");
    if(a.image){
      fig.hidden = false;
      var im = document.getElementById("photo-une-img"); im.src = a.image; im.alt = a.image_legende || "";
      im.style.objectPosition = "center " + (a.cadrage != null && a.cadrage !== "" ? Number(a.cadrage) : 50) + "%";
      document.getElementById("photo-une-legende").textContent = (a.image_legende || "") + (a.image_credit ? (a.image_legende ? ". " : "") + T("photo") + " " + a.image_credit + "." : (a.image_legende ? "." : ""));
    } else { fig.hidden = true; }
    var bloc = document.getElementById("galerie-bloc"), gal = document.getElementById("galerie");
    gal.innerHTML = ""; liste = (a.galerie || []).filter(function(g){ return g && g.image; });
    bloc.hidden = !liste.length;
    document.getElementById("galerie-credit").textContent = liste.length + " " + T(a.sobre ? "photos_n" : "photos_activite") + (a.credit_photos ? " " + T("photos") + " " + a.credit_photos + "." : "");
    liste.forEach(function(g, i){
      var b = document.createElement("button"); b.type = "button";
      b.className = "vignette" + (i === 0 && liste.length >= 6 ? " large" : "");
      b.setAttribute("aria-label", T("agrandir") + (g.legende || ""));
      var im = document.createElement("img"); im.src = g.image; im.alt = ""; im.loading = "lazy";
      im.addEventListener("load", function(){ if(im.naturalHeight > im.naturalWidth * 1.1 && !b.classList.contains("large")){ b.classList.add("portrait"); } });
      b.appendChild(im); b.addEventListener("click", function(){ ouvrirVis(i, a.credit_photos); });
      gal.appendChild(b);
    });
    document.title = a.titre + " | Desalin Kilti";
  }
  var vis = document.getElementById("visionneuse");
  function montrer(){
    var g = liste[courant];
    document.getElementById("vis-img").src = g.image; document.getElementById("vis-img").alt = g.legende || "";
    document.getElementById("vis-legende").textContent = g.legende ? g.legende + "." : "";
    document.getElementById("vis-compteur").textContent = (courant + 1) + " " + T("sur") + " " + liste.length + (creditCourant ? ". " + T("photo") + " " + creditCourant + "." : "");
  }
  function ouvrirVis(i, credit){ courant = i; creditCourant = credit || ""; montrer(); if(vis.showModal){ vis.showModal(); } else { vis.setAttribute("open",""); } }
  function decaler(n){ courant = (courant + n + liste.length) % liste.length; montrer(); }
  document.getElementById("vis-prec").addEventListener("click", function(){ decaler(-1); });
  document.getElementById("vis-suiv").addEventListener("click", function(){ decaler(1); });
  document.getElementById("vis-fermer").addEventListener("click", function(){ vis.close ? vis.close() : vis.removeAttribute("open"); });
  vis.addEventListener("click", function(e){ if(e.target === vis){ vis.close(); } });
  vis.addEventListener("keydown", function(e){ if(e.key === "ArrowLeft"){ decaler(-1); } if(e.key === "ArrowRight"){ decaler(1); } });

  function route(){
    var m = location.hash.match(/^#article\/(.+)$/);
    var a = m && articles.filter(function(x){ return x.slug === decodeURIComponent(m[1]); })[0];
    if(a){
      ouvrirArticle(a); document.body.classList.add("mode-lecture"); window.scrollTo(0,0);
      document.getElementById("lecture-titre").focus({preventScroll:true});
    } else {
      var etaitLecture = document.body.classList.contains("mode-lecture");
      document.body.classList.remove("mode-lecture"); articleCourant = null; document.title = "Desalin Kilti";
      if(etaitLecture || m){
        var cible = location.hash && !m && document.querySelector(location.hash);
        if(cible){ cible.scrollIntoView(); } else { window.scrollTo(0,0); }
      }
    }
  }
  function appliquerLangue(l){
    langue = l;
    try { localStorage.setItem("dk-langue", l); } catch(e){}
    document.documentElement.lang = l;
    document.querySelectorAll("[data-i18n]").forEach(function(el){ el.textContent = T(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function(el){ el.setAttribute("aria-label", T(el.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll(".langue button").forEach(function(b){ b.setAttribute("aria-pressed", b.dataset.lang === l ? "true" : "false"); });
    afficher(filtreMedia); afficherPawol(filtrePawol); afficherDirect(); afficherRadio(); afficherEquipe();
    if(articleCourant){ ouvrirArticle(articleCourant); }
    if(vis.open && liste.length){ montrer(); }
  }
  document.querySelectorAll(".langue button").forEach(function(b){ b.addEventListener("click", function(){ appliquerLangue(b.dataset.lang); }); });

  // ---------- Démarrage : chargement des contenus ----------
  function demarrer(data){
    articles = data.articles || []; REG = data.reglages || REG;
    installerLecteurRadio();
    window.addEventListener("hashchange", route);
    appliquerLangue(langue);
    route();
  }
  fetch("data.json", {cache: "no-cache"}).then(function(r){ return r.json(); }).then(demarrer).catch(function(){
    zone.innerHTML = '<p class="vide-msg">Le contenu n’a pas pu être chargé. Vérifiez votre connexion.</p>';
  });

  // ---------- Application installable ----------
  if("serviceWorker" in navigator){ window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); }); }
  var zoneInst = document.getElementById("installer"), btnInst = document.getElementById("btn-installer"), invite = null;
  var dejaInstalle = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if(!dejaInstalle && /iphone|ipad|ipod/i.test(navigator.userAgent)){ zoneInst.hidden = false; document.getElementById("installer-ios").hidden = false; }
  window.addEventListener("beforeinstallprompt", function(e){ e.preventDefault(); invite = e; if(!dejaInstalle){ zoneInst.hidden = false; btnInst.hidden = false; } });
  btnInst.addEventListener("click", function(){ if(!invite){ return; } invite.prompt(); invite.userChoice.then(function(){ invite = null; btnInst.hidden = true; zoneInst.hidden = true; }); });
  window.addEventListener("appinstalled", function(){ zoneInst.hidden = true; });
  document.getElementById("annee").textContent = new Date().getFullYear();
})();
