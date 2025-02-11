import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKw_SCCrolzHUdDK6iOXE3Pnq9fFVJ3C0",
    authDomain: "blur-login-7ae59.firebaseapp.com",
    projectId: "blur-login-7ae59",
    storageBucket: "blur-login-7ae59.firebasestorage.app",
    messagingSenderId: "600022282889",
    appId: "1:600022282889:web:fc9a0ed58e8bbbf9b1cc58"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);