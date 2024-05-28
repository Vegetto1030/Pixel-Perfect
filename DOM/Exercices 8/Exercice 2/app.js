const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        button.innerText == "Close tab" ? button.innerText = "Open tab" : button.innerText = "Close tab";
        console.log(button.innerText);
        button.nextElementSibling.classList.toggle("hidden");
    });
});