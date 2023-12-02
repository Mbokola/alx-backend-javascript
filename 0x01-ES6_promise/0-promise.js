export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const succesfulResponse = { data: 'Api data' };

      resolve(succesfulResponse);
    }, 2000);
  });
}
