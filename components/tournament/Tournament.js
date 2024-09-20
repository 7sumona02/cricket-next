'use client'
import { useGSAP } from '@gsap/react';
import { useScroll, useTransform, motion } from 'framer-motion';
// import Picture1 from '../../public/images/1.jpg'
// import Picture2 from '../../public/images/2.jpg'
// import Picture3 from '../../public/images/3.jpg'
import Lenis from 'lenis';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Slide = (props) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  
    return (
      <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
      </motion.div>
    )
  }

  const Phrase = ({src}) => {

    return (
  
      <div className={'px-5 flex gap-5 items-center'}>
  
      <p className='text-[7.5vw]'>Explore Tournaments</p>
  
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
  
          <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
  
      </span>
  
      </div>
  
    )
  
  }

export default function Tournament() {
    
    const container = useRef();

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'end start']

  })

  useGSAP( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className='overflow-hidden'>
      <div className='h-[50vh]'/>
      <Slide src='/images/c3.jpg' direction={'left'} left={"-40%"} progress={scrollYProgress}/>
      <Slide src='/images/c2.jpg' direction={'right'} left={"-25%"} progress={scrollYProgress}/>
      <Slide src='/images/c1.jpg' direction={'left'}  left={"-75%"} progress={scrollYProgress}/>
      
    </main>
  );
}