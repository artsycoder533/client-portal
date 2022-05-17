import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context";
import { useRouter } from "next/router";
import FormInput from "../components/FormInput";
import Select from "../components/Select";
import { insurances, services } from "../utility/data";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validInputs = verifyFormInputs();
    console.log(validInputs);
    if (validInputs) {
      //add data to firebase
      addClientToFirebase();
      resetFormErrors();
      resetFormInputs();
    }
    else {
      // setTimeout(() => {
      //   resetFormErrors();
      // }, 3000);
    }
  }

  const verifyFormInputs = () => {
    let firstNameErr, lastNameErr, emailErr, phoneErr, insuranceErr, appTypeErr = "";
    let result = true;

    if (!firstName) {
      firstNameErr = "First name cannot be blank!";
      result = false;
    }
    if (!lastName) {
      lastNameErr = "Last name cannot be blank!";
      result = false;
    }
    if (!email) {
      emailErr = "Email cannot be be blank!";
      result = false;
    }
    if (!phone) {
      phoneErr = "Phone number cannot be blank!";
      result = false;
    }
    if (!insurance) {
      insuranceErr = "You must select an insurance!";
      result = false;
    }
    if (!apptType) {
      appTypeErr = "You must select an appointment type!";
      result = false;
    }

    setAddErrors({
      firstName_error: firstNameErr,
      lastName_error: lastNameErr,
      email_error: emailErr,
      phone_error: phoneErr,
      insurance_error: insuranceErr,
      apptType_error: appTypeErr,
    });

    return result;
  }

  const resetFormErrors=() => {
    setAddErrors({
      firstName_error: "",
      lastName_error: "",
      email_error: "",
      phone_error: "",
      insurance_error: "",
      apptType_error: "",
    });
  }

  const resetFormInputs = () => {
    setClient({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      insurance: "",
      apptType: "",
    });
  }
  

  const addClientToFirebase = async () => {
    console.log("inside add to firebase");
    try {
      await addDoc(collection(db, "clients"), {
        ...client,
      });
    } catch (e) {
      console.error(e);
    }
  };

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
          type="tel"
          name="phone"
          id="phone"
          htmlFor="phone"
          minLength={10}
          maxLength={10}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
          error={insurance_error}
          data={insurances}
          onChange={handleInput}
        />
        <Select
          label="Service:"
          type="select"
          name="apptType"
          id="service"
          htmlFor="service"
          value={apptType}
          error={apptType_error}
          data={services}
          onChange={handleInput}
        />
        <input
          type="submit"
          value="Add"
          className="self-end align-middle cursor-pointer btn"
          onClick={handleSubmit}
        />
      </form>
    </section>
  );
};

export default AddClient;
