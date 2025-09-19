const showToastBtn = document.querySelector('.show-toast')
const horizontalPosition = document.querySelector('#horizontal-position')
const verticalPosition = document.querySelector('#vertical-position')
const toastType = document.querySelector('#toast-type')
const toastMessage = document.querySelector('#toast-message')
const durationContainer = document.querySelector('.duration-container')
const toastsContainer = document.querySelector('.toasts-container')
const duration = document.querySelector('#duration')


showToastBtn.addEventListener('click', () => {

const newToast = document.createElement('div')
newToast.classList.add('toast')
newToast.classList.add(toastType.value)

newToast.innerHTML = ` ${toastMessage.value}`

toastsContainer.append(newToast)

const removeToast = document.createElement('span')
removeToast.innerText = ' ✕'
newToast.append(removeToast)


function closeIcon(){
    if(toastsContainer.classList.contains('right')){
        newToast.classList.add('to-right')
    }else {
        newToast.classList.add('to-left')
    }
    setTimeout(() => {
        newToast.remove()
    }, 1000);
}

removeToast.addEventListener('click', () => {
    closeIcon()
})


setTimeout(() => {
    closeIcon()
}, parseInt(duration.value) * 1000)

console.log(duration.value)

// removeToast.addEventListener('click', () => {
//     newToast.classList.add('hide')
//     newToast.addEventListener('animationed', () => {
//         newToast.remove()
//     }, parseInt(duration.value) * 1000)
// }, parseInt(duration.value) * 1000)

// setTimeout(() => {
//     newToast.classList.add('hide')
//     newToast.addEventListener('animationed', () => {
//         newToast.remove()
//     })
//   }, parseInt(duration.value) * 1000)

if(horizontalPosition.value === 'right'){
    toastsContainer.classList.add('right')
}else {
    toastsContainer.classList.remove('right')
}

if(verticalPosition.value === 'bottom'){
    toastsContainer.classList.add('bottom')
}else{
    toastsContainer.classList.remove('bottom')
}

})