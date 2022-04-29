
const Footer = () => {

    const getYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    return (
      <footer className="flex justify-center items-center bg-purple-800 text-white h-10 text-center">
        <p>
          Copyright &copy; <span>{getYear()}</span> By:
            <a
              href="https://natashajohnson.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline">
              {" "}
              Natasha Johnson
            </a>
        </p>
      </footer>
    );
}
 
export default Footer;