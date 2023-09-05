// #!/usr/bin/env node
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import chalk from "chalk";
import { animateText } from "./modules/animateText.js";
import { welcome, sleep } from "./modules/welcome.js";
import { restartGame } from "./modules/restartGame.js";
async function guessTheNumber() {
    console.log("I am thinking of a number between 1 and 20...");
    let secretNumber = Math.floor(Math.random() * 20) + 1;
    let livesRemaining = 5;
    while (livesRemaining > 0) {
        console.log(`\t---------------------------
      \t${chalk.white.bgBlue.bold("Lives remaining:")} ${chalk.black("❤️".repeat(livesRemaining))}\n`);
        const answer = await inquirer.prompt([
            {
                name: "guess",
                type: "number",
                message: `Guess the number ${chalk.yellow("➤")} `,
                validate: (input) => {
                    if (isNaN(input) || input < 1 || input > 20) {
                        return chalk.red.italic("❌ Please enter a valid number beween 1 and 20");
                    }
                    return true;
                },
            },
        ]);
        const spinner = createSpinner(`${"Checking...\n"}`).start();
        await sleep(750);
        spinner.success();
        const guess = answer.guess;
        console.clear();
        // console.log("the number is " + secretNumber); //For Hint
        if (guess === secretNumber) {
            await animateText(`
                            ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
                            ██░██░█░██░█░▄▄▀█░▄▄▀█░▄▄▀█░██░██
                            ██░▄▄░█░██░█░▀▀▄█░▀▀▄█░▀▀░█░▀▀░██
                            ██░██░██▄▄▄█▄█▄▄█▄█▄▄█▄██▄█▀▀▀▄██
                            ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
        \t🎉 Congratulations! You guessed the number ${secretNumber} correctly. 🤩🤩🥳🥳\n`, 3000, true);
            break;
        }
        else if (guess < secretNumber && livesRemaining > 1) {
            await animateText(`\t❌ Too low! 📉 Try again.☹️`);
        }
        else if (guess > secretNumber && livesRemaining > 1) {
            await animateText(`\t❌ Too high! 📈 Try again.😥`);
        }
        livesRemaining -= 1;
        if (livesRemaining === 0) {
            await animateText(`
            ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            ██ ▄▄ █ ▄▄▀██ ▄▀▄ ██ ▄▄▄████ ▄▄▄ ██ ███ ██ ▄▄▄██ ▄▄▀
            ██ █▀▀█ ▀▀ ██ █ █ ██ ▄▄▄████ ███ ███ █ ███ ▄▄▄██ ▀▀▄
            ██ ▀▀▄█ ██ ██ ███ ██ ▀▀▀████ ▀▀▀ ███▄▀▄███ ▀▀▀██ ██ 
            ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

      \t 🧨You Lost! You ran out of lives. ☹️😢😩\n`, 1200);
            await animateText(`\t  🏈 THE NUMBER WAS 👉 ${secretNumber}  🏈\n`, 1000);
            break;
        }
    }
}
async function startGame() {
    console.clear();
    await welcome();
    do {
        await guessTheNumber();
    } while (await restartGame());
}
startGame();
