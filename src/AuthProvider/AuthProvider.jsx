import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log("observing", currentUser);
            setUser(currentUser)
           
        })
        return ()=>{
            unsubscribe();
        }
    }, [auth])
    const authInfo = {user,
         createUser, 
         signInUser, 
        }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;