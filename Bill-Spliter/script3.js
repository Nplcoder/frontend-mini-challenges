const billAmountInput = document.querySelector("#bill-amount");
const tipContainer = document.querySelector(".tip-container");
const customTipInput = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const tipAmount = document.querySelector(".tip-amount span");
const total = document.querySelector(".total span");
const eachPersonBill = document.querySelector(".each-person-bill span");
const ResetBtn = document.querySelector(".reset-btn");

let tipPercentage = 0;

billAmountInput.addEventListener("input", () => {
  if (billAmountInput.value) {
    tipContainer.classList.remove("disabled");
    customTipInput.disabled = false;
    // numberOfPeopleInput.disabled = false;
  } else {
    tipContainer.classList.add("disabled");
    customTipInput.disabled = true;
    // numberOfPeopleInput.disabled = true;
  }
});

// tipContainer.addEventListener('click', (e) =>{
//     console.log([...tipContainer.children].forEach((a) => {
//         e.target.classList.remove('selected')
//     } ))
//     // tipContainer.forEach((e) => e.target.classList.remove('selected'))
// if(e.target !== tipContainer){
//     e.target.classList.add('selected')
//     tipPercentage = parseInt(e.target.innerText)
// }

//     console.log(tipPercentage)
// })

tipContainer.addEventListener("click", (e) => {
  if (e.target !== tipContainer && e.target.tagName === "BUTTON") {
    // remove 'selected' from all first
    [...tipContainer.children].forEach((btn) =>
      btn.classList.remove("selected")
    );

    // add to clicked
    e.target.classList.add("selected");

    // set tip percentage
    tipPercentage = parseInt(e.target.innerText);

    // enable/disable generate bill button
    if (numberOfPeopleInput.value && tipPercentage) {
      generateBillBtn.disabled = false;
    } else {
      generateBillBtn.disabled = true;
    }

    // enable/disable number of people Input
    if (tipPercentage) {
      numberOfPeopleInput.disabled = false;
    } else {
      numberOfPeopleInput.disabled = true;
    }

    customTipInput.value = "";
  }
});

customTipInput.addEventListener("input", () => {
  if (customTipInput.value) {
    [...tipContainer.children].forEach((btn) =>
      btn.classList.remove("selected")
    );
  }

  tipPercentage = parseInt(customTipInput.value);

  // enable/disable number of people Input
  if (tipPercentage) {
    numberOfPeopleInput.disabled = false;
  } else {
    numberOfPeopleInput.disabled = true;
  }

  // enable/disable generate bill button
  if (numberOfPeopleInput.value && tipPercentage) {
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.disabled = true;
  }
});

numberOfPeopleInput.addEventListener("input", () => {
  if (numberOfPeopleInput.value && tipPercentage) {
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.disabled = true;
  }
});

generateBillBtn.addEventListener("click", () => {
  billAmount = parseInt(billAmountInput.value);
  tipPercentAmt = parseInt(billAmount * (tipPercentage / 100));
  totalAmount = billAmount + tipPercentAmt;

  total.innerText = `💶 ${billAmount + tipPercentAmt}`;
  numberOfPeople = parseInt(numberOfPeopleInput.value);
//   eachPerson = totalAmount / numberOfPeople;
  eachPerson = Math.floor(totalAmount / numberOfPeople);

  tipAmount.innerText = `💶 ${tipPercentAmt}`;
  eachPersonBill.innerText = `💶 ${eachPerson}`;

  ResetBtn.disabled = false;
});

ResetBtn.addEventListener("click", () => {
  total.innerText = "";
  tipAmount.innerText = "";
  eachPersonBill.innerText = "";

  billAmountInput.value = '';
  tipContainer.classList.add('disabled');
  [...tipContainer.children].forEach((tip) => {
    tip.classList.remove('selected')
  })

  numberOfPeopleInput.value=';'
  ResetBtn.disabled = true;

});
