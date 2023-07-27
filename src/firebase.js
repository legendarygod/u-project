// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, signOut } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { Timestamp, addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app)
const db = getFirestore()

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, provider)
        const user = res.user
        const q = query(collection(db, "users"), where("uid", "==", user.uid ));
        const docs = await getDocs(q)
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                username: "",
                authProvider: "google",
                email: user.email,
                photoURL: user.photoURL,
                country_of_residence: "",
                country_of_origin: "",
                state_of_origin: "",
                state_of_residence: "",
                account_type: "",
                phone_number: null,
                projects: [],
                bio: "",
                followers: [],
                following: [],
                affiliated_institutions: [],
                posts: [] 
            });
        }
    }catch(error){
        console.error(error)
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
}

const verifyEmail = async (user) => {
    try{
        const res = await sendEmailVerification(user)
        console.log("sent verification link");
    }catch(error){
        console.log(error)
    }
}

const registerWithEmailAndPassword = async (data) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
        const user = res.user;
        console.log(user)
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: data.name,
            username: data.username,
            authProvider: "local",
            email: user.email,
            photoURL: "",
            country_of_residence: data.countryR,
            state_of_residence: data.stateR,
            account_type: data.acctType,
            phone_number: data.phoneNumber,
            date_created: Timestamp.now(),
            projects: [],
            bio: "",
            followers: [],
            following: [],
            affiliated_institutions: [],
            posts: [] 
        })
    } catch (error) {
        console.log(error)
        console.log("there is an issue!")
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordReset(auth, email)
        alert("Password reset link sent!")
    } catch (error) {
        console.log(error)
    }
}



const logOut = () => {
    signOut(auth)
}

export { auth, provider, storage, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, verifyEmail, logOut }
export default db;