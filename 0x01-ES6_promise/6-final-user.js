import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const allresults = [];

      for (const result of results) {
        allresults.push(
          {
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : `Error: ${result.reason.message}`,
          },
        );
      }
      return allresults;
    });
}
