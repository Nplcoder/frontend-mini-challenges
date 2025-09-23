const phoneNumber = document.querySelector("#phone");

let previousValue = ''
let firstThreeNumbers = ''


phoneNumber.addEventListener('input', (e) => {
const phoneNumberValue = e.target.value
console.log(previousValue, phoneNumberValue)

if(phoneNumberValue.length === 4 && previousValue.length < phoneNumberValue){

    firstThreeNumbers = phoneNumberValue.substring(0,3)

    // phoneNumber.value = `+ (${firstThreeNumbers}) - ${phoneNumberValue[phoneNumberValue.length - 1]}`
    // phoneNumber.value = `+ (${firstThreeNumbers}) - ${phoneNumberValue.slice(3)}`
    phoneNumber.value = `+ (${firstThreeNumbers}) - ${phoneNumberValue.substring(3)}`
}else if(phoneNumberValue.length === 9 && previousValue.length > phoneNumberValue.length){
phoneNumber.value = firstThreeNumbers;
}

previousValue = phoneNumberValue
})
