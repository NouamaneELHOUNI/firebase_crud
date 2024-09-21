import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fir-crud-3797f.firebaseapp.com",
    projectId: "fir-crud-3797f",
    storageBucket: "fir-crud-3797f.appspot.com",
    messagingSenderId: "944339316371",
    appId: "1:944339316371:web:ff2393547bf44ae5dae766",
    measurementId: "G-X0C0KR4NRD"
};

const app = initializeApp(firebaseConfig);
