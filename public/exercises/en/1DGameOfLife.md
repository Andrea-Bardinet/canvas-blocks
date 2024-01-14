# Tutorial: Cellular Automaton Simulation with Canvas-block

Welcome to this tutorial dedicated to creating a cellular automaton simulation using Canvas-block. In this exploration, we will discover how to generate configurations of living and dead cells evolving over iterations according to the rules of a cellular automaton.

## Running the Program

To observe the simulation in action, follow these simple steps:

1. Press the green "play" button.
2. Watch attentively as the dynamic sequence unfolds, creating unique patterns at each step.

## Functions and Explanations

### `do_random_line(y)`

This function fills a line with randomly placed living cells (red color) or dead cells (white). This initial variability contributes to the diversity of patterns generated over time.

![do random line blocks img](blocks/do_random_line.png)

### `do_line(y)`

The `do_line(y)` function fills a line based on the rules defined in the `get_next_pixel(x, y)` function. Cells evolve according to specific criteria, creating structured patterns.

![do line blocks img](blocks/do_line.png)

### `get_next_pixel(x, y)`

This function determines the state of the next cell based on the number of living neighbors. Following the rules of the cellular automaton, each cell reacts to the conditions of its environment, contributing to the overall evolution.

![get next pixel blocks img](blocks/get_next_pixel.png)

### Initialization and Main Loop

The program starts by defining the canvas size and colors associated with living and dead cells. Then, a loop iterates over the lines, generating either a random line (at iteration 0) or a line based on the rules of the cellular automaton.

![init game of life blocks img](blocks/init_gameoflife.png)

## Rules of the Cellular Automaton

The rules of this specific cellular automaton, based on Conway's famous "Game of Life," are as follows:
- A dead cell with exactly 3 living neighbors becomes alive.
- A living cell with 2 or 4 living neighbors remains alive. Otherwise, it dies.

## Conclusion

Congratulations, you've just created a captivating cellular automaton simulation! Feel free to explore and experiment with the rules and parameters to observe a variety of behaviors. Have fun on Canvas-block! 🧪🎨