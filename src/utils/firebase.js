// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF-mgsrqCs_nuGFluqeRAj27a_288lEHg",
  authDomain: "netflix-gpt-eafe0.firebaseapp.com",
  projectId: "netflix-gpt-eafe0",
  storageBucket: "netflix-gpt-eafe0.appspot.com",
  messagingSenderId: "295046598864",
  appId: "1:295046508864:web:7702b12ba21c63d05c0aa5",
  measurementId: "G-2ZXQVL21CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export default auth;