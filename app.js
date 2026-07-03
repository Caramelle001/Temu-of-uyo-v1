import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOUtiANCbaTvK-Ja3NvGilCwrGFyVVpMY",
  authDomain: "temu-of.firebaseapp.com",
  projectId: "temu-of",
  storageBucket: "temu-of.firebasestorage.app",
  messagingSenderId: "932397581506",
  appId: "1:932397581506:web:2200ad197d33e77f94675b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userProfile = document.getElementById("userProfile");
const userName = document.getElementById("userName");

loginBtn.addEventListener("click", () => {
    signInWithPopup(auth, provider).catch((error) => console.error(error));
});

logoutBtn.addEventListener("click", () => signOut(auth));

onAuthStateChanged(auth, (user) => {
    if (user) {
        loginBtn.style.display = "none";
        userProfile.style.display = "block";
        userName.innerText = "Welcome, " + user.displayName;
    } else {
        loginBtn.style.display = "block";
        userProfile.style.display = "none";
    }
});
