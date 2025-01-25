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

// dataBase
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

const db = getFirestore(app);

document.getElementById('createData').addEventListener('click', async () => {
    try {
        // Reference to the collection
        const docRef = await addDoc(collection(db, "users"), {
            name: "John Doe",
            email: "john.doe@example.com",
            age: 25,
            createdAt: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Data added successfully!");
    } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error adding data!");
    }
});

async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

fetchData();
