const grpc = require('grpc');
const configs = require('./configs/server');

require('./database');

const implementation = require('./implementation')

const proto = grpc.loadPackageDefinition(configs.packageDefintions);

const server = new grpc.Server();

server.addService(proto.UserService.service, implementation)

server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure());

server.start();