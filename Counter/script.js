const value = document.querySelector(".value");
const decrement = document.querySelector("#decrement");
const Increment = document.querySelector("#increment");
const changeBy = document.querySelector("#changeBy");
const Reset = document.querySelector("#reset");

decrement.addEventListener("click", () => {
  const changeByValue = parseInt(changeBy.value);
  value.innerText = parseInt(value.innerText) - changeByValue;
});

Increment.addEventListener("click", () => {
  const changeByValue = parseInt(changeBy.value);
  value.innerText = parseInt(value.innerText) + changeByValue;
});


Reset.addEventListener('click', () => {
    value.innerText = 0;
    console.log(Reset)
})

