import firebase from 'firebase';

export const firebaseConfig = {
   apiKey: "AIzaSyBYE44LWD48qyxhVjq27AmGO24BI0ilG-I",
   authDomain: "fir-deploynubay.firebaseapp.com",
   projectId: "fir-deploynubay",
   storageBucket: "fir-deploynubay.appspot.com",
   messagingSenderId: "123437460671",
   appId: "1:123437460671:web:885ff8bc1d47531e82aa0a"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth;
 export const db = firebase.database();
