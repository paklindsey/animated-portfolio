import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/parallax";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Sidebar />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
