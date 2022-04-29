import Link  from "next/link";

const Navbar = () => {
    return (
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/clients">
              <a>Clients</a>
            </Link>
          </li>
          <li>
            <Link href="/add">
              <a>Add</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;