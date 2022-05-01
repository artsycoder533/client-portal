import { useContext, useEffect } from "react";
import { AuthContext } from "../Context";
import { useRouter } from "next/router";

const AddClient = () => {

  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    isLoggedIn ? router.push("/add") : router.push("/login");
  });

  return (
    <section className="grow">
      <h1>Add Client</h1>
    </section>
  );
};

export default AddClient;
