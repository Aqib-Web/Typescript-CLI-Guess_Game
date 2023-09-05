import chalkAnimation from "chalk-animation";
import { sleep } from "./welcome.js";
async function animateText(text, timeNum, isCongrats) {
    let animatedTitle;
    if (isCongrats) {
        animatedTitle = chalkAnimation.karaoke(text, 3);
    }
    else {
        animatedTitle = chalkAnimation.pulse(text);
    }
    if (timeNum) {
        await sleep(timeNum);
    }
    else {
        await sleep(1500);
    }
    animatedTitle.stop();
}
export { animateText };
