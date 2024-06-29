import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

const ProductItem = ({
  product
}) => {
  return (
    <div className={styles.product}>
      <Image src={product.image} width={100} height={100} />
      <div>
        <Link href={`/products/${product.id}`}>{product.title}</Link>
        <p>{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductItem;
