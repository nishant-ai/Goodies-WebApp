import "./Home.css";

// Components
import Navbar from "../../Components/Navbar/Navbar";
import Head from "../../Components/Head/Head";
import Products from "../../Components/Products/Products";
import Team from "../../Components/Team/Team";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Head />
      <Products />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
