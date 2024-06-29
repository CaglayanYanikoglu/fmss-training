import moduleStyle from './page.module.scss';
import ProductItem from './ProductItem';

const fetchProducts = async () => {
  await new Promise(r => setTimeout(r, 2000));
  const res = await fetch('https://fakestoreapi.com/products')
  const resData = await res.json();
  return resData;
}

export default async function Products() {
  const data = await fetchProducts();
  return (
    <div className={moduleStyle.main}>
      <div>Filter Part</div>
      <div className={moduleStyle.products}>
        {data.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}