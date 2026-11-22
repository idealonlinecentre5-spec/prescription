// Firebase setup shared by index.html and admin.html
// (These web keys are public by design - Firestore security rules protect the data.)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import * as A from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import * as F from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1qF4FKQRQhFb7KKQUp-6YdWUwUgc-lqs",
  authDomain: "prescription-9e1e4.firebaseapp.com",
  projectId: "prescription-9e1e4",
  storageBucket: "prescription-9e1e4.firebasestorage.app",
  messagingSenderId: "968909352315",
  appId: "1:968909352315:web:5557e29c91c22d3ab321de",
  measurementId: "G-58LXFJVGW7"
};

export const app = initializeApp(firebaseConfig);
export const auth = A.getAuth(app);
export const db = F.getFirestore(app);
export { A, F };
