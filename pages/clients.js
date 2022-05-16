import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../Context";
import { useRouter } from 'next/router';
import { collection, onSnapshot } from 'firebase/firestore';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const router = useRouter();
    const { user, isLoggedIn } = useContext(AuthContext);
   
    useEffect(() => {
        isLoggedIn ? router.push("clients") : router.push("/login");
    }, [isLoggedIn]);

    //get clients from firebase
    useEffect(() => {
        const clientCollection = collection(db, "clients");
        const q = query(clientCollection, orderBy("lastName", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const snapshotDocs = [];
            snapshot.forEach((doc) => snapshotDocs.push(doc.data()));
            setClients(snapshotDocs);
        });
        return unsubscribe;
    }, []);

    return (
        <section>
            {isLoggedIn && <h1>Welcome, {user.displayName}</h1>}
        </section>
    );
}
 
export default Clients;