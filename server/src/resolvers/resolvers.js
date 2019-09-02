let lodash = require('lodash');
let authResolvers = require('./authResolvers');
let watchListResolvers = require('./watchListResolvers');
let stockResolvers = require('./stockResolvers');
let balanceResolvers = require('./balanceResolvers');

const resolvers = lodash.merge(authResolvers, watchListResolvers, stockResolvers, balanceResolvers);

module.exports = resolvers;