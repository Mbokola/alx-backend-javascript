// ES6’s for...of operator
export default function appendToEachArrayValue(array, appendString) {
  const Newarray = [];
  for (const text of array) {
    Newarray.push(`${appendString}${text}`);
  }
  return Newarray;
}
