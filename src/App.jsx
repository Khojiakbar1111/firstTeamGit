import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfoliyo from "./components/portfoliyo/Portfoliyo";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
      <About />
      <Portfoliyo />
      <Footer />
    </div>
  );
}

export default App;
