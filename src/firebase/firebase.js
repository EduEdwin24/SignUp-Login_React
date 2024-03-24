import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy22HeZ8ka94mKU0UhBOdDc4erRHc0qcE",
  authDomain: "login-86244.firebaseapp.com",
  projectId: "login-86244",
  storageBucket: "login-86244.appspot.com",
  messagingSenderId: "281195234237",
  appId: "1:281195234237:web:a788ace632e05c9c6248d4",
  measurementId: "G-LW9L7960TS"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
