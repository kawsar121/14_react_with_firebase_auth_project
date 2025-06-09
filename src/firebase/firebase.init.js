// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrlBobE0IR1p8vAlLpQvgrtbtVsUok5Uc",
  authDomain: "react-with-firebase-5.firebaseapp.com",
  projectId: "react-with-firebase-5",
  storageBucket: "react-with-firebase-5.firebasestorage.app",
  messagingSenderId: "179147512283",
  appId: "1:179147512283:web:9e4fb6cb30dbfac6d9effe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);