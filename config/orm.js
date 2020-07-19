var connection = require("./connection.js");

class ORM  {
    constructor(connection){
      this.connection = connection
    }
  
    printQuestionMarks(numberOfValuesOrColumns, type){
      const questionMarks = [];
  
      for (var i = 0; i < numberOfValuesOrColumns; i++) {
        if(type === 'cols'){
          questionMarks.push("??");
        } else {
          questionMarks.push("?")
        } 
      }
      return questionMarks.join(', ');
    }

    view(table) {
        const queryString = "SELECT * FROM ??";

        return this.connection.query(queryString,[table])
    }

    create(table, cols, values) {
        // INSERT INTO notes (title, text) VALUES (?,?)
        const queryString = `INSERT INTO ?? (${cols.join(', ')}) VALUES (${this.printQuestionMarks(values.length, 'vals')})`;
  
        return this.connection.query(queryString, [table, ...values])
    }
 
    delete(table, cols, value){
        // DELETE FROM notes WHERE title = stuff
        const queryString = 'DELETE FROM ?? WHERE ??=?';
  
        return this.connection.query(queryString, [table, cols, value])
    }
  };
  
  module.exports = new ORM(connection);