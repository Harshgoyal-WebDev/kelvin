import Loader from "@/components/section/Loader";
import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  
   
  return (
  <>
   <Head>
        <title>Kelvin-Zero</title>
        <link rel="shortcut icon" href="/favicon.ico" /> 
        <meta property="og:title" content="Kelvin-Zero" key="title" />
        <meta property="og:description" content="Protect your organization with next-gen passwordless authentication." key="description"/>
    </Head>
  <ReactLenis root duration={1}>
    
  <Component {...pageProps} /></ReactLenis> </>);
}
