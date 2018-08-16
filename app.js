console.log("Starting app.js");

//built in modules
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require('./notes.js');

// const os = require("os");
// var user = os.userInfo();
// console.log("Age from notes js : " + notes.age);
// fs.unlink('greetings.txt', () => {
//     fs.appendFile('greetings.txt', `Hello ${user.username}, how are you doing?`, () => {
//         console.log("Done file appending!")
//     });
// })

// console.log("******************************************************");
// console.log(notes.addNote());
// console.log(notes.add(9, 2));
// console.log("-------------------Lodash Methods-----------------------");
// console.log("_.isString : " + _.isString(true));
// console.log("uniq array : ", _.uniq([1, 1, 2, 3, 4, 4, 6, 6, 5, 89, 100, 100]));


const argv = yargs.argv;
console.log("Yargs - : ", argv);
const command = argv._[0];
console.log(command);

switch (command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note) {
            console.log("Notes added successfully : ", note.title, " : ", note.body);
        } else {
            console.log("Notes already exists with the given title : ", argv.title);
        }
        break;
    case 'list':
        debugger;
        let allNotes = notes.getAll();
        console.log("All notes : ", allNotes);
        break;
    case 'read':
        let note1 = notes.getNote(argv.title);
        console.log('Note by title : ', note1);
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    default:
        console.log('Command not recognized!!')
        break;
}