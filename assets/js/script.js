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

//Auto Scroll //

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 95;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  window.scroll({
    top: to,
    behavior: "smooth",
  });
  smoothScrollTo(0, to);
}

/**
 * @param {int} endX
 * @param {int} endY
 * @param {int} duration
 */

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 900;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
