// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE2uplKRByajIwLemxB60fNEZFJ0rvQTI",
  authDomain: "netflixgpt-f8367.firebaseapp.com",
  projectId: "netflixgpt-f8367",
  storageBucket: "netflixgpt-f8367.appspot.com",
  messagingSenderId: "1007487168881",
  appId: "1:1007487168881:web:e1a6f0c599c3b47ab346d0",
  measurementId: "G-86CZ8Z0PXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
