const { promisify } = require('util')

const grpc = require('grpc');

const SaturnoService = require('../services/saturno');
const { resolve } = require('path');

class PurchaseController {
    
    async store(req, res) {
        const userId = req.userId
        const { title, value } = req.body

        const response = await new Promise((resolve, reject) => {
            SaturnoService.purchase({ purchase: { title, value, userId } }, (err, response) => {
                if(err) reject(err)
                else resolve(response)
            })
        }).catch(e => res.send(e))

        return res.status(200).json(response)
    }

    async index(req, res) {

        const userId = req.userId
        
        const response = await new Promise((resolve, reject) => {
            SaturnoService.listPurchases({ userId }, (err, response) => {
                if (err) reject(err)
                else resolve(response)
            })
        }).catch(e => res.send(e))

    
        return res.json(response)
    }

    async show(req, res) {
        const { id } = req.params
        
        const response = await new Promise((resolve, reject) => {
            SaturnoService.getPurchaseById({ id }, (err, response) => {
                if (err) reject(err)
                else resolve(response)
            })
        }).catch(e => res.send(e))

        return res.json(response)
    }
}

module.exports = new PurchaseController()