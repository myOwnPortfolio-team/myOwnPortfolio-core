# myOwnPortfolio
[![Build Status](https://travis-ci.org/MacBootglass/myOwnPortfolio.svg?branch=master)](https://travis-ci.org/MacBootglass/myOwnPortfolio)

## Description du projet
Permet la création et le déploiement rapide d'un portfolio personnalisé et multilingue.

Cliquez [ici](https://macbootglass.github.io) afin de visualiser un exemple de rendu possible.

## Pré-requis
- [Docker]()


## Contexte du projet
Pour tout étudiant, il est intéressant de disposer d'un site web faisant office de portfolio.

Cependant, même si l'on dispose des connaissance en informatique nécessaires à sa création, ce travail peut être long et fastidieux.

Le but de ce projet est donc de faciliter cette étape de création en demandant uniquement à l'utilisateur de compléter des fichiers au formats JSON.
Ces derniers spécifient les modules que le site contiendra (barre de navigation, bouton de téléchargement de fichiers, ect ...) ainsi que leur contenu textuel. Plusieurs langues peuvent également être définies par l'utilisateur.

Pour les plus aguerris, il est possible de redéfinir l'apparence de certaines parties du site, et ce toujours à partir de fichiers JSON, mais aussi de participer au développement en créant de nouveaux modules (l'ensemble du projet étant codé en React, leurs intégration est aisée).


## Arborescence du projet
_Diagramme de package:_
![Diagramme de Package](./doc/diagrams/package_diagram.svg)


## Fonctionnement et déploiement du projet
Le répertoire `myOwnPortfolio/app/modules_config` contient l'ensemble de la configuration des modules du site, et donc du site en lui même.
C'est dans le fichier `myOwnPortfolio/app/modules_config/modules_config.json` que sont spécifiés tous les modules utilisées, ainsi que les liens vers leurs fichiers de configuration.

Il est important de noter que tous les fichiers JSON utilisées doivent répondre à un schéma JSON prédéfini (utilisation des normes [suivantes](http://json-schema.org/examples.html)). Vous pouvez en consulter la liste [ici](./doc/json-schemas).

Afin de compiler le projet, il est nécéssaire d'exécuter depuis la racine du projet les commandes suivantes:
```bash
$ bash ./tools/local/create_containers.sh # afin de créer les différents containers docker utilisés
$ bash ./tools/local/compile.sh # afin de lancer le container docker de compilation
```
Un répertoire `myOwnPortfolio/dist` contenant l'ensemble des fichiers du site généré.
Plusieurs options sont maintenant possibles:
- déployer cette archive sur [github pages](https://pages.github.com)
- déployer cette archive sur un serveur web personnel
- lancer le site web en local :
```bash
$ bash ./tools/local/exec.sh # à lancer depuis la racine du projet
```


## Principales technologies et librairies utilisées
- [React.js]()
- [Redux]()
- [Express.js]()
- [Docker]()
- [Gulp]()
- [GitFlow]()
- [Travis]()
- [Webpack]()


## Liste des modules:
- [ ] [navbar](./modules/navbar/)
- [ ] [typewritter](./modules/typewritter/)
- [ ] [skills](./modules/skills)
- [ ] [map](./modules/map)
- [ ] [listing](./modules/listing)
- [ ] [forkmeongithub](./modules/forkmeongithub)
- [ ] [downloader](./modules/downloader)
- [ ] [footer](./modules/footer)

__NOTE__: _Pour plus de détails sur le fonctionnement de ces modules, merci de consulter le fichier README.md présent dans chacun des répertoires des modules._
