import Head from 'next/head'
import React from 'react'
import Footer from './footer'
import Header from './header'


const Layout = (props: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>NRC</title>
        <link rel="icon" href="/images/newLogo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.4.0/css/all.min.css" integrity="sha512-eBNnVs5xPOVglLWDGXyZnZZ2K2ixXhR/3aECgCpFnW2dGCd/yiqXZ6fcB3BubeA91kM6NX234b6Wrah8RiYAPA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600&display=swap" rel="stylesheet"></link>

      </Head>
      <main className='min-h-screen mx-auto'>
        <Header {...props} />
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
