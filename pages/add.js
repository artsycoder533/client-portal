import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context";
import { useRouter } from "next/router";
import FormInput from "../components/FormInput";
import Select from "../components/Select";
import { insurances, services } from "../utility/data";

const AddClient = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    insurance: "",
    apptType: ""
  });
  const [addErrors, setAddErrors] = useState({
    firstName_error: "",
    lastName_error: "",
    email_error: "",
    phone_error: "",
    insurance_error: "",
    apptType_error: ""
  });

  useEffect(() => {
    isLoggedIn ? router.push("/add") : router.push("/login");
  }, [isLoggedIn]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addClientToFirebase = () => {
    
  }

  const { firstName, lastName, email, phone, apptType, insurance } = client;
  const { firstName_error, lastName_error, email_error, phone_error, insurance_error, apptType_error } = addErrors;
  
  return (
    <section className="grow">
      <form action="" className="flex flex-col max-w-lg gap-5 mx-auto ">
        <h1 className="p-5 text-lg font-bold text-center">Add Client</h1>
        <FormInput
          label="First Name:"
          type="text"
          name="firstName"
          id="firstName"
          htmlFor="firstName"
          value={firstName}
          error={firstName_error}
          onChange={handleInput}
        />
        <FormInput
          label="Last Name:"
          type="text"
          name="lastName"
          id="lastName"
          htmlFor="firstName"
          value={lastName}
          error={lastName_error}
          onChange={handleInput}
        />
        <FormInput
          label="Email:"
          type="email"
          name="email"
          id="email"
          htmlFor="email"
          value={email}
          error={email_error}
          onChange={handleInput}
        />
        <FormInput
          label="Phone:"
          type="phone"
          name="phone"
          id="phone"
          htmlFor="phone"
          value={phone}
          error={phone_error}
          onChange={handleInput}
        />
        <Select
          label="Insurance:"
          type="select"
          name="insurance"
          id="insurance"
          htmlFor="insurance"
          value={insurance}
          error={phone_error}
          data={insurances}
          onChange={handleInput}
        />
        <Select
          label="Service:"
          type="select"
          name="insurance"
          id="insurance"
          htmlFor="insurance"
          value={insurance}
          error={phone_error}
          data={services}
          onChange={handleInput}
        />
        <input type="submit" value="Add" className="self-end align-middle cursor-pointer btn" onClick={handleSubmit}/>
      </form>
    </section>
  );
};

export default AddClient;
