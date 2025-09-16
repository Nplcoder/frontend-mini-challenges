const billAmountInput = document.querySelector("#bill-amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const customTipInput = document.querySelector(".custom-tip");
const tipsContainer = document.querySelector(".tip-container");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const tipAmount = document.querySelector(".tip-amount span");
const totalAmount = document.querySelector(".total span");
const eachPersonBillAmountOutput = document.querySelector(
  ".each-person-bill span"
);
const resetBtn = document.querySelector(".reset-btn");

let tipAmt = 0;

billAmountInput.addEventListener("input", function () {
  if (billAmountInput.value.trim() !== "") {
    numberOfPeopleInput.disabled = false;
    customTipInput.disabled = false;
    tipsContainer.classList.remove("disabled");
  } else {
    numberOfPeopleInput.disabled = true;
    customTipInput.disabled = true;
    tipsContainer.classList.add("disabled");
  }
});

numberOfPeopleInput.addEventListener("input", function () {
  if (numberOfPeopleInput.value) {
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.disabled = true;
  }
});

generateBillBtn.addEventListener("click", () => {
    // let tipAmount = parseInt(customTipInput.value); || s
  const billAmount = parseInt(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  // Tip Percentage Amount
  //   tipPercentageAmount = parseInt(customTipInput.value);
  const tipPercent = (billAmount * tipAmt) / 100;
  const totalBillAmount = tipPercent + billAmount;

  const eachPersonBillAmount = totalBillAmount / numberOfPeople;

  tipAmount.innerText = `₹${tipPercent}`;
  totalAmount.innerText = `₹${tipPercent + billAmount}`;
  eachPersonBillAmountOutput.innerText = `₹${eachPersonBillAmount}`;

  resetBtn.disabled = false;

  console.log(tipAmt);
  console.log(numberOfPeople)
});

resetBtn.addEventListener("click", () => {
  tipAmt = 0;
  tipAmount.innerText = "";
  totalAmount.innerText = "";
  eachPersonBillAmountOutput.innerText = "";
  billAmountInput.value = "";
  customTipInput.value = "";
  numberOfPeopleInput.value = "";
  resetBtn.disabled = true;

  tipsContainer.classList.add("disabled");
  generateBillBtn.disabled = true;

  numberOfPeopleInput.disabled = true;
  customTipInput.disabled = true;
});

tipsContainer.addEventListener("click", (e) => {
  if (tipsContainer.classList.contains("disabled")) return;

  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((tip) =>
      tip.classList.remove("selected")
    );
    e.target.classList.add("selected");
    tipAmt = parseInt(e.target.innerText);
    console.log(tipAmt);
  }
  customTipInput.value = "";

  if (numberOfPeopleInput.value && tipAmt) {
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.disabled = true;
  }
});

customTipInput.addEventListener("input", () => {
  tipAmt = parseInt(customTipInput.value);

  [...tipsContainer.children].forEach((tip) =>
    tip.classList.remove("selected")
  );

  if (tipAmt && numberOfPeopleInput.value) {
    generateBillBtn.disabled = false;
  } else {
    generateBillBtn.disabled = true;
  }
});
