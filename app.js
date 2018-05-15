console.log('starting app');

var fs = require('fs');
const yargs = require('yargs');

const argv = yargs.argv;


var fs = require('fs');
var notes = require('./notes.js');

var command = argv._[0];


console.log('Command :', command);

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(typeof note ==='undefined'){
    console.log('Note already exists');
   }else{
       console.log(`Note created with title ${note.title}`);
   }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    
    if(note){
      notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Command not found');
}

// console.log('process :', process.argv);
// console.log('yargs :', argv);
