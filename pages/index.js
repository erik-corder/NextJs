import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("./product");
    // router.replace("./product");
  };

  return (
    <div>
      <h1>Home page</h1>
      {/* client side navigation  */}
      <Link href="/blog">
        <button>blog</button>
      </Link>
      <Link href="/product">
        <button>Product</button>
      </Link>

      {/* programmatically navigation */}
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
