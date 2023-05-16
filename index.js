// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.$macroCheatSheetAPIKey,
  authDomain: "macro-cheat-sheet.firebaseapp.com",
  projectId: "macro-cheat-sheet",
  storageBucket: "macro-cheat-sheet.appspot.com",
  messagingSenderId: "1097621819596",
  appId: "1:1097621819596:web:2cfab9a5edb02128d77269",
  measurementId: "G-1T504FFPLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
