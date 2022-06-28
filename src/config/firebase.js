// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
  apiKey: "AIzaSyBhmoQC5XliiNmzvSUKWwKKL-KKe8W_j9U",
  authDomain: "banshy-clothes.firebaseapp.com",
  projectId: "banshy-clothes",
  storageBucket: "banshy-clothes.appspot.com",
  messagingSenderId: "260631943860",
  appId: "1:260631943860:web:e8f6752ed37ca7f71ad5e1",
  measurementId: "G-WX01J5YBHY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)