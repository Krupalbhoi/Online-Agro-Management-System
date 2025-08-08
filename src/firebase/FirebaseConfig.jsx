
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "Add your api key",
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
