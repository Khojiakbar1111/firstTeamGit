import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
