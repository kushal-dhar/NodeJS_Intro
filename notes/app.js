console.log('Starting app');

const fs = require('fs');
const os = require('os');
const note = require('./note.js')

var newnote = note.addNote();
var user = os.userInfo();
console.log(newnote);
fs.appendFile('greetings.txt',`Hello ${user.username}!\n`, function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});

console.log(note.addNum(10,-3))
