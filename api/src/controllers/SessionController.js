const { promisify } = require('util')

const grpc = require('grpc');

const PlutoService = require('../services/pluto');

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;
    
        const response = await new Promise((resolve, reject) => {
             PlutoService.loginUser({ user: { email, password } }, (err, response) => {
                if (err) reject(err)
                else resolve(response) 
            })
        }).catch(err => res.send(err))

        return res.json(response)
    }
}

module.exports = new SessionController()