# Typescript-CLI-Guess_Game
A fun and colorful console game using Typescript.

## How to Play

1. The game will generate a random secret number between 1 and 20.
2. You have 5 lives to guess the number correctly.
3. Enter your guess when prompted. Make sure it's a number between 1 and 20.
4. If your guess is correct, you win! 🥳
5. If your guess is too low or too high, you'll be given another chance.
6. If you run out of lives, the game will end, and you'll be shown the secret number. 😢

## Features

- Colorful and interactive command-line interface.
- Animated feedback messages to enhance the experience.
- Option to restart the game after winning or losing.

## Dependencies

This project uses the following dependencies:

- [inquirer](https://www.npmjs.com/package/inquirer) - For interactive command-line prompts.
- [chalk](https://www.npmjs.com/package/chalk) - For adding color to the console output.
- [chalk-animation](https://www.npmjs.com/package/chalk-animation) - For animating the welcome message.
- [nanospinner](https://www.npmjs.com/package/nanospinner) - For displaying a spinner while calculating.

## Usage

Run the calculator using the following command:

```bash
npx ts_guess-the-number
```

