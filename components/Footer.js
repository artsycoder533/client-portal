import Link from "next/link";

const Footer = () => {

    const getYear = () => {
        const date = new Date();
        const year = date.getFullYear();
        return year;
    }

    return (
      <footer className="flex justify-center items-center bg-purple-800 text-white h-10">
        <p>
          Copyright &copy; <span>{getYear()}</span> Coded & Created by:
          <Link href="https://natashajohnson.dev/">
            <a className="underline"> Natasha Johnson</a>
          </Link>
        </p>
      </footer>
    );
}
 
export default Footer;