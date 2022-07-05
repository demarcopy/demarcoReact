// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4fkQsplAYE2SlXTsjrmVPD89iO6Z8K54",
  authDomain: "banshyclothes.firebaseapp.com",
  projectId: "banshyclothes",
  storageBucket: "banshyclothes.appspot.com",
  messagingSenderId: "75896742973",
  appId: "1:75896742973:web:919aa62bb4596df001b654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const collectionProd = collection(db, "products")