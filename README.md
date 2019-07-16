# CollaBot

## Installation

### Git

Pour télécharger le projet, installer [Git](https://git-scm.com/downloads). Git est un logiciel qui permet de télécharger des projets hébergés a distance, et de mettre a jour ces memes projets, apres les avoir modifiés localement sur nos machines.
Apres l'installation, ouvrez votre invité de commandes (ou terminal). Dans l'invité de commandes tapez:

```shell
git clone git://github.com/botistan/collabot.git
```

Cela téléchargera le projet sur votre ordinateur. Pour plus d'infos sur le fonctionnement basique des commandes de git voir [cette page](https://git-scm.com/book/fr/v1/Les-bases-de-Git-D%C3%A9marrer-un-d%C3%A9p%C3%B4t-Git)
Maintenant vous pouvez ouvrir le dossier du projet téléchargé dans votre éditeur favoris. Pour nous, [Visual Studio Code](https://code.visualstudio.com/).

NOTE: si les lignes de commandes sont compliqués a utilisées pour vous, différents logiciels existent pour aider a utiliser Git visuellement. Le plus simple est [Github Destop](https://desktop.github.com/). (C'est pas plutôt Desktop?)
Pour un résumé de comment tout ça fonctionne, [cette page peut aider](https://o7planning.org/fr/10283/utiliser-github-avec-github-desktop)

### Node.js

Pour travailler sur le projet, il faut d'abord installer [Node.js](https://nodejs.org/). Node est un petit serveur pour [JavaScript](https://fr.wikipedia.org/wiki/JavaScript), et vient avec un gestionnaire de paquets, [npm](https://www.npmjs.com/), qui permet de télécharger des librairies Javascripts, et les attacher a des projets.

### npm

Une fois que Node est installé, ouvrez votre terminal (invité de commandes sous Windows) et placez vous dans le dossier du projet:

Pour Windows tapez

```shell
cd C:\Users\votrenom\nomdudossier
```

dans le terminal

Pour Mac et Linux

```shell
cd ./nomdudossier
```

Une fois dans le dossier tapez

```shell
npm install
```

ou

```shell
npm i
```

Cela devrait installer le projet et toutes les dépendences, listées dans `package.json`, dans votre dossier, et vous pourrez commencer a travailler.

## Développement

### Documentations utiles

- [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) (en anglais)
- Tuto [Créer un bot discord en moins d'un quart d'heure](https://thomlom.dev/create-a-discord-bot-under-15-minutes/) (en anglais)

### Comment exectuer le code

Dans le terminal:

```shell
node app.js
```

### Comment mettre a jour le répertoire Git apres modifications

Apres changements faire dans le terminal:

```shell
git commit -m "message expliquant le changement"
git push
```

Si vous restez longtemps sans toucher le projet et que vous pensez que d'autres aient pu travailler dessus, veillez a exécuter:

```shell
git pull
```

pour récupérer la derniere version du projet a tout moment.

## Serveur OVH

Dans le terminal insérez

```shell
ssh root@51.91.9.4
```

Puis entrez le mot de passe root `R00TSTYLE`

Sur le serveur exécutez

```shell
git pull
```

Pour récupérer la nouvelle version du code. Puis lancer:

```shell
node app.js
```
