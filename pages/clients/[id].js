import { collection, getDocs, getDoc } from "firebase/firestore";
import { db} from "../../utils/firebase"
import { getAuth } from "firebase/auth";

const Client = ({ clientProps }) => {
    const clients = JSON.parse(clientProps)
   console.log(clientProps)
  return (
    <>
      <h2>This is the client page</h2>
      <p>{clients.firstName}</p>
    </>
  );
}
 
export default Client;

export const getStaticPaths = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const snapshot = await getDocs(collection(db, user.email));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { id: doc.id.toString() },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const auth = getAuth();
  const user = auth.currentUser;

  const id = context.params.id;

  const docRef = doc(db, user.email, id);

  const docSnap = await getDoc(docRef);

  return {
    props: {
      clientProps: JSON.stringify(docSnap.data()) || null,
    },
  };
};



