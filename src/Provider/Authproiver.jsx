import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signOut , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
export const AuthCntx = createContext(null)
const Authproiver = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email,passsword) =>{
       return createUserWithEmailAndPassword(auth,email,passsword)
    }
    const loginUser = (email,passsword)=>{
        return signInWithEmailAndPassword(auth, email, passsword)
    }

    const signOuts = ()=>{
        return  signOut(auth)
    }



    
    useEffect(()=>{
            const notChange = onAuthStateChanged(auth, currentUser=>{
                console.log(currentUser)
                setUser(currentUser)
            })
            return()=>{
                notChange()
            }
    },[])

    const name = 'kawsar'
    const drive = {
        name,
        createUser,
        loginUser,
        user,
        signOuts
    }
    return (
        <AuthCntx.Provider value={drive}>
            {children}
        </AuthCntx.Provider>
    );
};

export default Authproiver;