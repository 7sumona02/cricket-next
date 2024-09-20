import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Rounded from '../../common/RoundedButton';

const projects = [
    {
        title: "T20 Tournaments",
        src: "t20.jpg"
    },
    {
        title: "One-Day Tournaments",
        src: "one.jpg"
    },
    {
        title: "Test Tournaments",
        src: "test.jpg"
    },
]

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useGSAP( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: "bottom+=180px",
        })
    }, [])

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>Explore Our Tournament Formats</p>
                </div>
                <div className={styles.column}>
                    <p>Cricket Elite offers a diverse range of cricket tournaments to cater to players of all skill levels and preferences.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>

            <div className='flex justify-center mt-20'>
            <Rounded>
                <p><a href="/register">Register</a></p>
            </Rounded>
            </div>
        </div>
    )
}
