import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASyxyD51mkZq-C5LGq0GhERlMRaB2wDrw",
  authDomain: "velociwash-3340e.firebaseapp.com",
  projectId: "velociwash-3340e",
  storageBucket: "velociwash-3340e.firebasestorage.app",
  messagingSenderId: "719816792792",
  appId: "1:719816792792:web:f7989ac61459da76ba95ad",
  measurementId: "G-2YHMG8T2PC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
