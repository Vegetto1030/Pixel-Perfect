const hello = () => {
    alert("Oh my god ! You again !!!");
};

const goodBye = () => {
    alert("Thank God ! I thought you'd' never leave !")
};

const button1 = document.querySelectorAll('button')[0];
const button2 = document.querySelectorAll('button')[1];

button1.addEventListener("click", hello);
button2.addEventListener("click", goodBye);