import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyC3S9gkhiWaiUYy42XkU67jmuCmX9yQwyk",
  authDomain: "rent-189e1.firebaseapp.com",
  projectId: "rent-189e1",
  storageBucket: "rent-189e1.appspot.com",
  messagingSenderId: "1041725170303",
  appId: "1:1041725170303:web:07dd9dfe276a294391554a"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
