let btn = document.querySelector(".bx-menu");
let btnclose = document.querySelector(".bx-x");
let head = document.querySelector(".header");

const toggelnav = () => {
  head.classList.toggle("active");
};
btn.addEventListener("click", () => toggelnav());
btnclose.addEventListener("click", () => toggelnav());
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".text , .image ", { delay: 300, origin: "top" });
sr.reveal(".about-text", { delay: 100, origin: "left" });
sr.reveal(".about-img", { delay: 100, origin: "right" });
sr.reveal(".skill-bars", { delay: 100, origin: "bottom" });
sr.reveal(".logos--img", { interval: 100 });
sr.reveal(".skills-img", { origin: "top", delay: 100 });
sr.reveal(".value--content , .contact--images", { origin: "right" });

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 800
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let icondark = document.querySelector(".bxs-moon");
let body = document.querySelector("body");

const toggeldark = () => {
  body.classList.toggle("dark");
};
icondark.addEventListener("click", () => toggeldark());
