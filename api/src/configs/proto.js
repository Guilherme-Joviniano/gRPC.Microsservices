const { resolve } = require('path');

const protoLoader = require('@grpc/proto-loader');

const loaderConfig = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
}


module.exports = {
    userDef: 
        protoLoader.loadSync(
            resolve(__dirname, '..', 'protos', 'user.proto'), loaderConfig)
}