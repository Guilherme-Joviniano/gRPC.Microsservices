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
    plutoDef: 
        protoLoader.loadSync(
            resolve(__dirname, '..', 'protos', 'pluto.proto'), loaderConfig),
    saturnoDef: 
        protoLoader.loadSync(
            resolve(__dirname, '..', 'protos', 'saturno.proto'), loaderConfig)
}