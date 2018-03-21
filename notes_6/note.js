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
  console.log("Getting all Notes");
};

var removeNote = (title) => {
  console.log("removing Note ",title);
};

var readNote = (title) => {
  console.log("Reading Note ",title);
};

module.exports = {
  addNote,
  listAll,
  removeNote,
  readNote
};
