console.log('Starting note.js');

const fs = require('fs');

var addNote = (title, body) => {
  // var notes = [];
  var note = {
    title,
    body
  };

  try {
    var stored_notes = fs.readFileSync('notes-data.json');
    var notes = JSON.parse(stored_notes)
  } catch (e) {
    var notes = [];
  }

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length == 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
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
