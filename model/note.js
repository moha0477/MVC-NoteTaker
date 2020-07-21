const orm = require("../config/orm.js");

class Note {
    viewNotes() {
      return orm.view(["notes"])
    }
    addNote(values) {
      return orm.create(['title', 'text', 'id'], values)
    }
    deleteNote(value) {
      return orm.delete('id', value)
    }
  };

module.exports = new Note();