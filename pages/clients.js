import { auth } from "../utils/firebase";

const Clients = () => {
    return (
        <section>
            <h1>Hello, {auth.currentUser.displayName}</h1>
        </section>
    );
}
 
export default Clients;