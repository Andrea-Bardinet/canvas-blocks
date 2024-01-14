# Tutorial: Juego de Adivina Mi Número con Canvas-block

Bienvenido a este tutorial donde crearemos un juego interactivo "Adivina Mi Número" utilizando Canvas-block. Sigue los pasos a continuación para entender cómo funciona el juego.

## Inicialización del Canvas

Comienza por definir el tamaño del lienzo con el bloque `setCanvasSize`. En nuestro ejemplo, tenemos un lienzo con dimensiones de 1000x1000 píxeles.

![setCanvasSize block](blocks/interface_guessnumber.png)

## Mostrar Instrucciones

Agrega instrucciones para guiar al jugador. Utiliza los bloques `write` para mostrar el mensaje "Adivina mi número entre 0 y 100" y `drawLine` para crear una línea de separación.

![write and drawLine blocks](blocks/interface_guessnumber.png)

## Generación del Número Aleatorio

Utiliza el bloque `mathRandomInt` para generar un número aleatorio entre 0 y 100. Este será el número que el jugador deberá adivinar.

![mathRandomInt block](blocks/random.png)

## Bucle del Juego

Utiliza un bucle `while` para continuar el juego hasta que el jugador adivine el número correcto. Dentro del bucle, utiliza `window.prompt` para permitir al jugador ingresar su suposición.

![while loop block](blocks/loop_guessnumber.png)

## Mostrar el Puntaje

Muestra el puntaje del jugador utilizando los bloques `addTerminalLine`, `fill`, y `write`. Se informa al jugador si su suposición es demasiado alta o demasiado baja mediante bloques condicionales `if`.

![addTerminalLine, fill, write, and if blocks](blocks/addTerminalLine_fill_write_if.png)

## Fin del Juego

Cuando el jugador adivina correctamente, muestra un mensaje de felicitaciones con el puntaje final.

![fill and write blocks for game end](blocks/score_guessnumber.png)

## Conclusión

¡Felicidades, has creado un juego interactivo de "Adivina Mi Número" en Canvas-block! Siéntete libre de personalizar el juego agregando nuevos desafíos o funciones. ¡Diviértete con tu creación! 🎮