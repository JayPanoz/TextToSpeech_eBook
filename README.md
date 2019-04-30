# Kit de test EPUB pour Text-to-speech (synthèse vocale)

Le projet text-to-speech est né de la volonté de mieux concevoir les livres numériques que nous fabriquons. Et plutôt que de nous limiter à une analyse purement technique de la situation, nous avons cherché dans un premier temps à voir quels problèmes pouvaient se poser pour des contenus que nous retrouvons régulièrement dans les livres afin que cela puisse également servir aux éditeurs, aux correcteurs et aux auteurs.

Ce kit est loin d’être complet, il constitue une base sur laquelle beaucoup de choses sont à ajouter. Ce projet est né en avril 2015, cf. [ce billet](http://jiminy.chapalpanoz.com/text-to-speech-ebook/). Faute de temps et de contributions, il n’a pas pu être complété et mis à jour vers EPUB3 avant ce dépôt sur Github.

## Licence

Ce kit est placé sous licence [Creative Commons 0](https://creativecommons.org/publicdomain/zero/1.0/deed.fr). En d’autres termes, c’est comme si nous le transférions dans le domaine public.

## TODO

La version EPUB3 a été créée à l’occasion du dépôt Github, **elle entraîne la dépréciation de la version ePub 2.** Néanmoins, elle n’est qu’une base sur laquelle beaucoup de choses vont devoir être entreprises.

Voici ce qu’il reste à faire pour ce projet, avec un calendrier suffisamment vague pour ne pas se planter — chat échaudé…

### Court terme

- ~~Ajouter une couverture.~~
- ~~Réintégrer les résultats ePub 2 au kit (même si déprécié).~~
- ~~Compléter ARIA + les inflections `epub:type`.~~
- ~~Ajouter des contenus SVG, MathML, etc.~~
- ~~Vérifier que tout est OK au niveau structure, sémantique, etc.~~
- Trouver des cas d'écoles, des pièges bien relous pour les lecteurs d'écran.
- Mettre à jour en [EPUB 3.2](https://w3c.github.io/publ-epub-revision/epub32/spec/epub-spec.html) (metadata, attributs ARIA role, etc.) dès la publication des specs.

### Moyen terme

- Collecter et présenter les résultats.
- Revoir les textes.
- ~~Mettre à jour en [EPUB 3.1](http://www.idpf.org/epub/31/spec/epub-changes.html) (metadata, attributs ARIA role, etc.).~~
- Établir une liste de bonnes pratiques.

### Long terme

- Créer une sorte de [Can I Use](http://caniuse.com) pour la synthèse vocale eBook (rechercher quelque chose → obtenir les résultats).
- Revoir l’architecture du fichier EPUB pour faciliter ce CanIUse – si besoin.
- Créer des kits dans d’autres langues.
- Créer un kit pour le *fixed-layout* (mise en page fixe), si possible interactif.

## Infos utiles

- Les fichiers ne disposent pas de feuilles de styles CSS — si besoin, ils sont ajoutés dans `<head>`.
- Les versions Kindle sont simplement converties à l'aide du logiciel Kindle Previewer.
- Des identifiants sont attribués aux éléments HTML afin de spécifier ce qui est testé (dans le paragraphe, la liste, etc.).
- Les tests sont systématiquement effectués avec les outils activés (VoiceOver, Talkback, etc.), des différences notables pouvant être reportés avec des fonctionnalités « light » comme « Parole » sur iOS, par exemple.
- Les langues étrangères sont indiquées à l'aide de `xml:lang` (et pas de `lang`).
- Les outils payants n’ont pas pu être testés.
- Depuis ajout de MathML et SVG, Kindle Previewer ne peut plus convertir pour Kindle for iOS. La version précédente reste néanmoins à disposition.
