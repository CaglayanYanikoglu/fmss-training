import Image from "next/image";
import styles from '../page.module.scss';
import { notFound } from "next/navigation";

const fetchProduct = async (id) => {
  await new Promise(r => setTimeout(r, 200));
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log('error is catched')
    notFound();
  }
}
export default async function ProductComponent({
  params
}) {
  const product = await fetchProduct(params.productId);

  return (
    <div className={styles.product}>
      <Image src={product.image} width={100} height={100} />
      <div>
        <p>{product.title}</p>
        <p>{product.price}$</p>
      </div>
    </div>
  )
}