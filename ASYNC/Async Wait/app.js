let bcColor = document.querySelector('body');
bcColor.style.backgroundColor = 'blue';

function generateBG(color, delay) {
    const number = Math.random();
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            reject();
        } else {
            setTimeout(() => {
                bcColor.style.backgroundColor = color;
                resolve();
            }, delay);
        }
    });
}

async function startColorSequence() {
    try {
        await generateBG('yellow', 1000);
        await generateBG('red', 1000);
        await generateBG('cyan', 1000);
        await generateBG('violet', 1000);
        await generateBG('green', 1000);
        await generateBG('purple', 1000);
    } catch (error) {
        console.error("Oh no ! An error !");
    }
}

startColorSequence();
