import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJu8416VHT5xBI0bEigzdWg6K4pC70eRY",
  authDomain: "challenge-greydive-f48e7.firebaseapp.com",
  projectId: "challenge-greydive-f48e7",
  storageBucket: "challenge-greydive-f48e7.appspot.com",
  messagingSenderId: "744899163686",
  appId: "1:744899163686:web:f5539538b7edfe61c4d8e7",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

export const db = collection(firestore, "survey");
export default app;
