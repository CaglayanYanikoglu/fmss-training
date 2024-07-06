import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function AddProduct() {
  async function createProduct(formData) {
    "use server"
    console.log(formData.get('title'));
    const params = {
      title: formData.get('title'),
      price: formData.get('price'),
      image: formData.get('image'),
    }

    const res = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params)
    })

    const resData = await res.json();
    console.log(resData);
    if (resData.success) {
      revalidateTag('products')
      // revalidatePath('/products');
      redirect('/products');
    }
  }

  return (
    <div>
      <h2>Add Product</h2>
      <form action={createProduct}>
        <div>
          <label>Title</label>
          <input name="title" type="text" />
        </div>
        <div>
          <label>Price</label>
          <input name="price" type="text" />
        </div>
        <div>
          <label>Image</label>
          <input name="image" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}