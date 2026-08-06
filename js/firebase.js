import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBiXCY4YBAvwCEj45XWVfMQhncLKuYt_lI",
  authDomain: "baby-shower-sofia.firebaseapp.com",
  projectId: "baby-shower-sofia",
  storageBucket: "baby-shower-sofia.firebasestorage.app",
  messagingSenderId: "255611408139",
  appId: "1:255611408139:web:14022fa909617bf8569c0e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
