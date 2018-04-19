"use strict";

var btn = document.getElementById("menu");
var visibleBlock = document.querySelector(".visible");
btn.onclick = function () {
    var left = document.getElementById("asideL");
    var right = document.getElementById("asideR");
    if (left.classList.contains('active')) {
        left.classList.remove("active");
        right.classList.remove("active");
        visibleBlock.style.transform = "translateX(0px)";
    } else {
        left.classList.add("active");
        right.classList.add("active");
        visibleBlock.style.transform = "translateX(-200px)";
    }
};
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 120) {
        visibleBlock.classList.add("fixed-top");
    } else {
        visibleBlock.classList.remove("fixed-top");
    }
};