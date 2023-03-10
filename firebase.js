import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDzvm6ug3mvYXBhoqJ2jMzSQQVQQMgL-4",
  authDomain: "bloghub-ca30a.firebaseapp.com",
  projectId: "bloghub-ca30a",
  storageBucket: "bloghub-ca30a.appspot.com",
  messagingSenderId: "1045666018764",
  appId: "1:1045666018764:web:39bf3fc478e0488a701969",
  measurementId: "G-GXX167FT0W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()