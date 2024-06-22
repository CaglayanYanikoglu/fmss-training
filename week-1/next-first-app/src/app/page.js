import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Patika Next.js</p>
      <a href="/products">Products</a>
      <Link href="/products" >Products Link</Link>
    </main>
  );
}
