import { useContext } from 'react';
import { AuthContext } from "../Context";

const Clients = () => {
    const { user, isLoggedIn } = useContext(AuthContext);
   
    return (
        <section>
            {isLoggedIn && <h1>Welcome, {user.displayName}</h1>}
            {!isLoggedIn && <h1>Please sign in!</h1>}
        </section>
    );
}
 
export default Clients;