import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

// export const appwriteConfig = {
//    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
//    url: import.meta.env.VITE_APPWRITE_URL,
// }; // Your project ID available by default

export const client = new Client()
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject('657b4b76a249ed94bc20');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
