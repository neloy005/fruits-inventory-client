// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuFp7fq_Tr_MF62f3c_vuUUGQ9nWN-OIs",
    authDomain: "fruit-inventory.firebaseapp.com",
    projectId: "fruit-inventory",
    storageBucket: "fruit-inventory.appspot.com",
    messagingSenderId: "132082174663",
    appId: "1:132082174663:web:b1e02d711124631be24ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;