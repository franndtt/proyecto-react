import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL8MKAWoYVMltQvaw-jI4ymQxar00WYfU",
  authDomain: "react-proyecto-final-efd88.firebaseapp.com",
  projectId: "react-proyecto-final-efd88",
  storageBucket: "react-proyecto-final-efd88.appspot.com",
  messagingSenderId: "638134683163",
  appId: "1:638134683163:web:226e864a20571e44af1abe"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  ,
)
