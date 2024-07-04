// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAD-gncR9nN3ENq_Ny52Zctsqb7FF6Kcno",
  authDomain: "ebhart-ef0e6.firebaseapp.com",
  projectId: "ebhart-ef0e6",
  storageBucket: "ebhart-ef0e6.appspot.com",
  messagingSenderId: "51240984756",
  appId: "1:51240984756:web:f9db9474b1b702acd3f7e1",
  measurementId: "G-5FQ5MZNFCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth } ;
