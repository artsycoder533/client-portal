import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../Context";
import { useRouter } from 'next/router';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Link from 'next/link';

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
    }, [clients]);

    return (
      <section>
        {isLoggedIn && (
          <h1 className="text-left p-4">Welcome, {user.displayName}</h1>
        )}
        <ul className="list-none flex flex-col gap-4 container max-w-lg p-1 m-auto">
          {clients.length
            ? clients.map((client, index) => {
                const { firstName, lastName } = client;
                return (
                  <li key={index} className="p-2 bg-purple-100 hover:shadow-lg hover:bg-purple-300">
                    <Link href="">
                      <a className="block">
                        {lastName}, {firstName}
                      </a>
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </section>
    );
}
 
export default Clients;