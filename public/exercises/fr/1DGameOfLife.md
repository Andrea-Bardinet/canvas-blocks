# Tutoriel : Simulation d'Automate Cellulaire avec Canvas-block

Bienvenue dans ce tutoriel dédié à la création d'une simulation d'automate cellulaire. Dans cette exploration, nous allons découvrir comment générer des configurations de cellules vivantes et mortes, évoluant au fil des itérations selon les règles d'un automate cellulaire.

## Exécution du Programme

Pour observer la simulation en action, suivez ces étapes simples :

1. Appuyez sur le bouton vert "play".
2. Observez attentivement la séquence dynamique se déployer, créant des motifs uniques à chaque étape.

## Fonctions et Explications

### `do_random_line(y)`

Cette fonction remplit une ligne avec des cellules vivantes (couleur rouge) ou mortes (blanc) de manière aléatoire. Cette variabilité initiale contribue à la diversité des motifs générés au fil du temps.

![do random line blocks img](blocks/do_random_line.png)

### `do_line(y)`

La fonction `do_line(y)` remplit une ligne en se basant sur les règles définies dans la fonction `get_next_pixel(x, y)`. Les cellules évoluent selon des critères spécifiques, créant ainsi des motifs structurés.

![do line blocks img](blocks/do_line.png)

### `get_next_pixel(x, y)`

Cette fonction détermine l'état de la cellule suivante en fonction du nombre de cellules vivantes voisines. En suivant les règles de l'automate cellulaire, chaque cellule réagit aux conditions de son environnement, contribuant ainsi à l'évolution globale.

![get next pixel blocks img](blocks/get_next_pixel.png)

### Initialisation et Boucle Principale

Le programme commence par définir la taille du canvas et les couleurs associées aux cellules vivantes et mortes. Ensuite, une boucle itère sur les lignes, générant soit une ligne aléatoire (à l'itération 0) soit une ligne basée sur les règles de l'automate cellulaire.

![init game of life blocks img](blocks/init_gameoflife.png)

## Règles de l'Automate Cellulaire

Les règles de cet automate cellulaire particulier, basé sur le célèbre "Jeu de la Vie" de Conway, sont les suivantes :
- Une cellule morte avec exactement 3 voisins vivants devient vivante.
- Une cellule vivante avec 2 ou 4 voisins vivants reste vivante. Sinon, elle meurt.

## Conclusion

Félicitations, vous venez de créer une simulation d'automate cellulaire captivante ! N'hésitez pas à explorer et expérimenter avec les règles ainsi que les paramètres pour observer une variété de comportements ! 🧪🎨