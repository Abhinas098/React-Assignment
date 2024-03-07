import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/Header";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/contactUs/ContactUs";
import Home from "./pages/home/Home";
import Offers from "./pages/whatWeOffer/Offer";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="offers">
          <Offers />
        </section>

        <section id="blogs">
          <Blog />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
