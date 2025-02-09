import Product from "./Product";
import { useState } from "react";
import { useEffect } from "react";

function ProductList() {
    const url_api = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
      fetch(url_api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }

    const getCategories = () => {
      fetch(`${url_api}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
    }

    const getProductsInCategory = (catName) => {
      console.log(catName);
      fetch(`${url_api}/category/${catName}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }


    useEffect(() => {
      getProducts();
      getCategories();
    }, [])
  
  return (
    <>
        <h2 className="text-center p-3">Our Products</h2>
        <div className="container">
        <button onClick={() => {
                  getProducts()
                }} className="btn btn-info">
                  AllProducts
                </button>
          {
            categories.map((cat) => {
              return (
                <button key={cat} onClick={() => {
                  getProductsInCategory(cat)
                }} className="btn btn-info">
                  {cat}
                </button>
              );
            })}


        <div className="row"> 
            {products.map((product) => {
                return (
                    <div className="col-3" key={product.id}>
                        <Product product={product}/>
                    </div>
                );
            })}
        </div>
        </div>
    </>
  )
}

export default ProductList;