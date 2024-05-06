// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "green";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "welcome!";

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightgreen";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "from javascript";
