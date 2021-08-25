This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There is two type Of navigation

1. using Link component navigation
  
  import Link from "next/link";
  
      <Link href="/blog">
        <button>blog</button>
      </Link>
  
  
2. Programitically navigation 
     
  const router = useRouter();

  const handleClick = () => {
    router.push("./product");
    // router.replace("./product");
  };
