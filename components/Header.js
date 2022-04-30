import Navbar from "./Navbar";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../Context";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import {useRouter} from 'next/router';

const Header = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(AuthContext);
  
  const logoutUser = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  
    return (
      <header className="flex items-center h-16 text-purple-900 bg-gray-300 ">
        <div className="container flex items-center justify-between mx-auto">
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
                <h1 className="uppercase">CP</h1>
              </a>
            </Link>
          </div>
          {isLoggedIn ? (
            <>
              <Navbar />
              <div>
                <button
                  className="flex gap-1 px-4 py-2 text-white bg-purple-800 border-1"
                  onClick={logoutUser}>
                  Logout{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </>
          ) : null}
        </div>
      </header>
    );
}
 
export default Header;