const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart)
.then(function (orderId){
    console.log(orderId);
    //proceedToPayment(orderId)
})
.then(function(){
    proceedToPayment(orderId)
})
.catch(function (err){
    console.log(err.message)
});

//producer

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject){
        //createOrder
        //vallidateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not vaild");
            reject(err);
        }
        //logic for createOrder
        const orderId = '12345';
        if (orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000)
        }

        }
    )
    return pr;
}

function proceedToPayment(orderId){
return new Promise(function(resolve, reject){
    resolve('payment Successful')
})
}

function validateCart(cart){
    return true
}