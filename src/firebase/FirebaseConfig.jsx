// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDBHTUtOeuCON7AEF3UPPxU1sHsnFfBv-M",
//     authDomain: "ecommerce-for.firebaseapp.com",
//     projectId: "ecommerce-for",
//     storageBucket: "ecommerce-for.appspot.com",
//     messagingSenderId: "609664686595",
//     appId: "1:609664686595:web:302bf25cc8efa64a4e4c36"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export { fireDB, auth }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBftwRBJOtUQDSBI2R8bev49ylA_dvKHaA",
  authDomain: "oams-97176.firebaseapp.com",
  projectId: "oams-97176",
  storageBucket: "oams-97176.appspot.com",
  messagingSenderId: "202160916086",
  appId: "1:202160916086:web:28d60fb00612786db54157",
  measurementId: "G-07C7Z6WT91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;