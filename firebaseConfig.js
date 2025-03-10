import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBAKwwsL-TCG-VGmBgNkZIZiQvOiD7O0eg",
  authDomain: "elite-estates-ca101.firebaseapp.com",
  projectId: "elite-estates-ca101",
  storageBucket: "elite-estates-ca101.firebasestorage.app",
  messagingSenderId: "761017091368",
  appId: "1:761017091368:web:fa26ec105b215c2d44bc1d",
  measurementId: "G-6NVRLL121B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const facebookProvider  = new FacebookAuthProvider();
const GoogleProvider=new GoogleAuthProvider();
// تأكد من التصدير بالشكل الصحيح
export { app, auth,facebookProvider, GoogleProvider}; 