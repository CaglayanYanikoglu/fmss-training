import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Nike Home</h1>
      <Image src={"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/58009243-4900-4f63-bd33-9cced3d445cc/pegasus-41-blueprint-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-lBNjJR.png"}
        	fill={true}
      />
    </main>
  );
}
