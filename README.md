# Client Portal

##  Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

Client Portal is an application I am building to that is inspired by a problem one of my freelance clients is facing. They need a application to keep track of insurance payments for their clients as well as appointment dates.  I am using Next.js, Firebase 9, and Tailwind for the build!

### Screenshot

- Desktop Screenshot: 
![Desktop Screenshot]()
- Mobile Screenshot: 

    ![Mobile Screenshot]()

### Links

- Live site URL: []()
- Github Repository URL: [https://github.com/artsycoder533/client-portal.git](https://github.com/artsycoder533/client-portal.git)

## My Process

- Created the landing page
- Added Header/Footer
- Added Login/Registration form with conditional rendering
- Added form validation

### Built With

- Next.js
- Tailwind
- Firebase

### What I learned

 - Problem: Why is my external link not opening in another window?
 - Solution: 
    - The Link component is only for internal navigation, while it still does take you to an external site, it ignores the target="_blank" attribute.  To achieve this functionality you only use a regular anchor tag for external links.

        In Footer.js

        ```<a
              href="https://natashajohnson.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline">
              {" "}
              Natasha Johnson
            </a>
            ````

- Problem: How to handle when a user tries to register with an existing email?
 - Solution: 
    - Inside the registerUser function, I utilized the createUserWithEmailAndPassword function from Firebase inside of a try/catch block.  If an error was returned, I set an error on the email field.  I then added a check inside of the handleSubmit function that checks if the email_error is equal to the message "User email already exists!".  If it is, the return statement exists the handleSubmit function so the registerUser function isnt called.  

    In login.js
    ```
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email_error === "User email already exists!") {
        return;
        }
        const status = validateFormInputs();
        //if error found
        if (status) {
        return;
        } else {
        //register user with firebase
        registerUser();
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
    ```


- Problem: How do you add a displayName to a user in Firebase?
 - Solution: 
    - I made a seperate function called updateUsername that utilized the updateProfile function from Firebase.  At first I tried to combine this functionality inside the try/catch block inside of the registerUser function but I figured out that I kept getting an error, becasue if the user tried to register with an already registered email I was then trying to update the profile of a user that didnt exist.  To remedy this I added another try catch block inside of the updateUsername function so that I was only updating the profile of an existing user.

  In login.js

   ```
     const updateUsername = async (userInfo) => {
    console.log(userInfo);
    try {
      await updateProfile(userInfo.user, { displayName: username });
      setUser({ ...userInfo.user });
      router.replace("/clients");
    } catch (error) {
      console.log(error.message);
    }
  };
   ```

        

### Continued Development



## Author

- Portfolio - [https://natashajohnson.dev/](https://natashajohnson.dev/)