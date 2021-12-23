// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from 'firebase/auth'
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1I1Hxlr60mpVHtPNGOCyEbl4VpfaO7Cw",
  authDomain: "pokedex-f1666.firebaseapp.com",
  projectId: "pokedex-f1666",
  storageBucket: "pokedex-f1666.appspot.com",
  messagingSenderId: "455564863734",
  appId: "1:455564863734:web:e60587de57f266956024d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider();

const db = getFirestore();

export{
    app,
    google,
    facebook,
    db
}