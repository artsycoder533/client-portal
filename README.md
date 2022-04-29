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

        `<a
              href="https://natashajohnson.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline">
              {" "}
              Natasha Johnson
            </a>`

        

### Continued Development



## Author

- Portfolio - [https://natashajohnson.dev/](https://natashajohnson.dev/)