const billAmountInput = document.querySelector("#bill-amount");
const tipsContainer = document.querySelector(".tip-container");
const customTipInput = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const tipAmount = document.querySelector(".tip-amount span");
const total = document.querySelector(".total span");
const eachPersonBill = document.querySelector(".each-person-bill span");
const resetBtn = document.querySelector(".reset-btn");

let tipPercentage = 0;

billAmountInput.addEventListener("input", () => {
  if (billAmountInput.value) {
    tipsContainer.classList.remove("disabled");
    customTipInput.disabled = false;
    numberOfPeopleInput.disabled = false;
  } else {
    tipsContainer.classList.add("disabled");
    customTipInput.disabled = true;
    numberOfPeopleInput.disabled = true;
  }
});

customTipInput.addEventListener("input", () => {
  if (customTipInput.value) {
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.disabled = true;
  }
  [...tipsContainer.children].forEach((tip) =>
    tip.classList.remove("selected")
  );
  tipPercentage = customTipInput.value;

  // checking-1
  if(numberOfPeopleInput.value && tipPercentage){
    generateBillBtn.disabled = false
  }else{
    generateBillBtn.disabled = true
  }
});

numberOfPeopleInput.addEventListener("input", () => {
  // checking-1
  if(numberOfPeopleInput.value && tipPercentage){
    generateBillBtn.disabled = false
  }else{
    generateBillBtn.disabled = true
  }
});

tipsContainer.addEventListener("click", (e) => {
  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((tip) =>
      tip.classList.remove("selected")
    );
    e.target.classList.add("selected");

    tipPercentage = parseInt(e.target.innerText);
  }

// checking-1
  if(numberOfPeopleInput.value && tipPercentage){
    generateBillBtn.disabled = false
  }else{
    generateBillBtn.disabled = true
  }


  customTipInput.value = "";
});

generateBillBtn.addEventListener("click", () => {
  const billAmount = parseInt(billAmountInput.value);
  const customTipAmount = parseInt(billAmount * (tipPercentage / 100));
  const totalAmount = billAmount + customTipAmount;
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  tipAmount.innerText = `💲${customTipAmount}`;

  total.innerText = `💲${totalAmount}`;

  eachPersonBill.innerText = `💲 ${totalAmount / numberOfPeople}`;

  console.log(tipAmount.innerText);

  resetBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
    billAmountInput.value = '';
    numberOfPeopleInput.value = '';
    customTipInput.value = '';
    tipAmount.innerText = '';
    total.innerText = '';
    eachPersonBill.innerText = '';

    tipPercentage = 0;
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))

    tipsContainer.disabled = true
    generateBillBtn.disabled = true
    resetBtn.disabled = true
    customTipInput.disabled = true;
    tipsContainer.classList.add("disabled");
    numberOfPeopleInput.disabled = true;
});

