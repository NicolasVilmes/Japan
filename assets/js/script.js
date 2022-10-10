const element = document.querySelector("h2");

function digitatexto(element) {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((Letra, i) => {
    setTimeout(() => (element.innerHTML += Letra), 75 * i);
  });
}

setTimeout(digitatexto(element), 5000);
