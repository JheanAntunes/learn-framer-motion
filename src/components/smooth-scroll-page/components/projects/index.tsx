'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const imageContainer = useRef<HTMLDivElement>(null)
  const projects = [
    { title: 'Salar de atacama', src: 'salar_de_atacama.jpg' },
    { title: 'Valle de la luna', src: 'valle_de_la_muerte.jpeg' },
    { title: 'Miscanti Lake', src: 'miscani_lake.jpeg' },
    { title: 'Miniques Lagoons', src: 'miniques_lagoon.jpg' }
  ]
  const src = `/${projects[selectedProject].src}`
  const alt = projects[selectedProject].title
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: '-100px',
      end: document.body.offsetHeight,
      pin: true,
      markers: true
    })
  }, [])
  return (
    <div className="projects mt-[25vh] flex flex-col text-neutral-50">
      <div className="projectDescription flex h-[700px] w-full justify-between gap-14">
        <div
          ref={imageContainer}
          className="imageContainer relative h-full w-2/5"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
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
