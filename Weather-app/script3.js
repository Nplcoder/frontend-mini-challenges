const cart = ['shoes', 'pants', 'slipper'];

const api = {
    createOrder(cart, cb){
        console.log('order created:', cart)
        cb()
    },

    proceedToPayment(cb){
        console.log('Payment done');
        cb()
    },

    showOrderSummary(cb){
        console.log('Order summary shown')
        cb();
    
    },

    updateWallet(){
        console.log('wallet updated')
    }
};

api.createOrder(cart, function (){
    api.proceedToPayment( function(){
        api.showOrderSummary(
            function(){
                api.updateWallet()
            }
        )
    })
} )

