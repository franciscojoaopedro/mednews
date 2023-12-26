// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGFzCRhbcijDbosiytAixPyYB8N8LfH-Q",
  authDomain: "mednews-692be.firebaseapp.com",
  projectId: "mednews-692be",
  storageBucket: "mednews-692be.appspot.com",
  messagingSenderId: "509500859832",
  appId: "1:509500859832:web:bcb273c9e47bf33a8c5b4d",
  measurementId: "G-73LHMNVS2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);