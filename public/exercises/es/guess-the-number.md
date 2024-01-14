# Tutorial: Juego Adivina el Número con Canvas-block

Bienvenido a este tutorial donde crearemos un juego interactivo de "Adivina el Número" utilizando Canvas-block. Sigue los pasos a continuación para entender cómo funciona el juego.

## Inicialización del Canvas

Comienza por definir el tamaño del lienzo utilizando el bloque `setCanvasSize`. En nuestro ejemplo, tenemos un lienzo con dimensiones de 1000x1000 píxeles.

![setCanvasSize block](blocks/interface_guessnumber.png)

## Mostrar Instrucciones

Añade instrucciones para guiar al jugador. Utiliza los bloques `write` para mostrar el mensaje "Adivina mi número entre 0 y 100" y `drawLine` para crear una línea de separación.

![write and drawLine blocks](blocks/interface_guessnumber.png)

## Generación de Número Aleatorio

Utiliza el bloque `mathRandomInt` para generar un número aleatorio entre 0 y 100. Este será el número que el jugador debe adivinar.

![mathRandomInt block](blocks/random.png)

## Bucle del Juego

Utiliza un bucle `while` para continuar el juego hasta que el jugador adivine el número correcto. En el bucle, utiliza `window.prompt` para permitir al jugador ingresar su propuesta.

![while loop block](blocks/loop_guessnumber.png)

Muestra el resultado del jugador utilizando los bloques `fill` y `write`. Se informa al jugador si su propuesta es demasiado alta o demasiado baja mediante bloques condicionales `if`.

## Fin del Juego

Cuando el jugador adivina correctamente, muestra un mensaje de felicitaciones con la puntuación final utilizando bloques `fill` y `write`.

![fill and write blocks for game end](blocks/score_guessnumber.png)

## Conclusión

¡Felicidades, has creado un juego interactivo de "Adivina el Número" en Canvas-block! Siéntete libre de personalizar el juego añadiendo nuevos desafíos o características. ¡Diviértete con tu creación! 🎮
