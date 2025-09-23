const phoneNumber = document.querySelector("#phone");
let previousValue = "";

phoneNumber.addEventListener("input", (e) => {
  phoneNumberValue = e.target.value;

  console.log(previousValue, phoneNumberValue);

  if (
    phoneNumberValue.length === 4 &&
    previousValue.length < phoneNumberValue.length
  ) {
    firstThreeNumbers = phoneNumberValue.slice(0, 3);
    phoneNumber.value = `+ (${firstThreeNumbers}) - ${phoneNumberValue.slice(
      3
    )}`;
  } else if (phoneNumberValue.length === 9 && previousValue.length > phoneNumberValue.length){
    phoneNumber.value = firstThreeNumbers;
  }

  previousValue = phoneNumber.value;
});
