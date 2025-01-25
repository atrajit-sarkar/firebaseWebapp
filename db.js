import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

import { app } from "./fbSdk";

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
