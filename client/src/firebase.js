// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-61a37.firebaseapp.com",
  projectId: "mern-estate-61a37",
  storageBucket: "mern-estate-61a37.appspot.com",
  messagingSenderId: "327693884827",
  appId: "1:327693884827:web:ccd8ca750c7990b3ffd53e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);