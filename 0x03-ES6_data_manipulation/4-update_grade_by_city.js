export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
      console.log(matchingGrade);
      if (matchingGrade) {
        return { ...student, grade: matchingGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
