const container = document.querySelector('.container');
    
setTimeout(() => {
    for (let i = 1; i <= 100; i++) {
        const button = document.createElement('button');
        button.textContent = `I am button ${i}`;
        container.appendChild(button);
    }

document.querySelector("h1").textContent = "There are a lot of buttons here !";

}, 2000)

