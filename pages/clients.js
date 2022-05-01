import { useContext, useEffect } from 'react';
import { AuthContext } from "../Context";
import { useRouter } from 'next/router';

const Clients = () => {
    const router = useRouter();
    const { user, isLoggedIn } = useContext(AuthContext);
   
    useEffect(() => {
        isLoggedIn ? router.push("/") : router.push("/clients");
    });

    return (
        <section>
            {isLoggedIn && <h1>Welcome, {user.displayName}</h1>}
            {!isLoggedIn && <h1>Please sign in!</h1>}
        </section>
    );
}
 
export default Clients;