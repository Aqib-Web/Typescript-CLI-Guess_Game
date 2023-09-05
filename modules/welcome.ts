import chalkAnimation from "chalk-animation";

async function welcome() {
  const rainbowTitle = chalkAnimation.neon(
    "\n\t\t\t🌟✨🔮 GUESS GAME 🔮✨🌟 \n"
  );

  await sleep(2800);
  rainbowTitle.stop();
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export { sleep, welcome };
