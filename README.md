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

I learned the differences between React and Next.Js.  This website was initially build with html, sass, and javascript.  To facilitate scaling, I decided to build the rebranded site in React.  I then learned that when you build a site with React its actually bad for SEO, so I started to look into Next.Js.  I noticed that there were quite a few similarities between the two so I decided to rebuild the site yet again, but this time with Next.Js. 

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