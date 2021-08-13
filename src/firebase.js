import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYncrs2z-hHA1GNkAEOeU7gpEZYkPFt28",
    authDomain: "todo-app-f6c40.firebaseapp.com",
    projectId: "todo-app-f6c40",
    storageBucket: "todo-app-f6c40.appspot.com",
    messagingSenderId: "642455150973",
    appId: "1:642455150973:web:bf4d7ef9f26b69714dec14",
    measurementId: "G-PFKLKH5PR3"
});

const db = firebaseApp.firestore();

export default db;