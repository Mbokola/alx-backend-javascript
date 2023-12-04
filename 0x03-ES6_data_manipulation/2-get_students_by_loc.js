export default function getStudentsByLocation(array, city) {
  return array.filter((filterCity) => filterCity.location === city);
}
