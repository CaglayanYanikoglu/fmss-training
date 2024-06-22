import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='products'>
          {data.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.image} width={100} />
              <p>{product.title}</p>
              <span><b>{product.category}</b></span>
              <span>{product.price}$</span>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
