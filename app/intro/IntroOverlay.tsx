'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const [showFill, setShowFill] = useState(false);

  useEffect(() => {
    let delayTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    let fillTimer: NodeJS.Timeout;
    if (show) {
      document.body.style.overflow = 'hidden';
      delayTimer = setTimeout(() => {
        setStartAnimation(true);
        fillTimer = setTimeout(() => {
          setShowFill(true);
        }, 4000); // El relleno aparece después de 4s
        hideTimer = setTimeout(() => {
          setShow(false);
          document.body.style.overflow = '';
        }, 8000); // 7s de animación
      }, 2000); // 2s de delay
    }
    return () => {
      clearTimeout(delayTimer);
      clearTimeout(hideTimer);
      clearTimeout(fillTimer);
      document.body.style.overflow = '';
    };
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
            style={{objectFit:'cover', animation: startAnimation ? 'bgZoomIn 4s ease-in-out 1 forwards' : 'none'}}
            priority
          />
          <Image
            src="/images/after.png"
            alt="after"
            fill
            style={{objectFit:'cover', animation: startAnimation ? 'bgZoomOut 4s ease-in-out 1 forwards' : 'none', zIndex:1}}
            priority
          />
        </div>
        {/* SVG animado inline */}
        {startAnimation && (
          <div className="title" style={{zIndex:2, position:'relative'}}>
            <svg width="223" height="185" viewBox="0 0 223 185" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SOLO paths con fill llevan la animación de opacidad */}
              <path d="M93.506 20.6799C100.247 24.8829 109.816 35.8808 127.006 55.1799C123.702 56.0285 115.555 60.1442 107.006 65.6799C89.006 58.6799 77.506 61.1799 73.006 66.6799C67.2914 60.9076 64.7292 58.2286 61.506 52.6799C74.1533 39.1502 81.006 31.1799 93.506 20.6799Z" fill="#CD9D62" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              <path d="M128.006 30.6799C132.573 26.1211 135.139 23.5375 139.356 20.83C142.533 23.231 146.051 27.0026 153.006 34.6799L162.706 46.2399C152.352 44.3085 144.694 46.6449 129.506 53.6299L118.066 40.7799L128.006 30.6799Z" fill="#CABC9C" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              <path d="M136.006 53.6799C149.239 48.7669 155.891 47.5909 163.606 49.5299C159.357 56.5565 156.52 60.3799 150.406 66.9299L128.006 74.1799L110.506 66.6799C120.451 61.2446 126.034 58.3768 136.006 53.6799Z" fill="#028F32" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              <path d="M75.006 68.6799C84.197 59.8126 98.1681 64.7396 125.006 75.6799C103.423 85.4482 95.1787 88.6362 92.506 87.1799L75.006 68.6799Z" fill="#38AA33" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              <path d="M147.406 70.0499L111.506 106.68C106.987 101.907 103.115 97.9858 100.253 95.0884C97.9573 92.7641 96.3122 91.0985 95.506 90.1799C107.2 86.5838 114.181 83.9272 129.006 77.1799C129.517 76.9752 130.519 76.3751 131.006 76.1799C139.315 72.8741 143.316 70.858 147.406 70.0499Z" fill="#9AC410" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              <path d="M112.506 14.18C123.281 3.95027 137.735 -1.25138 150.506 6.67997C168.006 15.6799 169.006 38.4799 165.506 44.9799C153.239 30.5517 143.695 19.4797 140.006 17.7799C137.006 17.1799 134.506 21.1799 116.006 38.18C116.006 38.18 96.5059 16.6799 93.5559 17.9799C88.7816 17.9799 60.006 49.9799 60.006 49.9799C44.835 23.8909 78.8678 -12.8232 112.506 14.18Z" fill="#A7DDF0" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              {/* paths de stroke animados igual que antes, sin clases de opacidad de fill */}
              <path d="M60.2496 51.9622C60.2496 51.9622 89.7494 19.4623 93.7494 19.4623C97.7495 19.4623 128.279 54.4632 128.279 54.4632" stroke="#325180" strokeWidth="3" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M116.351 40.4304C116.351 40.4304 136.392 19.5446 139.321 19.2533C142.25 18.962 165.25 46.9623 165.25 46.9623" stroke="#325180" strokeWidth="3" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M165.375 48.4463C151.542 44.31 137.75 49.9622 106.75 66.9623" stroke="#325180" strokeWidth="3" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M73.7496 67.9622C81.2495 58.9622 99.0381 62.3313 126.75 74.9622" stroke="#325180" strokeWidth="3" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M150.25 68.4622C143.761 66.1921 100.25 91.4622 93.2496 88.4622" stroke="#325180" strokeWidth="3" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M168.006 35.0234C171.506 54.0235 144.006 74.0235 111.506 108.523" stroke="#325180" strokeWidth="4" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M162.25 16.2063C165.138 21.0692 166.146 23.9347 167.25 29.2063" stroke="#B74043" strokeWidth="4" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <line x1="158.078" y1="9.96222" x2="159.25" y2="11.1338" stroke="#B74043" strokeWidth="4" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M111.506 108.523C97.006 93.6799 85.506 81.6799 71.7497 67.4622C60.2496 56.3586 54.6705 45.3796 54.7497 35.9622C54.9433 12.9362 85.7496 -10.5378 112.25 12.9622" stroke="#325180" strokeWidth="4" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M112.25 12.9622C121.75 2.46225 142.544 -1.82156 152.506 6.67993" stroke="#325180" strokeWidth="4" strokeLinecap="round" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M47.6846 143.184C47.6846 146.961 46.3597 149.88 43.71 151.938C41.0602 153.979 37.2736 155 32.3501 155H14.7866V116.489H31.1416C41.3646 116.489 46.4761 119.596 46.4761 125.808C46.4761 127.151 46.1538 128.386 45.5093 129.514C44.8647 130.624 43.88 131.6 42.5552 132.441C41.2482 133.283 39.807 133.856 38.2314 134.16V134.268C40.0576 134.482 41.6958 135.028 43.146 135.906C44.5962 136.765 45.7152 137.848 46.5029 139.155C47.2907 140.444 47.6846 141.787 47.6846 143.184ZM34.1494 127.822C34.1494 125.441 32.2785 124.25 28.5366 124.25H26.3882V131.528H29.7451C31.0342 131.528 32.0905 131.188 32.9141 130.508C33.7376 129.81 34.1494 128.914 34.1494 127.822ZM35.3579 143.13C35.3579 142.02 34.9551 141.107 34.1494 140.391C33.3438 139.674 32.2785 139.316 30.9536 139.316H26.3882V147.185H30.2554C31.8309 147.185 33.0752 146.827 33.9883 146.111C34.9014 145.377 35.3579 144.383 35.3579 143.13ZM76.957 155L75.2651 147.91H63.771L61.9448 155H49.4033L62.6699 116.489H77.0645L89.5522 155H76.957ZM69.6523 124.868H69.3838C69.348 125.298 69.2227 126.005 69.0078 126.99C68.793 127.974 67.7098 132.2 65.7583 139.666H73.1167L70.4312 129.192C70.0552 127.652 69.7956 126.211 69.6523 124.868ZM106.82 145.923H124.223V155H91.9155V146.863L109.694 125.566H93.0166V116.489H123.659V124.573L106.82 145.923ZM153.495 155L151.803 147.91H140.309L138.483 155H125.941L139.208 116.489H153.603L166.09 155H153.495ZM146.19 124.868H145.922C145.886 125.298 145.761 126.005 145.546 126.99C145.331 127.974 144.248 132.2 142.296 139.666H149.655L146.969 129.192C146.593 127.652 146.334 126.211 146.19 124.868ZM190.583 155L187.709 146.702C187.154 145.072 186.429 143.792 185.534 142.861C184.656 141.93 183.699 141.465 182.66 141.465H182.204V155H170.602V116.489H186.017C191.406 116.489 195.381 117.375 197.941 119.148C200.519 120.903 201.808 123.543 201.808 127.07C201.808 129.72 201.056 131.94 199.552 133.73C198.066 135.521 195.846 136.819 192.892 137.625V137.732C194.521 138.233 195.873 139.048 196.947 140.176C198.039 141.304 199.015 142.978 199.875 145.198L203.661 155H190.583ZM189.481 128.708C189.481 127.419 189.088 126.399 188.3 125.647C187.512 124.895 186.277 124.519 184.594 124.519H182.204V133.328H184.298C185.856 133.328 187.109 132.889 188.058 132.012C189.007 131.134 189.481 130.033 189.481 128.708Z" fill="#2C456B" className={`svg-anim ${showFill ? 'svg-fill-visible' : 'svg-fill-hidden'} ${startAnimation ? '' : 'svg-fill-initial'}`}/>
              <path d="M0.969482 170.75H14.5" stroke="#325180" strokeWidth="5" className={startAnimation ? 'svg-path-anim' : ''}/>
              <path d="M209 171H222.531" stroke="#325180" strokeWidth="5" className={startAnimation ? 'svg-path-anim' : ''}/>
            </svg>
          </div>
        )}
        <style jsx global>{`
          @keyframes bgZoomIn {
            from { transform: scale(1.2); }
            to { transform: scale(1); }
          }
          @keyframes bgZoomOut {
            from { transform: scale(1); }
            to { transform: scale(2); }
          }
          .svg-path-anim {
            stroke-dasharray: 2000;
            stroke-dashoffset: 2000;
            animation: textAnimation 4s ease-in-out 1 forwards;
            transition: fill-opacity 0.5s;
          }
          .svg-fill-hidden {
            fill-opacity: 0;
            transition: fill-opacity 300ms;
          }
          .svg-fill-visible {
            fill-opacity: 1;
            transition: fill-opacity 300ms;
          }
          .svg-fill-initial {
            transition: none;
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