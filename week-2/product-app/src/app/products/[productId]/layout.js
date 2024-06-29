

export const metadata = {
  title: "Product",
  description: "Nike product",
};

export default function ProductLayout({ children }) {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
}
