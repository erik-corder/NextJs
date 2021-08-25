// http://localhost:3000/product/[:id]
import React from "react";
import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <h1>Product Detail page {productId}</h1>;
};

export default ProductDetail;
