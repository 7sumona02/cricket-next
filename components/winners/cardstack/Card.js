'use client';
import Card from './card/Card';
import styles from './style.module.css'
import { projects } from './data.js';

export default function CardStack() {
  return (
    <main className={styles.main}>
      {
        projects.map( (project, i) => {
          return <Card key={`p_${i}`} {...project} i={i}/>
        })
      }
    </main>
  )
}