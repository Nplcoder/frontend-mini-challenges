const cart = ['shoes', 'pants', 'kurta'];

const promise = createOrder(cart); //orderId
console.log(promise)

promise.then(function (orderId){
    console.log(orderId);
    //proceedToPayment(orderId)
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

function validateCart(cart){
    return true
}