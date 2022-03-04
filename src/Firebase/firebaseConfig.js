// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firabase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF7MBo34niwKitIk7hzK9rWYACWHL5cmE",
  authDomain: "ag-workshop-marzo3.firebaseapp.com",
  projectId: "ag-workshop-marzo3",
  storageBucket: "ag-workshop-marzo3.appspot.com",
  messagingSenderId: "71064251949",
  appId: "1:71064251949:web:8f692b9675d186f1b052a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
//const db = getFirestore()

export{
    app,
    google
}