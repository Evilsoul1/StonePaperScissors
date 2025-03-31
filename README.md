# Rock Paper Scissors Game

## Overview
This is a simple Rock Paper Scissors game built using HTML, CSS, and JavaScript. The user can select their choice, and the computer randomly selects one as well. The game determines the winner based on standard Rock Paper Scissors rules and updates the score accordingly.

## VERCEL link
https://stone-paper-scissors-fawn.vercel.app/

## Features
- User can select between Rock, Paper, and Scissors.
- The computer randomly generates its choice.
- The result (Win, Lose, or Draw) is displayed on the screen.
- Scores for the user and computer are updated dynamically.
- A reset button to restart the game.

## How to Play
1. Click on one of the buttons (Rock, Paper, or Scissors) to make your move.
2. The computer will randomly choose its move.
3. The game will determine the winner and update the message and scores.
4. Click the reset button to reset the game.

## Code Structure
- `index.html` - Contains the structure of the game.
- `sps.css` - Styles the UI elements.
- `sps.js` - Handles game logic, event listeners, and score updates.

## Game Logic
1. The user clicks a button, triggering the `playGame(userChoice)` function.
2. The computer randomly selects Rock, Paper, or Scissors.
3. The winner is determined based on:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
   - If both choices are the same, it's a Draw.
4. Scores are updated accordingly.
5. Clicking the Reset button resets all values to default.


## Technologies Used
- HTML
- CSS
- JavaScript

## Author
Created by Arya Raj

---
Enjoy the game! 🎮

