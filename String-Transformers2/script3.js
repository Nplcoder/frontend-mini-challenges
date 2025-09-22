const input = document.querySelector("input");

const lowercaseOutput = document.querySelector("#lowercase span");
const uppercaseOutput = document.querySelector("#uppercase span");
const camelcaseOutput = document.querySelector("#camelcase span");
const pascalcaseOutput = document.querySelector("#pascalcase span");
const snakecaseOutput = document.querySelector("#snakecase span");
const kebabcaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

function capitalizeString(str) {
  const capitalWord = str[0].toUpperCase() + str.slice(1);
  return capitalWord;
}

function camelCase(str) {
  const wordsArray = str.trim().toLocaleLowerCase().split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}
// console.log(camelCase("This is a normal sentence to transform"));

function pascalCapitalize(str) {
  const pascalCapital = str[0].toUpperCase() + str.slice(1);
  return pascalCapital;
}
// console.log(pascalCapitalize('pascalCapitalize'))

function pascalCase(str) {
  const wordsArray = str.trim().toLocaleLowerCase().split(" ");
  const finalArray = wordsArray.map((word, i) => {
    return pascalCapitalize(word);
  });

  return finalArray.join("");
}
// console.log(pascalCase("This is a normal sentence to transform"));

function textOutput() {
  lowercaseOutput.innerText = input.value.trim().toLocaleLowerCase();
  uppercaseOutput.innerText = input.value.trim().toUpperCase();
  camelcaseOutput.innerText = camelCase(input.value);
  pascalcaseOutput.innerText = pascalCase(input.value);
  snakecaseOutput.innerText = input.value.trim().replaceAll(" ", "_");
  kebabcaseOutput.innerText = input.value.trim().replaceAll(" ", "-");
  trimOutput.innerText = input.value.trim().replaceAll(" ", "");
}
textOutput();

input.addEventListener("input", textOutput);
