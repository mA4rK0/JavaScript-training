function ubahWarna() {
  p2.style.backgroundColor = "purple";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarna;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   alert("ok");
// });

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("item baru");
  liBaru.appendChild(textLiBaru);
  ul.appendChild(liBaru);
});

const p3 = document.querySelector(".p3");
p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "green";
});

p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "red";
});
