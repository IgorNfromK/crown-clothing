import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyAn7EOaIjq9gDNJ_vEiBIOwvEIICM8-NcY",
  authDomain: "crown-db-d3dd0.firebaseapp.com",
  projectId: "crown-db-d3dd0",
  storageBucket: "crown-db-d3dd0.appspot.com",
  messagingSenderId: "327192031587",
  appId: "1:327192031587:web:7c009f1bb2aa99d7e22356",
  measurementId: "G-74TSSBYGR8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
