// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjgx2TL0yZB7C3YlzviBIp-Hi5IwdhMBA",
  authDomain: "sra-foodcontactmaterial.firebaseapp.com",
  projectId: "sra-foodcontactmaterial",
  storageBucket: "sra-foodcontactmaterial.appspot.com",
  messagingSenderId: "589908394680",
  appId: "1:589908394680:web:9ae67c98c09278f25aea4d",
  measurementId: "G-226XW6H6BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);