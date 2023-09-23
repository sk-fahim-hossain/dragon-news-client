// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBHbTxzhW6sV9r7Pm40Xg5C47L1x9X7FE",
  authDomain: "dragon-news-client-ed271.firebaseapp.com",
  projectId: "dragon-news-client-ed271",
  storageBucket: "dragon-news-client-ed271.appspot.com",
  messagingSenderId: "798112790836",
  appId: "1:798112790836:web:c0dfd7689b2788a155cd61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;