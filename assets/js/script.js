function typeWrite(element) {
  const textoArray = element.innerHTML.split("subtitle");
  element.innerHTML = "h2";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      element.innerHTML += letra;
    }, 75 * i);
  });
}
const subtitle = document.querySelector(".subtitle");
typeWrite(subtitle);
