'use client'
import { MotionDiv } from '@/components/framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const refGatilho = useRef<HTMLDivElement>(null)
  const projects = [
    { title: 'Salar de atacama', src: 'salar_de_atacama.jpg' },
    { title: 'Valle de la luna', src: 'valle_de_la_muerte.jpeg' },
    { title: 'Miscanti Lake', src: 'miscani_lake.jpeg' },
    { title: 'Miniques Lagoons', src: 'miniques_lagoon.jpg' }
  ]
  const src = `/${projects[selectedProject].src}`
  const alt = projects[selectedProject].title
  const { scrollYProgress } = useScroll({
    target: refGatilho,
    offset: ['start center', 'start start']
  })
  const top = useTransform(scrollYProgress, [0, 1], [0, 700])
  useEffect(() => {
    scrollYProgress.on('change', (progress) => {
      console.log('progress: ', progress)
    })
  }, [scrollYProgress])
  return (
    <div className="projects mt-[25vh] flex flex-col text-neutral-50">
      <div
        ref={refGatilho}
        className="projectDescription flex h-[700px] w-full justify-between gap-14"
      >
        <MotionDiv
          style={{ top }}
          className="imageContainer relative h-full w-2/5"
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </MotionDiv>
        <div className="column w-1/5 text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic
            deserunt libero ipsam officia, dolores blanditiis. Eveniet
            voluptatibus nam sed quod, culpa similique. Dolorem, qui. Sint,
            aliquam ipsa. Porro, aspernatur.
          </p>
        </div>
        <div className="column w-1/5 items-end text-[1vw]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic
            deserunt libero ipsam officia, dolores blanditiis. Eveniet
            voluptatibus nam sed quod, culpa similique. Dolorem, qui. Sint,
            aliquam ipsa. Porro, aspernatur.
          </p>
        </div>
      </div>
      <div className="projectList mt-[200px] flex flex-col">
        {projects.map(({ title }, idx) => {
          return (
            <div
              onMouseOver={() => setSelectedProject(idx)}
              key={`project-${title}`}
              className="projectEl flex justify-end border-t-2 border-solid border-t-neutral-50 text-[3vw]"
            >
              <p className="mb-5 mt-10">{title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
