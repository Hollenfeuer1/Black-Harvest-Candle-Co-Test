import React from 'react'
import Footer from './Footer'
import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}
