// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2c8e1.firebaseapp.com",
  projectId: "mern-estate-2c8e1",
  storageBucket: "mern-estate-2c8e1.appspot.com",
  messagingSenderId: "248161647739",
  appId: "1:248161647739:web:941eb192fb4454c2a3f6de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);