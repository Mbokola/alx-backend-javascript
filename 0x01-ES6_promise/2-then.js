export default function handleResponseFromAPI(promise) {
  return promise
    .then((resolved) => {
      console.log('Got a response from the API');
      return resolved;
    })
    .catch((rejectError) => rejectError);
}
