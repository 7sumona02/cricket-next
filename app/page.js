'use client';
import { useEffect } from 'react';
import styles from './page.module.css'
import Loader from '../components/loader/Loader';
import Description from '../components/description/Description';
import Tournament from '../components/tournament/Tournament';
import Projects from '../components/projects/Projects';
import Winners from '../components/winners/Winners';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main className={`${styles.main} relative`}>
        <Loader />
        {/* <Intro /> */}
        <Description />
        <Tournament />
        <Projects />
        <Winners />
      </main>
  )
}
