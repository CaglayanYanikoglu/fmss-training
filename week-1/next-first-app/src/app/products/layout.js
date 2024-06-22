
export const metadata = {
  title: "Products",
  description: "products list",
};

export default function ProductLayout({ children }) {
  return (
    <div>
      <h1>Products Layout</h1>
      {children}
    </div>
  );
}
