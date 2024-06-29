// "use client"

// import { useParams } from "next/navigation";

import User from "./user";
import ProductComponent from "./product";
import { Suspense } from "react";

export default function Product({
  params
}) {
  console.log(params);
  // const params = useParams(); // For client side rendering
  return (
    <div>
      <Suspense fallback={<p>Loading product...</p>}>
        <ProductComponent params={params} />
      </Suspense>
      <Suspense fallback={<p>User loading...</p>}>
        <User />
      </Suspense>
    </div>
  )
}