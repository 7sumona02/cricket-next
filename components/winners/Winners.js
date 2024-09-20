import React from 'react'
import styles from './style.module.css';
import CardStack from './cardstack/Card';

const Winners = () => {
  return (
    <div className='h-screen w-full justify-start'>
      <div className='text-7xl ml-32 mt-[15vh]'><h1>PAST<br/> TOURNAMENT<br/>WINNERS</h1></div>
      <CardStack />
    </div>
  )
}

export default Winners
