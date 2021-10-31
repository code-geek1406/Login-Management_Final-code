import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMY4UkMbm3olWDlsGKZPzLlD5YSNIVlgA",
  authDomain: "auth-development-a359f.firebaseapp.com",
  projectId: "auth-development-a359f",
  storageBucket: "auth-development-a359f.appspot.com",
  messagingSenderId: "16598157008",
  appId: "1:16598157008:web:d01041df1223c6c1eb00d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
