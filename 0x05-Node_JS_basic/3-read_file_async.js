const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(Boolean);
        const studentCount = lines.length - 1;

        const allFields = lines.map((line) => {
          const fields = line.split(',');
          return {
            firstField: fields[0],
            lastField: fields[fields.length - 1],
          };
        });

        const uniqueLastFields = [...new Set(allFields.map((student) => student.lastField))];
        uniqueLastFields.splice(0, 1);
        console.log(`Number of students: ${studentCount}`);

        for (const lastField of uniqueLastFields) {
          const matchingStudents = allFields.filter((student) => student.lastField === lastField);
          const names = matchingStudents.map((student) => student.firstField).join(', ');
          console.log(`Number of students in ${lastField}: ${matchingStudents.length}. List: ${names}`);
        }
        resolve({ studentCount, uniqueLastFields, allFields });
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
