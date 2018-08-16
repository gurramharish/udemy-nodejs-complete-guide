const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var notesString = fs.readFileSync('notes.json');

var notesObject = JSON.parse(notesString);
console.log("Notes String : " + notesString);
console.log("Title form notes object :: " + notesObject.title);