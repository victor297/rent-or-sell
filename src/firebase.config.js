import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
initializeApp(firebaseConfig)
export const db = getFirestore()
