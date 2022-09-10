const  { promisify } = require('util')
const Purchase = require('./models/Purchase');

module.exports = {
    async getPurchaseById(call, callback) {
        const { id } = call.request;
        
        if (!id) {
            return callback({ error: 'No ID provided'})
        }

        const response = await Purchase.findById(id);
        
        if (!response) {
            return callback({error: 'Purchase not finded!'})
        }

        return callback(null, { purchase: response })
    },
    async listPurchases(call, callback) {

        const { userId } = call.request
        
        if(!userId) {
            return callback({ error: 'No User-ID provided'})
        }

        const purchases = await Purchase.find({ userId });
        
        if (!purchases) {
            return callback({error: 'No Purchases Finded'})
        }


        purchases.forEach((purchase) => {
            const refactorPurchase = {
                ...purchase.toObject(),
                id: purchase._id.toString()
            }
            purchase == refactorPurchase;
        });

        return callback(null, { purchases })
    },
    async purchase(call, callback) {
        
        const { title, value, userId } = call.request.purchase;
        
        
        const purchase = await Purchase.create({ title, value, userId });

        return callback(null, {
            purchase: {
                ...purchase.toObject(),
                id: purchase._id.toString()
            }
        })
    }
}