import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

// firebase initialize call
initializeFirebase();

// provider declare
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
     // states declare
     const [user, setUser] = useState({});
     const [error, setError] = useState('');

     // auth declare
     const auth = getAuth();

     //google signin function
     const signInWithGoogle = () => {
          signInWithPopup(auth, googleProvider)
          .then(res => {
               console.log(res.user);
               setUser(res.user);
          }).catch(err => {
               setError(err.message);
          });
     }

     // user sign out
     const logOut = () => {
          signOut(auth)
               .then( () => {
                    // signed out
                    console.log('Signed out');
               }).catch(err => {
                    setError(err.message);
               });
     }

     useEffect( () => {
          onAuthStateChanged(auth, user => {
               setUser(user);
          });
     },[]);

          
     return {
          user,
          error,
          signInWithGoogle,
          logOut
     }

}

export default useFirebase;