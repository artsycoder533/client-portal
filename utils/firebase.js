import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNbbCQHUcUHetyTy7NZdWq39-rEio47-Y",
  authDomain: "client-portal-15444.firebaseapp.com",
  projectId: "client-portal-15444",
  storageBucket: "client-portal-15444.appspot.com",
  messagingSenderId: "255456671882",
  appId: "1:255456671882:web:e8d8e7577bd7fe3ac71573",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

