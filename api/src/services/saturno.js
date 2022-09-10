const grpc = require('grpc');
const dotenv = require('dotenv');

dotenv.config();

const configs = require('../configs/proto');

const saturnoProto = grpc.loadPackageDefinition(configs.saturnoDef)

const saturnoClient = new saturnoProto.PurchaseService("localhost:3335", grpc.credentials.createInsecure());

module.exports = saturnoClient;