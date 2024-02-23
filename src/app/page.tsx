import LoadingSkeleton from "./components/LoadingSkeleton";
import Reserve from "./components/Reserve";
import Slider from "./components/Slider";
import { Suspense } from 'react'


export default function Home() {
  return (
    <>
    <main className=""> 
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