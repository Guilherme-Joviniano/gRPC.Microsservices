const grpc = require('grpc');
const dotenv = require('dotenv');

dotenv.config();

const configs = require('../configs/proto');

const userProto  = grpc.loadPackageDefinition(configs.userDef);

const userClient = new userProto.UserService("localhost:3334", grpc.credentials.createInsecure());

module.exports = userClient;