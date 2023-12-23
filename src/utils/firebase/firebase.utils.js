import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQNh7jIluBkla2b8m_H_2ieeJDPRN8T2c",
    authDomain: "hero-clothing-db.firebaseapp.com",
    projectId: "hero-clothing-db",
    storageBucket: "hero-clothing-db.appspot.com",
    messagingSenderId: "512379354912",
    appId: "1:512379354912:web:bfa8d5fd66fa192f2ea145"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapeshot = await getDoc(userDocRef);
    console.log(userSnapeshot)
    console.log(userSnapeshot.exists())


    

    // if user data exists
    // create/set the document with the data from userAuth in my collection

    // if User data does not exist
    if(!userSnapeshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
   // return userDocRef
    return userDocRef;


}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
}