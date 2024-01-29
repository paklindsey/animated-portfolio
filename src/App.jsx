import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Sidebar />
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>services</section>
      <section id="Portfolio">portfolio</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">contact</section>
    </div>
  );
};

export default App;
