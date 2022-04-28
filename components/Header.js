import Navbar from "./Navbar";

const Header = () => {
    return (
      <header class="h-16 bg-gray-300 text-purple-900 flex justify-between">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <h1>Client Portal</h1>
        </div>
        <Navbar />
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </header>
    );
}
 
export default Header;