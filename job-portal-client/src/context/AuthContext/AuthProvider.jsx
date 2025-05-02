import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log(user ? '' : user);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // manageUser 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser?.email) {
                setLoading(false)
                setUser(currentUser)
                console.log("currentUser ------>", currentUser);
                const user = { email: currentUser.email }
                console.log("user=>", user);
                // axios.post('http://localhost:5000/jwt', user)
                //     .then(res => {
                //         console.log(res.data);
                //     })
                //     .catch(err => {
                //         console.log(err); 
                //     })
            } else {
                const res = axios.post('http://localhost:5000/logout', {}, {
                    withCredentials: true
                })
                console.log(res.data);
                setUser(null)
                setLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;