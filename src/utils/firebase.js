// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";
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
// firebase.initializeApp(Config);
// var db = firebase.firestore();

export const auth = getAuth();
// // import { initializeApp } from 'firebase/app';
// // import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// // const firebaseConfig = {
// //   [REDACTED]
// // };

// // initializeApp(firebaseConfig)

// // const messaging = getMessaging();

// // export const requestForToken = () => {
// //   return getToken(messaging, { vapidKey: REDACTED })
// //     .then((currentToken) => {
// //       if (currentToken) {
// //         console.log('current token for client: ', currentToken);
// //         // Perform any other neccessary action with the token
// //       } else {
// //         // Show permission request UI
// //         console.log('No registration token available. Request permission to generate one.');
// //       }
// //     })
// //     .catch((err) => {
// //       console.log('An error occurred while retrieving token. ', err);
// //     });
// // };

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/compat/app";
// import "firebase/analytics";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAT0_6gMk1LfTesT5XXKKpfzeqLUFx_-zA",
//   authDomain: "netflixgpt-5555.firebaseapp.com",
//   projectId: "netflixgpt-5555",
//   storageBucket: "netflixgpt-5555.appspot.com",
//   messagingSenderId: "134880954923",
//   appId: "1:134880954923:web:d348d61b5e0f25d692786e",
//   measurementId: "G-CLLH7KZSKM",
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // const auth = firebase.auth();
// // const db = firebase.firestore();

// // export { db, auth };
// // export default firebase;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// //const auth = firebase.auth();
// const auth = getAuth(app);
// const db = firebase.firestore();
// // const db = getFirestore(app);
