// Write Machine //

const element = document.querySelector("h2");

function digitatexto(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((Letra, i) => {
    setTimeout(() => (element.innerHTML += Letra), 75 * i);
  });
}

setTimeout(digitatexto(element), 5000);

// Nav Scroll //

window.onscroll = scroll;

function scroll() {
  var scrollTop = window.pageYOffset;
  if (scrollTop > 30) {
    try {
      document.getElementById("firstnav").id = "secondnav";
    } catch (e) {
      false;
    }
  } else {
    try {
      document.getElementById("secondnav").id = "firstnav";
    } catch (e) {
      false;
    }
  }
}

// Animate Scroll //

const obj = document.querySelectorAll("[data-anime]");
const animation = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  obj.forEach(function (anime) {
    if (windowTop > anime.offsetTop) {
      anime.classList.add(animation);
    } else {
      anime.classList.remove(animation);
    }
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});
