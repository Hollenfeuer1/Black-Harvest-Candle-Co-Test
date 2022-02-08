import React from 'react';
import Head from 'next/head';
import ShopProductList from '../components/ShopProductList';
import { getAllProducts } from "../lib/shopify"

const shop = ({ products }) => {
    return (
        <div>
            <Head>
            <title>Black Harvest Candle Co. | Shop</title>
            </Head>
            <ShopProductList products={products} />
        </div>
    );
};

export default shop;

export async function getStaticProps() {
    const products = await getAllProducts()
  
    return {
      props: { products }, // will be passed to the page component as props
    }
  }