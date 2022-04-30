import { createContext, useState, useEffect } from 'react';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
         onAuthStateChanged(auth, (currentUser) => {
           if (currentUser) {
               setUser(currentUser);
               setIsLoggedIn(true);
           } else {
             
           }
         });
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}