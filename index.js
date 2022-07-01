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
