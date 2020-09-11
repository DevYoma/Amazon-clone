import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDaEpdcieGgcxuAUzoWcug3ROo_18PZo8M",
        authDomain: "yoma-amazom.firebaseapp.com",
        databaseURL: "https://yoma-amazom.firebaseio.com",
        projectId: "yoma-amazom",
        storageBucket: "yoma-amazom.appspot.com",
        messagingSenderId: "744022952202",
        appId: "1:744022952202:web:03942f4a3bcb0a65eb92f3",
        measurementId: "G-DSTV6BMX4Z"
})

//firebase app reference is needed for firestore..
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;