let lodash = require('lodash');
let authResolvers = require('./authResolvers');

const resolvers = lodash.merge(authResolvers);

module.exports = resolvers;