console.log('starting notes.js');
var fs = require('fs');

var fetchNotes = () =>{

    try {

        var strings = fs.readFileSync('notes.json');
        return JSON.parse(strings);
      }catch(e) {
    
        return [];

      }
}

var saveNotes = (notes) =>{
    fs.writeFileSync('notes.json',JSON.stringify(notes));

}

var addNote = (title, body)=>{

  var notes = fetchNotes();
  var note = {
      title,
      body
  };


  var duplicates = notes.filter((a)=> a.title === title);
  if(duplicates.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }else{
      
  }
  

 
};

var getAll = ()=>{
    return fetchNotes();
}

var getNote = (title)=>{
    var notes = fetchNotes();
    var found = notes.filter((note)=> note.title === title);
    return found[0];
}

var removeNote = (title)=>{
    var notes = fetchNotes();
    var newNote = notes.filter((note) => note.title !== title);
    saveNotes(newNote);
}

var logNote = (note)=>{
    debugger;
    console.log('Note found');
    console.log(`title is ${note.title}`);
    console.log(`body is ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
