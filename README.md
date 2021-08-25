This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There is a mulitiple routing ways in next js

Routing

1. Routing with pages (http://localhost:3000/about)
2. Nested Routes (http://localhost:3000/product/sweater)
3. Dynamic Routes (http://localhost:3000/product/[:id])
4. Nested dynamic Routes (http://localhost:3000/docs/[:feature1]/[:concept1])
5. Catch all Routes (http://localhost:3000/docs/[:feature1]/[:concept1]/[:feature1])

when cosider folder structure

senario 1
-docs
  --[...params]
then http://localhost:3000/about is 404 error

we can fix it 
-docs
  --[[...params]]
