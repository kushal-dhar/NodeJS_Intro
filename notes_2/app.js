console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const note = require('./note.js')

console.log(_.isString(1));
console.log(_.isString('Kushal'));

var filteredArray = _.uniq([1,2,1,3,4,2,1,2]);
console.log(filteredArray);
