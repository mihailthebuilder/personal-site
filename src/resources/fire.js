import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyDeGIjqo1s7Y-Vsel1AXPTmZKYQN-U3BWQ",
  authDomain: "personal-site-62ba5.firebaseapp.com",
  projectId: "personal-site-62ba5",
  storageBucket: "personal-site-62ba5.appspot.com",
  messagingSenderId: "500725287358",
  appId: "1:500725287358:web:e7d184da0d99ac0933d1ef",
  measurementId: "G-9F9D3GCV65",
};

const fire = firebase.initializeApp(config);
firebase.analytics();

export default fire;
