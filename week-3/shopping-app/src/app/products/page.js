import Image from "next/image";

const fetchProducts = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    next: {
      tags: [
        'products'
      ]
    }
  });
  /* const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store'
  }); */
  /* const res = await fetch('http://localhost:3000/api/products', {
    next: { revalidate: 0 }
  }); */
  const resData = await res.json();
  return resData;
}

export default async function Products() {
  const data = await fetchProducts();
  return (
    <div>
      <h2>Products</h2>
      {data.map(product => (
        <div key={product.title}>
          {/* <Image src="/dog.jpeg" width={200} height={200} /> */}
          <Image src={product.image} width={200} height={200} />
          <p>{product.title}</p>
          <p>{product.price} $</p>
        </div>
      ))}
    </div>
  )
}