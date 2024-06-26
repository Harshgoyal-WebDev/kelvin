
import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";
import Head from "next/head";

export default function App({ Component, pageProps }) { 
  return (
  <>
   <Head>
        <title>Kelvin-Zero</title>
        <link rel="shortcut icon" href="/favicon.ico" /> 
        <meta property="og:title" content="Kelvin-Zero" key="title" />
        <meta property="og:description" content="Protect your organization with next-gen passwordless authentication." key="description"/>
        <meta name="description" content="Protect your organization with next-gen passwordless authentication."></meta>
        <link
        rel="preload"
        href="/font/InstrumentSans.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  <ReactLenis root duration={2}>
    
  <Component {...pageProps} /></ReactLenis> </>);
}
