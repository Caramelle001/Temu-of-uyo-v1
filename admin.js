import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyBOUtiANCbaTvK-Ja3NvGilCwrGFyVVpMY",
  authDomain: "temu-of.firebaseapp.com",
  projectId: "temu-of",
  storageBucket: "temu-of.firebasestorage.app",
  messagingSenderId: "932397581506",
  appId: "1:932397581506:web:2200ad197d33e77f94675b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("productForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    
    await addDoc(collection(db, "products"), {
        name: name,
        price: price,
        createdAt: new Date()
    });
    alert("Product added successfully!");
});
