import { useRef } from 'react'
import { useInView } from 'framer-motion'
import marsImg from '../img/planet-01.png'
import jupiterImg from '../img/planet-02.png'
import saturnImg from '../img/planet-03.png'

export const usePlanets = () => {
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const inViews = [
    useInView(refs[0], { once: true, margin: "0px 0px -100px 0px" }),
    useInView(refs[1], { once: true, margin: "0px 0px -100px 0px" }),
    useInView(refs[2], { once: true, margin: "0px 0px -100px 0px" })
  ];

   const planetsData = [
    {
      id: 1,
      name: "Mars",
      description: "The Red Planet - our first destination with ideal conditions for establishing a human colony.",
      img: marsImg
    },
    {
      id: 2,
      name: "Jupiter",
      description: "The gas giant with its mesmerizing storms and the largest planetary atmosphere in the Solar System.",
      img: jupiterImg
    },
    {
      id: 3,
      name: "Saturn",
      description: "Famous for its prominent ring system, consisting of nine continuous main rings.",
      img: saturnImg
    }
   ];
  
  const planets = planetsData.map((planet, index) => ({
    ...planet,
    ref: refs[index],
    inView: inViews[index]
  }));

  return { planets };
}

 