'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = '';
      }, 4000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
      }}
    >
      <div className="banner" style={{position:'relative', width:'100vw', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        {/* Fondo animado */}
        <div style={{position:'absolute', inset:0, zIndex:0}}>
          <Image
            src="/images/valentin-petrov-m-mal-01.jpg"
            alt="bg"
            fill
            style={{objectFit:'cover', animation:'bgZoomIn 4s ease-in-out 1 forwards'}}
            priority
          />
          <Image
            src="/images/after.png"
            alt="after"
            fill
            style={{objectFit:'cover', animation:'bgZoomOut 4s ease-in-out 1 forwards', zIndex:1}}
            priority
          />
        </div>
        {/* SVG animado */}
        <div className="title" style={{zIndex:2, position:'relative'}}>
          <Image src="/images/intro-bazaar.svg" alt="Bazaar" width={223} height={185} priority />
        </div>
        <style jsx global>{`
          @keyframes bgZoomIn {
            from { transform: scale(1.2); }
            to { transform: scale(1); }
          }
          @keyframes bgZoomOut {
            from { transform: scale(1); }
            to { transform: scale(2); }
          }
          .banner svg path {
            stroke: #325180;
            stroke-width: 2;
            fill-opacity: 0;
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: textAnimation 4s ease-in-out 1 forwards;
            transition: fill-opacity 0.5s;
          }
          @keyframes textAnimation {
            0% { stroke-dashoffset: 2000; fill-opacity: 0; }
            80% { fill-opacity: 0; }
            100% { stroke-dashoffset: 0; fill-opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
} 