import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    //Your Firebase credentials
});

const db = firebaseApp.firestore();

export default db;
