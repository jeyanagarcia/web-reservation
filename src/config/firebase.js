import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAmbopoxbGm9iMp8Tx__dTdu_ygfIpFxd8",
    authDomain: "web-reservation-8849e.firebaseapp.com",
    projectId: "web-reservation-8849e",
    storageBucket: "web-reservation-8849e.appspot.com",
    messagingSenderId: "882673154976",
    appId: "1:882673154976:web:4ff4731f01bf45bb1ec2c5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();