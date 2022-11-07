// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


export const loadConfiguration=()=>{
    console.log("carga configurada");
    const app = initializeApp(firebaseConfig);
    global.dbCon = getFirestore(app);
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQz9RCucGAlftiJWB0ztdsA2Eg_1HaXUw",
  authDomain: "ivanreactn.firebaseapp.com",
  projectId: "ivanreactn",
  storageBucket: "ivanreactn.appspot.com",
  messagingSenderId: "196105707248",
  appId: "1:196105707248:web:71c1182ad5cd0222f7ac35"
};

// Initialize Firebase
