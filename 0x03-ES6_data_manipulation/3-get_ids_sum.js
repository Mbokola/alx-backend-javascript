export default function getStudentIdsSum(array) {
  return array.reduce((total, currentValue) => total + currentValue.id, 0);
}
