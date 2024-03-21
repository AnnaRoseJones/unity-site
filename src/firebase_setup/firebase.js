// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDthWqed24KcR37mer_CRFndb3cexKLnno",
  authDomain: "unity-site-98917.firebaseapp.com",
  projectId: "unity-site-98917",
  storageBucket: "unity-site-98917.appspot.com",
  messagingSenderId: "263554320992",
  appId: "1:263554320992:web:272bdb218a3504d3d25105",
  measurementId: "G-KL5F8EGVN4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
