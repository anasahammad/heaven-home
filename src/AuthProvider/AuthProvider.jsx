import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const xProvider = new TwitterAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [reload, setReload] = useState(false)
    
    const createUser = (email, password)=>{
       
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password)=>{
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        
        return signInWithPopup(auth, googleProvider)
    }
    const twitterSignIn = ()=>{
        
        return signInWithPopup(auth, xProvider)
    }
    const githubSignIn = ()=>{
        
        return signInWithPopup(auth, githubProvider)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("observing", currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    }, [auth, reload])
    const authInfo = {user,
         createUser, 
         signInUser, 
         googleSignIn, 
        twitterSignIn,
        githubSignIn,
        signOutUser, 
        setReload

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;