import { useContext } from 'react';
import { auth } from "../utils/firebase";
import { AuthContext } from "../Context";

const Clients = () => {
    const { user } = useContext(AuthContext);
    return (
        <section>
            <h1>Welcome, {user.displayName}</h1>
        </section>
    );
}
 
export default Clients;