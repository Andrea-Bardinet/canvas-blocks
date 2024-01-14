# Tutorial: Simulación de Autómata Celular con Canvas-block

Bienvenido a este tutorial dedicado a crear una simulación de autómata celular utilizando Canvas-block. En esta exploración, descubriremos cómo generar configuraciones de células vivas y muertas que evolucionan a lo largo de las iteraciones según las reglas de un autómata celular.

## Ejecución del Programa

Para observar la simulación en acción, sigue estos sencillos pasos:

1. Presiona el botón verde "play".
2. Observa atentamente cómo la secuencia dinámica se despliega, creando patrones únicos en cada paso.

## Funciones y Explicaciones

### `do_random_line(y)`

Esta función llena una línea con células vivas (color rojo) o muertas (blanco) colocadas al azar. Esta variabilidad inicial contribuye a la diversidad de patrones generados con el tiempo.

![do random line blocks img](blocks/do_random_line.png)

### `do_line(y)`

La función `do_line(y)` llena una línea basándose en las reglas definidas en la función `get_next_pixel(x, y)`. Las células evolucionan según criterios específicos, creando patrones estructurados.

![do line blocks img](blocks/do_line.png)

### `get_next_pixel(x, y)`

Esta función determina el estado de la siguiente célula según el número de vecinos vivos. Siguiendo las reglas del autómata celular, cada célula reacciona a las condiciones de su entorno, contribuyendo a la evolución general.

![get next pixel blocks img](blocks/get_next_pixel.png)

### Inicialización y Bucle Principal

El programa comienza definiendo el tamaño del lienzo y los colores asociados a células vivas y muertas. Luego, un bucle itera sobre las líneas, generando ya sea una línea aleatoria (en la iteración 0) o una línea basada en las reglas del autómata celular.

![init game of life blocks img](blocks/init_gameoflife.png)

## Reglas del Autómata Celular

Las reglas de este autómata celular específico, basado en el famoso "Juego de la Vida" de Conway, son las siguientes:
- Una célula muerta con exactamente 3 vecinos vivos se vuelve viva.
- Una célula viva con 2 o 4 vecinos vivos permanece viva. De lo contrario, muere.

## Conclusión

¡Felicidades, acabas de crear una simulación cautivadora de autómata celular! Siéntete libre de explorar y experimentar con las reglas y parámetros para observar una variedad de comportamientos. ¡Diviértete en Canvas-block! 🧪🎨