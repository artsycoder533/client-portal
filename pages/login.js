import { useState } from "react";
import FormInput from "../components/FormInput";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [formErrors, setFormErrors] = useState({
    name_error: "",
    email_error: "",
    pasword_error: "",
    confirm_error: "",
  });
  const [user, setUser] = useState({});

  const toggleForm = (e) => {
    e.preventDefault();
    setShowRegister(!showRegister);
    setFormErrors({
      username_error: "",
      email_error: "",
      password_error: "",
      confirm_error: "",
    });
    setFormInputs({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = validateFormInputs();
    //if error found
    if (status) {
      //do something
      console.log("form validation error");
    } else {
      //register user with firebase
      registerUser();
      setFormInputs({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
      setFormErrors({
        username_error: "",
        email_error: "",
        password_error: "",
        confirm_error: "",
      });
    }
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      setUser({ ...auth.currentUser });
    } catch (error) {
      //if an error is found user must alread exist
      console.log(error.message);
      //change confirm error to reflect message
        setFormErrors({
            ...formErrors,
            confirm_error: error.message
        });
    }
  };

  const validateFormInputs = () => {
    let usernameError,
      emailError,
      passwordError,
      confirmError = "";
    let result = false;
    //if empty
    if (email.length === 0) {
      emailError = "Email cannot be blank!";
      result = true;
    } else if (!email.match(/^(\w+@).*\.\w+$/)) {
      emailError = "Please enter a valid email!";
      result = true;
    }

    if (confirm_password.length === 0 && showRegister) {
      confirmError = "Passwords do not match!";
      result = true;
    }

    //if wrong type
    if (password.length === 0) {
      passwordError = "Password cannot be blank!";
    } else if (password.length < 8) {
      passwordError = "Password must be a min of 8 characters!";
      result = true;
    }

    if (showRegister) {
      if (password !== confirm_password) {
        confirmError = "Passwords do not match!";
        result = true;
      }
      if (username.length === 0) {
        usernameError = "Name cannot be blank!";
      }
    }
    setFormErrors({
      ...formErrors,
      username_error: usernameError,
      email_error: emailError,
      password_error: passwordError,
      confirm_error: confirmError,
    });
    return result;
  };

  const { email, password, confirm_password, username } = formInputs;
  const { email_error, password_error, confirm_error, username_error } =
    formErrors;

  return (
    <section className="flex border-3 h-[calc(100vh-64px-40px)] justify-center items-center bg-gray-200">
      <form
        action=""
        className="flex flex-col w-96 gap-4 bg-white drop-shadow-lg p-8">
        <h2 className="text-xl uppercase text-purple-800 font-bold text-center">
          {showRegister ? "Register" : "Login"}
        </h2>
        {showRegister && (
          <FormInput
            label="Name:"
            type="text"
            name="username"
            id="username"
            htmlFor="username"
            value={username}
            error={username_error}
            onChange={handleInput}
          />
        )}

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
          label="Password:"
          type="password"
          name="password"
          id="password"
          htmlFor="password"
          value={password}
          error={password_error}
          onChange={handleInput}
        />
        {showRegister ? (
          <FormInput
            label="Confirm Password:"
            type="password"
            name="confirm_password"
            id="confirm_password"
            htmlFor="confirm_password"
            value={confirm_password}
            error={confirm_error}
            onChange={handleInput}
          />
        ) : null}
        <input
          type="submit"
          value={showRegister ? "Register" : "Login"}
          onClick={handleSubmit}
          className="btn cursor-pointer"
        />
        {showRegister ? (
          <p className="text-center">
            Already have an account?{" "}
            <button className="underline" onClick={toggleForm}>
              Login!
            </button>
          </p>
        ) : (
          <p className="text-center">
            Don't have an account?{" "}
            <button className="underline" onClick={toggleForm}>
              Register!
            </button>
          </p>
        )}
      </form>
    </section>
  );
};

export default Login;
