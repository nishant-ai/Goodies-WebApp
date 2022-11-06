import "./Home.css";

// Components
import Navbar from "../../Components/Navbar/Navbar";
import Head from "../../Components/Head/Head";
import Products from "../../Components/Products/Products";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Head />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
