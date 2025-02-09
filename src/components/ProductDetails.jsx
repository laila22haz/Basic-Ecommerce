import react, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({})
  const api = "https://fakestoreapi.com/products";
  
  useEffect(() =>{
    fetch(`${api}/${params.productID}`)
    .then((data) => data.json())
    .then((product) => setProduct(product));
  }, [])
  return (
    <>
    <div style={{ marginTop: '200px' }}>
        <Product product={product} showButton={true}/>
    </div>
    </>
  );
}

export default ProductDetails;