console.log('Starting note.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var stored_notes = fs.readFileSync('notes-data.json');
    return  JSON.parse(stored_notes)
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes( );
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var listAll = () => {
  return fetchNotes();
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var savedNote = notes.filter((note) => note.title !== title);
  saveNotes(savedNote);

  return notes.length !== savedNote.length;
};

var readNote = (title) => {
  var notes = fetchNotes();
  foundNote = notes.filter((note) => note.title === title);
  return foundNote[0];
};

var logNote = (note) => {

  console.log(`-----`);
  debugger;
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  listAll,
  removeNote,
  readNote,
  logNote
};
