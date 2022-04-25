import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-_YJRzIp98mSJoTs4onc1wHs5F5N1pGw",
    authDomain: "netflix-clone-75048.firebaseapp.com",
    projectId: "netflix-clone-75048",
    storageBucket: "netflix-clone-75048.appspot.com",
    messagingSenderId: "380772240084",
    appId: "1:380772240084:web:3033d4f1f1dce970948941",
    measurementId: "G-DVG9CDJRYY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;