import React from 'react'
import { motion } from 'framer-motion'

const Skilly = ({name, x ,y}) => {
    return(
    <>
    <motion.div whileHover={{scale:1.09}} initial={{x:0,y:0}} whileInView={{x:x,y:y}} transition={{duration:1.5}} className='bg-dark text-light flex justify-center items-center  py-3 px-6 absolute text-medium -py-2 rounded-full font-semibold shadow-dark'>
            {name}
        </motion.div>

    </>
    )

}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>
        Skills
    </h2>
    <div className='w-full h-screen relative flex text-center justify-center rounded-full bg-circularLighta'>
        <motion.div whileHover={{scale:1.09}} className=' flex justify-center items-center  text-4xl  rounded-full font-bold shadow-dark'>
            Web
        </motion.div>
        <Skilly name="HTML" x="-3vw" y="8vw"/>
        <Skilly name="CSS" x="18vw" y="15vw"/>
        <Skilly name="Javascript" x="25vw" y="25vw"/>
        <Skilly name="React JS" x="-20vw" y="25vw"/>
        <Skilly name="Next JS" x="3vw" y="33vw"/>
        <Skilly name="Node JS" x="-20vw" y="4vw"/>
        <Skilly name="Firebase" x="15vw" y="4vw"/>
        <Skilly name="Tailwind CSS" x="20vw" y="40vw"/>
        <Skilly name="Material UI" x="-20vw" y="40vw"/>

    </div>
    </>
  )
}

export default Skills