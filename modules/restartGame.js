import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { sleep } from "./welcome.js";
async function restartGame() {
    const answer = await inquirer.prompt([
        {
            name: "restart",
            type: "input",
            message: `🔄 ${chalk.magenta("Do you want to play again? (Y/N)")} ${chalk.yellow("➤")} `,
            validate: (input) => /^(y|n|yes|no)$/i.test(input) || `❌ Please enter Y or N | Yes or No`,
        },
    ]);
    const isYes = answer.restart.toLowerCase() === "y" ||
        answer.restart.toLowerCase() === "yes";
    if (isYes) {
        console.clear();
        const spinner = createSpinner(`${"Restarting new game...\n"}`).start();
        await sleep(750);
        spinner.success();
        console.clear();
    }
    return isYes;
}
export { restartGame };
