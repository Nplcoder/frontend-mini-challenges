// console.log('4')


// const a = console.log('1')
function cb(callback2){
    setTimeout(function() {
        console.log('1')
        callback2(function(callback4) {
            console.log('3')
            setTimeout(function() {
                callback4()
            }, 2000)
        })
        
    }, 2000)
}


cb(function(callback3){
    console.log('2')
    callback3(function(){
        console.log('4')
    })
})






// function cb(callback) {
//     setTimeout(function() {
//       console.log('1')
//       callback() // call next function
//     }, 5000)
//   }
  
//   cb(function() {
//     console.log('2')
//   })