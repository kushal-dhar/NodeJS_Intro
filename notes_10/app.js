const fs = require('fs');
const lo = require('lodash');
const yargs = require('yargs')

const note = require('./note.js')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Contents of note',
  demand: true,
  alias: 'b'
}

const args = yargs
  .command('add','Add a new note',{
    title: titleOptions,
    body: bodyOptions

  })
  .command('list','List all the notes')
  .command('read','read a specific note with title', {
    title: titleOptions
  })
  .command('remove','remove a specific node of given title', {
    title: titleOptions
  })
  .help()
  .argv;
arg = process.argv[2];
// console.log('process: ',process.argv);
// console.log("yargs: ",args._[1])

if (arg == 'add') {
  var stored_note = note.addNote(args.title, args.body);
  if (lo.isUndefined(stored_note)) {
    console.log('Duplicate Note exist, try giving a different title');
  } else {
    note.logNote(stored_note);
  }
} else if (arg == 'list') {
  var allnotes = note.listAll();
  console.log(`Printing ${allnotes.length} note(s)`);
  allnotes.forEach((perNote) => note.logNote(perNote));
} else if (arg == 'read') {
  var foundNote = note.readNote(args.title);
  if (lo.isUndefined(foundNote)) {
    console.log(`Note ${args.title} doesnt exist`);
  } else {
    note.logNote(foundNote);
  }
} else if (arg == 'remove') {
  var remove = note.removeNote(args.title);
  var message = remove ? 'Note was removed' : 'Note was not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
