const http = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv;
const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    let allFields;
    res.write('This is the list of our students\n');

    countStudents(args[2])
      .then((result) => {
        allFields = result.allFields;
        res.write(`\nNumber of students: ${result.studentCount}`);
        for (const lastField of result.uniqueLastFields) {
          const matchingStudents = allFields.filter((student) => student.lastField === lastField);
          const names = matchingStudents.map((student) => student.firstField).join(', ');
          res.write(`\nNumber of students in ${lastField}: ${matchingStudents.length}. List: ${names}`);
        }
        res.end();
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
