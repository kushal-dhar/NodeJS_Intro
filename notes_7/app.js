console.log('Starting app');

const fs = require('fs');
const lo = require('lodash');
const yargs = require('yargs')

const note = require('./note.js')

const args = yargs.argv;
arg = process.argv[2];
// console.log('process: ',process.argv);
// console.log("yargs: ",args._[1])

if (arg == 'add') {
  var stored_note = note.addNote(args.title, args.body);
  if (lo.isUndefined(stored_note)) {
    console.log('Duplicate Note exist, try giving a different title');
  } else {
    console.log(`Note ${stored_note.title} added successfully`);
  }
} else if (arg == 'list') {
  note.listAll();
} else if (arg == 'read') {
  note.readNote(args.title);
} else if (arg == 'remove') {
  var remove = note.removeNote(args.title);
  var message = remove ? 'Note was removed' : 'Note was not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
