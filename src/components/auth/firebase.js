

import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    FacebookAuthProvider,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUkA-N0oudrE8ydT4uiKKjXyEy_KaJQ0E",
    authDomain: "quora-clone-2a957.firebaseapp.com",
    projectId: "quora-clone-2a957",
    storageBucket: "quora-clone-2a957.appspot.com",
    messagingSenderId: "396071384228",
    appId: "1:396071384228:web:eda1de8c8ccee344a86231",
    measurementId: "G-LP6Y5DS9FF"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export {
    auth,
    db,
    googleProvider,
    facebookProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
};