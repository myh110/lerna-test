const _ = require('lodash');

const test2 = (...args) => console.log('test1', args);

const apply = _.apply;

test2(22);

module.exports = { test2, apply };
