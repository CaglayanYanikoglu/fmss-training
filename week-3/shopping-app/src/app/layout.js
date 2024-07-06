import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <a href="/products">Products</a>         */}
        <div className={styles.navMenu}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/add-product">Add Product</Link>
        </div>
        {children}
      </body>
    </html>
  );
}