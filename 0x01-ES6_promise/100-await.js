import { uploadPhoto, createUser } from './utils';

const asyncUploader = async () => {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (error) {
    console.error('Error:', error);
    return {
      photo: null,
      user: null,
    };
  }
};

export default asyncUploader;
