# Tutorial: Guess My Number Game with Canvas-block

Welcome to this tutorial where we will create an interactive "Guess My Number" game using Canvas-block. Follow the steps below to understand how the game works.

## Canvas Initialization

Start by setting the canvas size using the `setCanvasSize` block. In our example, we have a canvas with dimensions of 1000x1000 pixels.

![setCanvasSize block](blocks/interface_guessnumber.png)

## Displaying Instructions

Add instructions to guide the player. Use the `write` blocks to display the message "Guess my number between 0 and 100" and `drawLine` to create a separation line.

![write and drawLine blocks](blocks/interface_guessnumber.png)

## Generating the Random Number

Use the `mathRandomInt` block to generate a random number between 0 and 100. This will be the number the player has to guess.

![mathRandomInt block](blocks/random.png)

## Game Loop

Use a `while` loop to continue the game until the player guesses the correct number. Inside the loop, use `window.prompt` to allow the player to enter their guess.

![while loop block](blocks/loop_guessnumber.png)

## Displaying the Score

Display the player's score using the `addTerminalLine`, `fill`, and `write` blocks. The player is informed if their guess is too high or too low using `if` conditional blocks.

![addTerminalLine, fill, write, and if blocks](blocks/addTerminalLine_fill_write_if.png)

## End of the Game

When the player guesses correctly, display a congratulations message with the final score.

![fill and write blocks for game end](blocks/score_guessnumber.png)

## Conclusion

Congratulations, you have created an interactive "Guess My Number" game on Canvas-block! Feel free to customize the game by adding new challenges or features. Have fun with your creation! 🎮