import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCYK1tyZScBpr4qOZXiPpv9FhHrKGW8Dlw",
  authDomain: "rentorsell-f7574.firebaseapp.com",
  projectId: "rentorsell-f7574",
  storageBucket: "rentorsell-f7574.appspot.com",
  messagingSenderId: "733932833329",
  appId: "1:733932833329:web:7926b160a910253ce72310"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
