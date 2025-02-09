import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import About from "./components/About";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
            <Slider />
            <ProductList />         
            </>
          }
          />
          <Route path="/about" element={
            <><div style={{ "margin-top": "200px" }} /><About /></>
          } />
          <Route path="/product/:productID" element={<ProductDetails />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App;
