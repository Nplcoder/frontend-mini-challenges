const input = document.querySelector('input')

const lowercaseOutput = document.querySelector('#lowercase span')
const uppercaseOutput = document.querySelector('#uppercase span')
const camelcaseOutput = document.querySelector('#camelcase span')
const pascalcaseOutput = document.querySelector('#pascalcase span')
const snakecaseOutput = document.querySelector('#snakecase span')
const kebabcaseOutput = document.querySelector('#kebabcase span')
const trimOutput = document.querySelector('#trim span')

function capitalizeString(str){
    const capitalize = str[0].toUpperCase() + str.slice(1)
    return capitalize
}

function camelCase(str){
    const wordsArray = str.trim().toLocaleLowerCase().split(' ')
    const finalArray = wordsArray.map((word, i) => {
        if( i === 0) return word
        return capitalizeString(word)

    })
    return finalArray.join('')
}
    

console.log(camelCase('this is a normal sentence to transform'))



function textOutput(){

    lowercaseOutput.innerText = input.value.trim().toLocaleLowerCase()
    uppercaseOutput.innerText = input.value.trim().toUpperCase()
    camelcaseOutput.innerText = camelCase(input.value)



}
textOutput()

input.addEventListener('input', textOutput)