import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBJGJUIwMdPCJU7E7kYd2MHanzraoEJwI",
  authDomain: "real-time-chat-5ce7f.firebaseapp.com",
  projectId: "real-time-chat-5ce7f",
  storageBucket: "real-time-chat-5ce7f.appspot.com",
  messagingSenderId: "906398206720",
  appId: "1:906398206720:web:921d1d133290cb91fa81e5",
  measurementId: "G-ENZSG93H30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()