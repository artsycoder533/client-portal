import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context";
import { useRouter } from "next/router";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase";
import Link from "next/link";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [copyOfClients, setCopyOfClients] = useState([]);
  const [searchClient, setSearchClient] = useState("");
  const router = useRouter();
  const { user, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    isLoggedIn ? router.push("clients") : router.push("/login");
  }, [isLoggedIn]);

  //get clients from firebase
  useEffect(() => {
    const clientCollection = collection(db, "clients");
    const q = query(clientCollection, orderBy("lastName"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = [];
      snapshot.forEach((doc) => snapshotDocs.push(doc.data()));
      setClients(snapshotDocs);
      setCopyOfClients(snapshotDocs);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const filteredClients = clients.filter(client => {
      const { lastName, firstName } = client;
      
      return lastName.toLowerCase().includes(searchClient.toLowerCase()) || firstName.toLowerCase().includes(searchClient.toLowerCase());
    });
    setCopyOfClients(filteredClients);
  }, [searchClient])

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchClient(value);
  }

  const searchForClient = (e) => {
    e.preventDefault();
    //validate input
    // const isError = validateSearch();
    // if (!isError) {
    //   set
    // }
  }

  const validateSearch = () => {
    let result = false;
    if (searchClient === "") {
      result = true;
    }
    return result;
  }

  return (
    <section>
      {isLoggedIn && (
        <h1 className="text-left p-4">Welcome, {user.displayName}</h1>
      )}
      <div className="flex container max-w-lg p-1 m-auto mb-4 items-center">
        <label htmlFor="search">Search for Client: </label>
        <input
          type="search"
          name="search"
          id="search"
          className="border-2 flex-1 p-1 ml-2"
          value={searchClient}
          onChange={handleSearch}
        />
        <input
          type="submit"
          value="Search"
          className="btn m-0"
          onClick={searchForClient}
        />
      </div>
      <ul className="list-none flex flex-col gap-4 container max-w-lg p-1 m-auto">
        {copyOfClients.length
          ? copyOfClients.map((client, index) => {
              const { firstName, lastName } = client;
              return (
                <li
                  key={index}
                  className="p-2 shadow-sm bg-purple-100 hover:shadow-xl hover:bg-purple-300">
                  <Link href="">
                    <a className="block font-semibold">
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
};

export default Clients;
