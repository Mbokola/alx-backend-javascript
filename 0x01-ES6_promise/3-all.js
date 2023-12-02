import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResult, user]) => {
      const value = uploadResult.body;
      const name = `${user.firstName} ${user.lastName}`;
      console.log(`${value} ${name}`);
    });
}
