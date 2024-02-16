import LoadingSkeleton from "./components/LoadingSkeleton";
import Reserve from "./components/Reserve";
import Slider from "./components/Slider";
import Head from 'next/head'
import { Suspense } from 'react'


export default function Home() {
  return (
    <>
    <main className=""> 
      <Head>
        <title>Vakanties in Drenthe!</title>
        <meta property="og:title" content="Landing page holiday home" key="landing" />
      </Head>  

      <Suspense fallback={<LoadingSkeleton />}>
        <Slider height="60vh"/>
      </Suspense>

      <Suspense fallback={<LoadingSkeleton />}>
        <Reserve />
      </Suspense>

    </main>
    </>
  );
}