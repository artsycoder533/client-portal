import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNRK77Mmo0CYIFz2MxDhq3dxBtLuFacr4",
  authDomain: "vophs-c96c1.firebaseapp.com",
  projectId: "vophs-c96c1",
  storageBucket: "vophs-c96c1.appspot.com",
  messagingSenderId: "779414941202",
  appId: "1:779414941202:web:4f28da3979cee90cedf2cb",
};

console.log(process.env.NEXT_PUBLIC_PRIVATE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();

