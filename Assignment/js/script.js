// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHm_BKDXkPZwE7Jwao3WakzDts7U0GNvk",
  authDomain: "tech-inject-frontend-challenge.firebaseapp.com",
  projectId: "tech-inject-frontend-challenge",
  storageBucket: "tech-inject-frontend-challenge.appspot.com",
  messagingSenderId: "904180043515",
  appId: "1:904180043515:web:2ce536024997cf5e082a5e",
  measurementId: "G-RJXZHKSBQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

