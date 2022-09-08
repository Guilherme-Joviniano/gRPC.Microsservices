const { promisify } = require('util');

const service = require('../services/user');

class UserController {
    async show(req, res) {
        const { id } = req.params

        const response = await new Promise((resolve, reject) => {
            service.getUserById({ id }, (err, response) => {
                if(err) reject(err)
                else resolve(response)
            })
        })

        return res.json(response) 
    }
    async store(req, res) {
        const { email, username, password } = req.body;

        const response = await new Promise((resolve, reject) => {
            service.registerUser({ email, username, password }, (err, response) => {
                if(err) reject(err)
                else resolve(response)
            })
        });

        return res.json(response);
    }
}    

module.exports = new UserController()
