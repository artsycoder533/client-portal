import { createContext, useState, useEffect } from 'react';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
         onAuthStateChanged(auth, (currentUser) => {
           if (currentUser) {
             setUser(currentUser);
           } else {
             
           }
         });
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}