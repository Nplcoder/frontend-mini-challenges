const input = document.querySelector('input')

const lowercaseOutput = document.querySelector('#lowercase span')
const uppercaseOutput = document.querySelector('#uppercase span')
const camelrcaseOutput = document.querySelector('#camelcase span')
const pascalcaseOutput = document.querySelector('#pascalcase span')
const snakecaseOutput = document.querySelector('#snakecase span')
const kebabcaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')

function capitalizeString(str){
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1)
}

function camelCase(str){
    const wordsArray = str.trim().toLowerCase().split(' ')
   const finalArray = wordsArray.map((word , i) => {
    if(i === 0){
        return word
       } else {
        return capitalizeString(word)
       }
   })

   return finalArray.join('')

    
}
console.log(camelCase('this is a normal sentence to transform'))
// camelCase()


function textOutput(){

    lowercaseOutput.innerText = input.value.trim().toLocaleLowerCase()
    uppercaseOutput.innerText = input.value.trim().toUpperCase()




}
textOutput()

input.addEventListener('input', textOutput)