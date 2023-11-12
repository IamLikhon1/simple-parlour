// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPhQcEUEgcX2WcsVdYCUj6v5F9ZIBftNU",
  authDomain: "simple-parlour-84df8.firebaseapp.com",
  projectId: "simple-parlour-84df8",
  storageBucket: "simple-parlour-84df8.appspot.com",
  messagingSenderId: "80234354888",
  appId: "1:80234354888:web:a13aff905bc8d21ddd6dfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app