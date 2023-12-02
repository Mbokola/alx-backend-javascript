export default function handleResponseFromAPI(promise) {
  return promise
    .then((resolved) => resolved)
    .catch((rejectError) => rejectError)
    .finally(() => {
      console.log('Got a response from the API');
    });
}
