import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-nutrions.firebaseapp.com",
  projectId: "react-nutrions",
  storageBucket: "react-nutrions.appspot.com",
  messagingSenderId: "96695716899",
  appId: "1:96695716899:web:248638d6271dc07701f596"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }