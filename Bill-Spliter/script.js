const BillAmount = document.querySelector('#bill-amount')
const NumberOfPeople = document.querySelector('.number-of-people')

BillAmount.addEventListener('onchange', function() {
    if(BillAmount.Value.trim() !== ''){
        NumberOfPeople.disabled = false;
    }else {
        NumberOfPeople.disabled = true
    }
})