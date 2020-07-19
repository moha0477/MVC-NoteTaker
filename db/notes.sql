DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    text VARCHAR(200) NOT NULL
);

INSERT INTO notes (title, text) VALUES ("First Note", "Welcome to the note taking app!");
INSERT INTO notes (title, text) VALUES ("Tasks for Today", "Do the MVC Note Taker Assignment");
INSERT INTO notes (title, text) VALUES ("Stuff", "Random note");
