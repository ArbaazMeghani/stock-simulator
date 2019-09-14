let lodash = require('lodash');
let authResolvers = require('./authResolvers');
let watchListResolvers = require('./watchListResolvers');
let stockResolvers = require('./stockResolvers');
let balanceResolvers = require('./balanceResolvers');
let dataResolvers = require('./dataResolvers');

const resolvers = lodash.merge(authResolvers, watchListResolvers, stockResolvers, balanceResolvers, dataResolvers);

module.exports = resolvers;