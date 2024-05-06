// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// document.querySelectorAll()
const p = document.querySelectorAll("p");
p[2].style.backgroundColor = "brown";
