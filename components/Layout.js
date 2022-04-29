import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main className="h-[calc(100vh-64px-40px)]">{children}</main>
        <Footer />
      </>
    );
}
 
export default Layout;