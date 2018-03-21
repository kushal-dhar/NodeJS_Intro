console.log('Starting note.js');

var addNote = (title, body) => {
  console.log('Adding note ',title, body);
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
