const orm = require("../config/orm.js");

class Note {
    viewAllNotes() {
        return orm.view('notes', ['id', 'title', 'text'])
    }
    addNote (values) {
        return orm.create('notes',['title','text', 'id'], values)
    }
    deleteNote (value) {
        return orm.delete('notes', 'id', value)
    }
    
  };
  
  module.exports = new Note();