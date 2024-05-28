const mainHeading = document.getElementById("main-heading");
mainHeading.style.color = "red";

//Generating Element
/*
const myList = document.querySelector("ul");
const myItem = document.createElement("li");

myList.appendChild(myItem);
*/

var firstListItem = document.querySelector("li.list-item").innerText;

const myList = document.querySelector("ul");
const myItem = document.createElement("li");
myItem.innerText = firstListItem;

myList.appendChild(myItem);

myList.style.color ="purple";
myItem.style.color="gold";
const liList = document.querySelectorAll("li");

liList[3].innerHTML = "Annie <span style='color :red;'> Hall </span>";




