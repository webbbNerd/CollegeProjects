import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({

        apiKey: "AIzaSyCFGkkabpT0z2X3nv3zR5-cSV8Z__n62m4",

        authDomain: "unichat-14411.firebaseapp.com",

        projectId: "unichat-14411",

        storageBucket: "unichat-14411.appspot.com",

        messagingSenderId: "746673091578",

        appId: "1:746673091578:web:3ed0d8d776d6d9bf5dea43"
        
}).auth();
