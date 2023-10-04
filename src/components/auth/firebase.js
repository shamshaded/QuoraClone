

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
    apiKey: "AIzaSyB4m18R63FhTGkUwgyTF_3z-n6xV9XmR3c",
    authDomain: "quoraclone-400611.firebaseapp.com",
    projectId: "quoraclone-400611",
    storageBucket: "quoraclone-400611.appspot.com",
    messagingSenderId: "988173111554",
    appId: "1:988173111554:web:3ee1c35f66e168cb0c721b",
    measurementId: "G-XK8X05WQ5P"
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
