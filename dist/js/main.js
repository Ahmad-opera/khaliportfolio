//Control from Hamburger library
var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
          Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener(
          "click",
          function () {
              this.classList.toggle("is-active");
          },
          false
      );
  });
}



//Toggle function for Hamburger
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger() {
  var navlist = document.querySelector("nav");
  if (hamburger.classList.contains("is-active")) {
    navlist.classList.replace("is--collapsed", "is--appended");
  } else {
    navlist.classList.replace("is--appended", "is--collapsed");
  }
}
