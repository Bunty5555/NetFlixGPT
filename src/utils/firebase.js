// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT0_6gMk1LfTesT5XXKKpfzeqLUFx_-zA",
  authDomain: "netflixgpt-5555.firebaseapp.com",
  projectId: "netflixgpt-5555",
  storageBucket: "netflixgpt-5555.appspot.com",
  messagingSenderId: "134880954923",
  appId: "1:134880954923:web:d348d61b5e0f25d692786e",
  measurementId: "G-CLLH7KZSKM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
