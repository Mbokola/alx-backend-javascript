const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    let lines = data.split('\n');
    lines = lines.filter(Boolean);
    const studentCount = lines.length - 1;
    const allFields = lines.map((line) => {
      const fields = line.split(',');
      return {
        firstField: fields[0],
        lastField: fields[fields.length - 1],
      };
    });

    const arr = [];
    let names = '';

    for (let i = 1; i < allFields.length; i += 1) {
      if (!arr.includes(allFields[i].lastField)) {
        arr.push(allFields[i].lastField);
      }
    }

    console.log(`Number of students: ${studentCount}`);

    for (let i = 0; i < arr.length; i += 1) {
      for (let j = 1; j < allFields.length; j += 1) {
        if (allFields[j].lastField === arr[i]) {
          names += `${allFields[j].firstField}, `;
        }
      }
      if (names.endsWith(', ')) {
        names = names.slice(0, -2);
      }
      console.log(`Number of students in ${arr[i]}: ${names.split(', ').length}. List: ${names}`);
      names = '';
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
