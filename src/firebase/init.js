import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPbxomMxDd2sn1ia0xWklJpmq-71RGVVg",
  authDomain: "fit5032-active-hub.firebaseapp.com",
  projectId: "fit5032-active-hub",
  storageBucket: "fit5032-active-hub.firebasestorage.app",
  messagingSenderId: "610444739979",
  appId: "1:610444739979:web:c9ae7ad5502ffecdf01b8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database service
const db = getFirestore(app);

// Export the database reference so it can be used in other parts of the app
export default db;

