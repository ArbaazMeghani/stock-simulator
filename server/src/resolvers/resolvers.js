let lodash = require('lodash');
let authResolvers = require('./authResolvers');
let watchListResolvers = require('./watchListResolvers');

const resolvers = lodash.merge(authResolvers, watchListResolvers);

module.exports = resolvers;