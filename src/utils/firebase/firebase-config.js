import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIpQc1Nn1e8dEyYviuV0CPVQCQKcnwBes',
  authDomain: 'rnfirebaseauth-f4c6b.firebaseapp.com',
  projectId: 'rnfirebaseauth-f4c6b',
  storageBucket: 'rnfirebaseauth-f4c6b.appspot.com',
  messagingSenderId: '206533925911',
  appId: '1:206533925911:web:a209299aad7d992705d052',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
