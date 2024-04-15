// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzMRjPaLJXTsSyhLYOf9_7r8CNz7m-U0",
  authDomain: "mern-book-inventory-cae3f.firebaseapp.com",
  projectId: "mern-book-inventory-cae3f",
  storageBucket: "mern-book-inventory-cae3f.appspot.com",
  messagingSenderId: "596877910718",
  appId: "1:596877910718:web:311ee5c9a1f78b25def4ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;