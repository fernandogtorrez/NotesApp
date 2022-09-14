import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDNXNaL22Qan9j2vlqdtyTWiuLc1S_olLw",
  authDomain: "noteapp-torrez.firebaseapp.com",
  projectId: "noteapp-torrez",
  storageBucket: "noteapp-torrez.appspot.com",
  messagingSenderId: "835590244800",
  appId: "1:835590244800:web:d15851b0e7ebe52c5c6025"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
export const FirebaseStorage = getStorage(FirebaseApp)