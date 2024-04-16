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
    const [loading, setLoading] = useState(true)
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const twitterSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, xProvider)
    }
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("observing", currentUser);
            setUser(currentUser)
            setLoading(false)
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
        setReload,
        loading,
        setLoading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;