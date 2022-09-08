const { resolve } = require('path');

const protoLoader = require('@grpc/proto-loader');

module.exports = {
    packageDefintions: 
        protoLoader.loadSync(
            resolve(__dirname, '..', 'protos', 'messages.proto'), {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        })
}