This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

`Pre-rendering & Data Fetching Intro
    a.	Type of pre-rendering
        i.	Static Generation
            1.	Without data
            2.	With data
            3.	Incremental static generation
            4.	Dynamic parameters when fetching data
        ii.	Server-side rendering
            1.	Data-fetching
    b.	Client side data fetching
    c.	Combining pre-rendering with client side data fetching

What is Pre - Rendering?
	By default, NextJs pre renders every page in the application
NextJs generates HTML for each page in advance instead of having it all done by client-side java-script
 
Pre-render just means render in advance of sending it to the browser.

Nextjs default pre-rendering

Why pre-render?
    1.	Pre-rendering improve performance
        a.	In a React app, you need to wait for the JavaScript to be executed.
        b.	Perhaps fetch data from an external API and then render the UI.
        c.	There is a wait time for the user
        d.	With a pre-rendered page, the HTML is already generated and load faster
    2.	Pre-rendering helps with SEO
        a.	If you are building a blog or an e-commerce site, SEO is a concern
        b.	With a React app, if the Search engine hits your page it only sees a div tag with id equal to root.
        c.	If Search engine hits a pre-rendered page though, all the content is present in the source code which will help index that page
        d.	If SEO Is of concern for your app, pre-rendering is what you want
`
