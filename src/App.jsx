import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
  });

  useGSAP(()=> {
    gsap.to('#blue-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      ease: 'back.inOut',
      duration: 2
    });
    gsap.from('#red-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      ease: 'back.inOut',
      duration: 2
    });
    gsap.fromTo('#yellow-box', {
      x: 0,
      repeat: -1,
      yoyo: true,
      rotation: 0,
      borderRadius: 8,
      ease: 'back.inOut',
      duration: 2
    },{
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius: 100,
      ease: 'back.inOut',
      duration: 2
    });
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
  },[]);

  return (
    <div className="p-5">
      <h1>gsap.to</h1>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg'/>
      <h1>gsap.from</h1>
      <div id='red-box' className='w-20 h-20 bg-red-500 rounded-lg'/>
      <h1>gsap.fromto</h1>
      <div id='yellow-box' className='w-20 h-20 bg-yellow-500 rounded-lg'/>
      <h1>gsap.timeline</h1>
      <div className='h-40'>
        <div id='green-box' className='w-20 h-20 bg-green-500 rounded-lg'/>
      </div>
      <h1>gsap.</h1>
      <div id='violet-box' className='w-20 h-20 bg-violet-500 rounded-lg'/>
    </div>
  );
};

export default App;