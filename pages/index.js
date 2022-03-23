import { getProductsInCollectionFeatured } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import Head from 'next/head'


export default function Home({ products }) {

  return (
    <div className="">
      <Head>
        <title>Black Harvest Candle Co.</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta property="og:title" content="Black Harvest Candle Co." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/BHCC_Logo_Small.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Black Harvest Candle Co." />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollectionFeatured()

  return {
    props: { products }, // will be passed to the page component as props
  }
}