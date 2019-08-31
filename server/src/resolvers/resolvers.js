let lodash = require('lodash');
let authResolvers = require('./authResolvers');
let watchListResolvers = require('./watchListResolvers');
let stockResolvers = require('./stockResolvers');

const resolvers = lodash.merge(authResolvers, watchListResolvers, stockResolvers);

module.exports = resolvers;