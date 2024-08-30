import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
      <About />
    </div>
  );
}

export default App;
