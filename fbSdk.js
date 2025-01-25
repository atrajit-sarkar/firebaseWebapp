// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6mRLAGUUq5W1gxeQhxzr2RTSsGTMvVsI",
  authDomain: "webapp-1f4bd.firebaseapp.com",
  projectId: "webapp-1f4bd",
  storageBucket: "webapp-1f4bd.firebasestorage.app",
  messagingSenderId: "537109166891",
  appId: "1:537109166891:web:6e64a93a27b375efde636e",
  measurementId: "G-FEVY9QHK2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Firebase Initialized:", app);
const analytics = getAnalytics(app);
console.log("Firebase analytics Initialized:", analytics);
export {app};