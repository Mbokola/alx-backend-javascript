import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResult, user]) => {
      const value = uploadResult.body;
      const name = `${user.firstName} ${user.lastName}`;
      console.log(`${value} ${name}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
