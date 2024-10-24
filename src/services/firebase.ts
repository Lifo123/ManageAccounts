import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAVKN1KcW3BMkq7rgK48MtxjnBY1IoL96w",
    authDomain: "manageaccounts-fdd2d.firebaseapp.com",
    databaseURL: "https://manageaccounts-fdd2d-default-rtdb.firebaseio.com",
    projectId: "manageaccounts-fdd2d",
    storageBucket: "manageaccounts-fdd2d.appspot.com",
    messagingSenderId: "921959373018",
    appId: "1:921959373018:web:4d496e78e5ed791656ade3",
    measurementId: "G-MZ2GR8DE46"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const analytics1 = getAnalytics(fb);
const db1 = getDatabase(fb)

export { analytics1, db1 }