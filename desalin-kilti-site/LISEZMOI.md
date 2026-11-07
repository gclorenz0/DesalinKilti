# Site Desalin Kilti

Ce dossier contient tout le site Desalin Kilti, prêt à être géré avec un tableau de bord (Pages CMS).

## Ce que contient le dossier

- `content/media/` : les articles de la section Média (un fichier par article)
- `content/pawol/` : les nouvelles de Pawòl Desalin (un fichier par nouvelle)
- `content/reglages.json` : le direct Facebook, la radio et l'équipe
- `media/` : les photos
- `site/` : la mise en page du site (HTML, styles, script, polices, icônes)
- `scripts/build.js` : assemble le site ; Netlify le lance automatiquement
- `netlify.toml` : les réglages de Netlify
- `.pages.yml` : la configuration du tableau de bord (fichier caché ; une copie visible s'appelle `CONFIGURATION-TABLEAU-DE-BORD.yml`)

## Mise en place (une seule fois)

1. **GitHub** : créer un dépôt (par exemple `desalin-kilti-site`), puis « Add file » → « Upload files » et glisser **le contenu** de ce dossier.
2. **Le fichier caché** : sur Mac, `.pages.yml` est invisible dans le Finder. Dans GitHub, faire « Add file » → « Create new file », nommer le fichier `.pages.yml` et y coller le contenu de `CONFIGURATION-TABLEAU-DE-BORD.yml`.
3. **Netlify** : relier le site au dépôt GitHub. Les réglages (commande `node scripts/build.js`, dossier `dist`) sont lus automatiquement dans `netlify.toml`.
4. **Pages CMS** : aller sur https://app.pagescms.org, se connecter avec GitHub, installer l'application GitHub de Pages CMS sur le dépôt, puis ouvrir le dépôt.

## Au quotidien

- Ajouter un article : Pages CMS → « Média » ou « Pawòl Desalin » → « Ajouter ».
- Lancer un direct : Pages CMS → « Réglages » → Direct → état « En direct maintenant » + lien Facebook → Enregistrer.
- Le site en ligne se met à jour environ une minute après chaque enregistrement.
- Photos : de préférence moins de 1 Mo et environ 1600 pixels de large.
