import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDavMY0lqhB0Zeq3mAVmw7HclJi5ACbZkk",
  authDomain: "velociwash-8d199.firebaseapp.com",
  projectId: "velociwash-8d199",
  storageBucket: "velociwash-8d199.firebasestorage.app",
  messagingSenderId: "111552723211",
  appId: "1:111552723211:web:f5b210cc6cbac26f2f4a0e",
  measurementId: "G-5LTVR3CHMM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
