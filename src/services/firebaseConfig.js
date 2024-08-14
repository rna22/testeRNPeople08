import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQaMx3dUwEoS7Qtxilk0QdJCFWhidfF8c",
  authDomain: "testernpeople-63c13.firebaseapp.com",
  projectId: "testernpeople-63c13",
  storageBucket: "testernpeople-63c13.appspot.com",
  messagingSenderId: "194239371521",
  appId: "1:194239371521:web:f902d5da0614a107aa2300"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);