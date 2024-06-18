// import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
  });

  // const scrollRef = useRef();

  useGSAP(() => {

    // gsap.to()
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      ease: 'back.inOut',
      duration: 2
    });

    // gsap.from()
    gsap.from('#red-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      ease: 'back.inOut',
      duration: 2
    });

    // gsap.fromto()
    gsap.fromTo('#yellow-box', {
      x: 0,
      repeat: -1,
      yoyo: true,
      rotation: 0,
      borderRadius: 8,
      ease: 'back.inOut',
      duration: 2
    }, {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius: 100,
      ease: 'back.inOut',
      duration: 2
    });

    // gsap.timeline()
    timeline.to('#green-box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2
    })
    timeline.to('#green-box', {
      y: 100,
      scale: 1, //to resize the mesh
      duration: 2
    })
    timeline.to('#green-box', {
      x: 500,
      rotation: 0,
      borderRadius: 8,
      scale: 1,
      duration: 2
    })

    // gsapstagger()
    gsap.to('#violet-box', {
      y: 100,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      // stagger: 0.5
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        from: 'center'
      }
    })

    // gsapRollTrigger
    // const boxes = gsap.utils.toArray(scrollRef.current.children);
    // boxes.forEach((box) => {
    //   gsap.to(box, {
    //     x: 150,
    //     rotation: 360,
    //     borderRadius: 100,
    //     scale: 1.5,
    //     scrollTrigger: {
    //       trigger: box,
    //       start: 'bottom bottom',
    //       end: 'top 10%',
    //       scrub: true,
    //     },
    //     ease: 'power1.inOut'
    //   })
    // })
    gsap.to('#title', {
      opacity: 1,
      ease: 'power1.inOut',
      y: 0
    }),


    gsap.fromTo('#para', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 1
    })
  }, []);

  return (
    <div className="p-5">
      <h1>gsap.to</h1>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg' />
      <h1>gsap.from</h1>
      <div id='red-box' className='w-20 h-20 bg-red-500 rounded-lg' />
      <h1>gsap.fromto</h1>
      <div id='yellow-box' className='w-20 h-20 bg-yellow-500 rounded-lg' />
      <h1>gsap.timeline</h1>
      <div className='h-40'>
        <div id='green-box' className='w-20 h-20 bg-green-500 rounded-lg' />
      </div>
      <h1>gsap.stagger</h1>
      <div className='flex gap-5 h-56'>
        <div id='violet-box' className='w-20 h-20 bg-violet-200 rounded-lg' />
        <div id='violet-box' className='w-20 h-20 bg-violet-300 rounded-lg' />
        <div id='violet-box' className='w-20 h-20 bg-violet-400 rounded-lg' />
        <div id='violet-box' className='w-20 h-20 bg-violet-500 rounded-lg' />
        <div id='violet-box' className='w-20 h-20 bg-violet-600 rounded-lg' />
      </div>
       <h1 className='h-20'>gsap.scrollTrigger- commented this step</h1>
      {/*<div id='box' className='h-96' ref={scrollRef}>
        <div id='scroll-pink' className='w-20 h-20 bg-pink-500 rounded-lg'></div>
        <div id='scroll-orange' className='w-20 h-20 bg-orange-500 rounded-lg'></div>
      </div> */}
      <h1 className='h-20'>gsap.text</h1>
      <div id='title' className='h-12 text-lg font-bold opacity-0'>GSAPTEXT</div>
      <div id='para' className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore at voluptates, velit dicta qui est voluptatum aliquid facilis eligendi atque vitae accusamus explicabo maxime sequi saepe, nesciunt sunt fugiat odio.</div>
    </div>
  );
};

export default App;