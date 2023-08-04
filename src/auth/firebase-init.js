import { initializeApp } from 'firebase/app';
import {
    getAuth,
    connectAuthEmulator,
} from 'firebase/auth';
// require('dotenv').config();
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

function FirebaseInit() {
    const firebaseApp = initializeApp(firebaseConfig);

    const auth = getAuth(firebaseApp);
// simulates auth locally & doesn't mess with production code
    connectAuthEmulator(auth, "http://localhost:9099");
    return auth;
}

export default FirebaseInit;
// Detect auth state
/*
onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});*/
