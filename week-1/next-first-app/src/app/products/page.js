const fetchProducts = async () => {
  await new Promise(r => setTimeout(r, 2000));
  const res = await fetch('https://fakestoreapi.com/products');
  const resData = await res.json();

  return resData;
};

const Products = async () => {
  let data = await fetchProducts();

  return (
    <div>
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
    </div>
  )
};

export default Products;