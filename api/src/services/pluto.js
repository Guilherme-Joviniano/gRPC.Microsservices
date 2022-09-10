const grpc = require('grpc');
const dotenv = require('dotenv');

dotenv.config();

const configs = require('../configs/proto');

const plutoProto = grpc.loadPackageDefinition(configs.plutoDef)

const plutoClient = new plutoProto.UserService("localhost:3334", grpc.credentials.createInsecure());

module.exports = plutoClient;