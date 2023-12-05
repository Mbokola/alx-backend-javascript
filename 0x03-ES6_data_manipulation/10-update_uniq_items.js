export default function updateUniqueItems(inputMap) {
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  for (const [key, value] of inputMap) {
    if (value === 1) {
      updatedMap.set(key, 100);
    } else {
      updatedMap.set(key, value);
    }
  }

  return updatedMap;
}
