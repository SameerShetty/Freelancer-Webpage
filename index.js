// nav-toggler
var navpan = document.querySelector(".nav-links");
var b1 = document.getElementById("bar1");
var b2 = document.getElementById("bar2");
var b3 = document.getElementById("bar3");
var navbtn = document.querySelector(".nav-toggler");

navpan.style.right = "-50%";

navbtn.onclick = function () {
  if (navpan.style.right == "-50%") {
    navpan.style.right = "0";

    b1.style.transform = "rotate(45deg) translateY(10.5px)";
    b2.style.transform = "scale(0)";
    b3.style.transform = "rotate(-45deg) translateY(-10.5px)";
  } else {
    navpan.style.right = "-50%";

    b1.style.transform = "rotate(0) translateY(0)";
    b2.style.transform = "scale(1)";
    b3.style.transform = "rotate(0)translateY(0)";
  }
};
// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//nav-active
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixnav);
var link = document.querySelectorAll(".nav-link");
var i;
function fixnav() {
  if (window.scrollY > nav.offsetHeight + 40) {
    nav.classList.add("activenav");
    for (i = 0; i < 7; i++) {
      link[i].style.color = "#f6f6f6";
    }
  } else {
    nav.classList.remove("activenav");
    for (i = 0; i < 7; i++) {
      link[i].style.color = "#34374c";
    }
  }
}

//html element reveal

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
