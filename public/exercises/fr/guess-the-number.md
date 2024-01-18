# Tutoriel : Jeu de Devine Mon Nombre avec Canvas-block

Bienvenue dans ce tutoriel où nous allons créer un jeu interactif "Devine Mon Nombre". Suivez les étapes ci-dessous pour comprendre le fonctionnement du jeu.

## Initialisation du Canvas

Commencez par définir la taille du canvas à l'aide du bloc `setCanvasSize`. Dans notre exemple, nous avons un canvas de dimensions 1000x1000 pixels.

![setCanvasSize block](blocks/interface_guessnumber.png)

## Affichage des Instructions

Ajoutez des instructions pour guider le joueur. Utilisez les blocs `write` pour afficher le message "Trouve mon nombre entre 0 et 100" et `drawLine` pour créer une ligne de séparation.

![write and drawLine blocks](blocks/interface_guessnumber.png)

## Génération du Nombre Aléatoire

Utilisez le bloc `mathRandomInt` pour générer un nombre aléatoire entre 0 et 100. Ce sera le nombre que le joueur devra deviner.

![mathRandomInt block](blocks/random.png)

## Boucle du Jeu

Utilisez une boucle `while` pour continuer le jeu jusqu'à ce que le joueur devine le bon nombre. Dans la boucle, utilisez `window.prompt` pour permettre au joueur de saisir sa proposition.

![while loop block](blocks/loop_guessnumber.png)

Affichez le résultat du joueur en utilisant les blocs `fill`, et `write`. Le joueur est informé si sa proposition est trop grande ou trop petite à l'aide de blocs conditionnels `if`.

## Fin du Jeu

Lorsque le joueur devine correctement, affichez un message de félicitations avec le score final.

![fill and write blocks for game end](blocks/score_guessnumber.png)

## Conclusion

Félicitations, vous avez créé un jeu interactif de "Devine Mon Nombre" sur Canvas-block ! N'hésitez pas à personnaliser le jeu en ajoutant de nouveaux défis ou fonctionnalités. Amusez-vous bien avec votre création ! 🎮