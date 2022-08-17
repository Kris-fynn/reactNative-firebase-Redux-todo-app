import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCeDlTEX9cZv0Su0Tihpk64duTW0AV9-tY",
  authDomain: "rjsnativefirebasereduxtodoapp.firebaseapp.com",
  projectId: "rjsnativefirebasereduxtodoapp",
  storageBucket: "rjsnativefirebasereduxtodoapp.appspot.com",
  messagingSenderId: "1002939651062",
  appId: "1:1002939651062:web:4410311389f27fd9546dd7",
  measurementId: "G-FZ55QMJKBZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}