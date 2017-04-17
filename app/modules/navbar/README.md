# Module navbar
Ce module permet l'affichage d'une barre de navigation référençant l'ensembles des modules dont l'attribut `referenced` vaut `true`dans le fichier [modules_list.json](../../config/modules_list.json).

Lors de l'affichage sur mobile (résolution < 900px), des icônes déterminés dans le fichiers [properties.json](./json_config/properties.json) sont affichés à la place du nom de module à afficher. Ces icônes sont référencés à l'aide de noms de classes de la libraire [font-awesome](http://fontawesome.io/icons/).

Lors d'un scroll vers le bas de l'écran, la barre de navigation disparait automatiquement, et réapparait lors d'un scroll vers le haut.
