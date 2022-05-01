import { useState, useEffect, useContext } from "react";
import FormInput from "../components/FormInput";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { AuthContext } from "../Context";

const Login = () => {
  const router = useRouter();
  const { setUser, isLoggedIn } = useContext(AuthContext);
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

  useEffect(() => {
    isLoggedIn ? router.push("clients") : router.push("/login");
  }, []);

  const toggleForm = (e) => {
    e.preventDefault();
    setShowRegister(!showRegister);
    resetErrors();
    resetInputs();
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
    if (
      email_error === "User email already exists!" ||
      email_error === "Invalid email and/or password!"
    ) {
      return;
    }
    const status = validateFormInputs();
    //if error found
    if (status) {
      return;
    } else {
      //register user with firebase
      if (showRegister) {
        registerUser();
      }
      else {
        loginUser();
      }
      
      resetErrors();
    }
  };

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateUsername(user);
    } catch (error) {
      //if an error is found user must alread exist
      console.log(error.message);
      //change confirm error to reflect message
      resetErrors();
      setFormErrors({
        ...formErrors,
        email_error: "User email already exists!",
      });
    }
  };

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      router.replace("clients");
      resetErrors();
      resetInputs();
    } catch (error) {
      console.log(error.message);
      resetErrors();
      setFormErrors({
        ...formErrors,
        email_error: "Invalid email and/or password!",
      });
    }
  }

  const updateUsername = async (userInfo) => {
    try {
      await updateProfile(userInfo.user, { displayName: username });
      setUser({ ...userInfo.user });
      router.replace("/clients");
    } catch (error) {
      console.log(error.message);
    }
  };

  const resetErrors = () => {
    setFormErrors({
      username_error: "",
      email_error: "",
      password_error: "",
      confirm_error: "",
    });
  };

  const resetInputs = () => {
    setFormInputs({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });
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
        className="flex flex-col gap-4 p-8 bg-white w-96 drop-shadow-lg">
        <h2 className="text-xl font-bold text-center text-purple-800 uppercase">
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
          className="cursor-pointer btn"
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
