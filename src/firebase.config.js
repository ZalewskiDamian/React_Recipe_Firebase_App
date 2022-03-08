import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-recipe-firebase-186e7.firebaseapp.com",
  projectId: "react-recipe-firebase-186e7",
  storageBucket: "react-recipe-firebase-186e7.appspot.com",
  messagingSenderId: "634204300518",
  appId: "1:634204300518:web:ac6d8052cdfbfccd75c727"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }