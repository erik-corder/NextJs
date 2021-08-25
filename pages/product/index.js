/*http://localhost:3000/product*/
import Link from "next/link";
import React from "react";

const index = ({ productId = 100 }) => {
  return (
    <>
      <Link href="/">
        <button>Home</button>
      </Link>
      {/* dynamic route link */}
      <Link href="./product/1">
        <h2 style={{ cursor: "pointer" }}>Product 1</h2>
      </Link>
      <Link href="./product/2">
        <h2 style={{ cursor: "pointer" }}>Product 2</h2>
      </Link>
      <Link href="./product/3">
        <h2 style={{ cursor: "pointer" }}>Product 3</h2>
      </Link>
      <Link href={`./product/${productId}`}>
        <h2 style={{ cursor: "pointer" }}>Product {productId}</h2>
      </Link>
    </>
  );
};

export default index;
