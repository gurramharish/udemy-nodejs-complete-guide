console.log('Starting notes.js');

// module.exports.addNote = () => {
//     console.log("Logging Notes from notes js!!")
//     return 'New note!';
// }

// module.exports.add = (a, b) => {
//     return a + b;
// }

const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {
    try {
        let notes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notes);
        return notes;
    } catch (e) {
        return [];
    }
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let duplicateNotes = _.find(notes, note => note.title === title);
    if(!duplicateNotes) {
        let note = {title, body};
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes, null, 2));
}

const getAll = () => {
    return fetchNotes();
}

const getNote = (title) => {
    let notes = fetchNotes();
    if(notes.length > 0) {
        return _.find(notes, note => note.title === title);
    }
}

const removeNote = (title) => {
    let notes = fetchNotes();
    notes = notes.filter(note => note.title !== title);
    saveNotes(notes);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}