const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const args = process.argv;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let allFields;

  countStudents(args[2])
    .then((result) => {
      allFields = result.allFields;
      let responseString = 'This is the list of our students';
      responseString += `\nNumber of students: ${result.studentCount}`;

      for (const lastField of result.uniqueLastFields) {
        const matchingStudents = allFields.filter((student) => student.lastField === lastField);
        const names = matchingStudents.map((student) => student.firstField).join(', ');
        responseString += `\nNumber of students in ${lastField}: ${matchingStudents.length}. List: ${names}`;
      }

      res.send(responseString);
    })
    .catch(() => {
      res.status(500).send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
