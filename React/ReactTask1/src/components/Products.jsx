import React, { use, useLayoutEffect, useRef } from 'react'
import InfoCard from './InfoCard'
import DecCard from './DecCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { info } from '../Data/Data';

gsap.registerPlugin(ScrollTrigger);


function Products() {
  const imganim = useRef();
  const featuresTitleRef = useRef();
  const featuresSubTitleRef = useRef();
  const featuresDescRef = useRef();
  const paragraph = useRef();
  const firstpageanim = useRef();
  const containerRef = useRef(null);

  //  useLayoutEffect(() => {
  //   const cards = containerRef.current.children;

  //   gsap.from(cards, {
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.8,
  //     stagger: 0.2,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top 80%", // tweak for earlier/later trigger
  //       end: "bottom 20%",
  //       scrub: false,
  //       markers: true
  //     }
  //   });
  // }, []);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: "body",
        scrub: true,
        start: "top 70%",
        end: "top -10%"
      }
    })
  })

  useGSAP(() => {
    gsap.from(imganim.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: imganim.current,
        scroller: "body",
        scrub: 1,
        start: "top 60%",
        end: "top -10%"
      }
    });
  }, []);
  useGSAP(() => {
    gsap.to(firstpageanim.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: firstpageanim.current,
        scroller: "body",
        scrub: true,
        start: "top 20%",
        end: "top -80%"
      }
    });

  }, []);


  useGSAP(() => {
    gsap.from(featuresTitleRef.current, {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: featuresTitleRef.current,
        scroller: "body",
        scrub: 1,
        start: "top 60%",
        end: "top 50%"
      }
    });
    gsap.from(featuresSubTitleRef.current, {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: featuresSubTitleRef.current,
        scroller: "body",
        scrub: 1,
        start: "top 60%",
        end: "top 50%"
      }
    });

    gsap.from(featuresDescRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: featuresDescRef.current,
        scroller: "body",
        scrub: 1,
        start: "top 80%",
        end: "top 90%"
      }
    });
  }, []);


  useGSAP(() => {
    gsap.fromTo(paragraph.current, {
      y: 100,
      opacity: 0
    },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "bounce.out"

      })
  });
  return (
    <div className='flex flex-col items-center h-fit text-center px-20 pt-30 bg-gray-200 overflow-x-hidden'>
      <div ref={firstpageanim} >

        <h1 className='text-8xl font-bold mb-8'>Think Different</h1>
        <h1 className=' mb-8 text-8xl font-bold bg-gradient-to-r from-[#3f28d4] via-[#9673DC] to-[#3f28d4] bg-clip-text text-transparent' >Build Better</h1>
        <p ref={paragraph} className=' mx-60 mb-20 text-2xl opacity-50'>Experience the perfect blend of innovation and elegance. Our revolutionary platform empowers creators to build extraordinary digital experiences with unparalleled precision and style.</p>
        <div className='flex gap-10 mb-20 justify-center'>
          <button className='transform hover:scale-110 transition duration-300 hover:bg-gradient-to-r from-[#3f28d4] via-[#9673DC] to-[#3f28d4] text-white bg-black  py-5 rounded-2xl w-50  hover:opacity-90'>Learn More <i className="fa-solid fa-arrow-right ml-2"></i></button>
          <button className=' transform hover:scale-110 transition duration-300 text-black bg-white px-6 py-3 rounded-2xl w-50 hover:opacity-90'>Learn More   <i className="fa-solid fa-play text-[#3f28d4] ml-1"></i></button>
        </div>
      </div>

      <div ref={imganim} className='bg-white mt-20 p-1 rounded-3xl relative'>
        <div className='h-30 w-30 rounded-2xl bg-blue-500/20  absolute -top-6 -left-6 backdrop-blur-lg  '></div>
        <img src="/src/assets/Handimg.jpeg" alt="" className='m-3 h-130 w-200 rounded-3xl' />
      </div>

      <div className='py-35'>
        <button className='hover:text-black rounded-2xl px-8 py-3 mb-10 bg-blue-50 text-blue-600 font-bold'>Powerful Features</button>
        <h1 ref={featuresTitleRef} className='text-7xl font-bold'>Everything you need.</h1>
        <h1 ref={featuresSubTitleRef} className='p-4 text-7xl font-bold bg-gradient-to-r from-[#3f28d4] via-[#9673DC] to-[#3f28d4] bg-clip-text text-transparent'>Nothing you don't.</h1>
        <p ref={featuresDescRef} className='mb-20 mx-60 mt-10 leading-10 text-2xl opacity-50'>
          Discover a comprehensive suite of tools designed to streamline your creative process and bring your boldest ideas to life with unprecedented ease, precision, and style.
        </p>
      </div>

      <div ref={containerRef} className='flex gap-10 mb-20 flex-wrap justify-center'>
        {info.map((item) => (
          <InfoCard key={item.id} info={item} />
        ))}
      </div>

      <button className='rounded-2xl px-10 py-4 text-white bg-gradient-to-r from-[#3f28d4] via-[#9673DC] to-[#3f28d4] hover:scale-105 transform duration-500'> Explore All Features <i className="fa-solid fa-arrow-right ml-2"></i></button>
      <p className='p-8 '>✨<span className=' text-black/60'>No credit card required • 14-day free trial • Cancel anytime</span> </p>

      <div className='bg-gradient-to-br from-black via-blue-950 to-black h-fit pb-10 pt-25 w-screen ' >
        <button className='text-white px-5 text-sm py-3 bg-[#242E3B] rounded-2xl font-bold border-amber-100 border-1 hover:scale-105 transform duration-500'> <i className="fa-regular fa-circle-check pr-2"></i> See It In Action</button>
        <h1 className='text-white text-7xl font-bold pt-10'>Crafted for</h1>
        <h1 className='text-7xl font-bold bg-[#AC87FF] pt-3 bg-clip-text text-transparent '>Perfection</h1>
        <p className='text-white/80 text-2xl px-80 pt-15 '>Every pixel matters. Every interaction is thoughtfully designed. Experience the attention to detail that sets exceptional products apart from the ordinary.</p>

        <div className=' flex gap-30  mt-30 mx-10 justify-center'>
          <div className='space-y-10'>
            <DecCard />
          </div>
          <div className='bg-[#30335a] mt-1 p-1 rounded-3xl relative hover:scale-105 transform duration-500 hover:bg-[#443c65]'>
            <div className='h-30 w-30 rounded-2xl bg-blue-500/20  absolute -top-6 -left-6 backdrop-blur-lg  '></div>
            <img src="/src/assets/Handimg.jpeg" alt="" className='m-3 h-100 w-100 rounded-3xl' />
          </div>
        </div>
        <button className='rounded-2xl bg-white bg-gradient-to-r hover:from-[#3f28d4] hover:via-[#9673DC] hover:to-[#3f28d4] hover:scale-105 transform duration-500 hover:text-white px-9 py-3 text-left mt-15' >Learn More</button>

      </div>

    </div>


  )
}

export default Products