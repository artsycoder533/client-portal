import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
    return (
      <header className="h-16 bg-gray-300 text-purple-900 flex items-center ">
        <div className="flex container mx-auto justify-between items-center">
          <div>
            <Link href="/">
              <a className="flex items-center text-4xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                </svg>
                <h1 className="uppercase">Client Portal</h1>
              </a>
            </Link>
          </div>
          <Navbar />
          {/* <div className="">
            <button className="px-4 py-2 border-1 bg-purple-800 text-white">
              Logout
            </button>
          </div> */}
        </div>
      </header>
    );
}
 
export default Header;