const inputText = document.querySelector(".input-text");

const lowercaseOutput = document.querySelector("#lowercase span");
const uppercaseOutput = document.querySelector("#uppercase  span");
const camelcaseOutput = document.querySelector("#camelcase  span");
const pascalcaseOutput = document.querySelector("#pascalcase  span");
const snakecaseOutput = document.querySelector("#snakecase span");
const kebabcaseOutput = document.querySelector("#kebabcase span");
const trimcaseOutput = document.querySelector("#trimcase span");

function camelcase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

function pascalcase(str) {
  return;
}

function snakecase(str) {
  return str.toLowerCase().replaceAll(" ", "_");
}

function kebabcase(str) {
  return str.toLowerCase().replaceAll(" ", "-");
}

function trimcase(str) {
  return str.toLowerCase().replaceAll(" ", "");
}

function inputCase() {
  const text = inputText.value.trim();
  lowercaseOutput.innerText = text.toLowerCase();
  uppercaseOutput.innerText = text.toUpperCase();

  camelcaseOutput.innerText = camelcase(text);
  pascalcaseOutput.innerText = pascalcase(text);
  snakecaseOutput.innerText = snakecase(text);
  kebabcaseOutput.innerText = kebabcase(text);
  trimcaseOutput.innerText = trimcase(text);
}
inputCase();

inputText.addEventListener("input", inputCase);
