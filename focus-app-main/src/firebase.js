


import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCV7ANrGStoV3Jq3UDDcFvH7of-76ehZuU",
  authDomain: "auth-b1729.firebaseapp.com",
  projectId: "auth-b1729",
  storageBucket: "auth-b1729.appspot.com",
  messagingSenderId: "190546489039",
  appId: "1:190546489039:web:af652bd2273b88d65ed1ba"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const auth = getAuth(app);
