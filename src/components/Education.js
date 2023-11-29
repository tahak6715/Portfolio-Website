import { useScroll,motion } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({position,company,companyLink,time,addredd,work}) => {
    const ref = useRef(null);
    return(
        <>
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;<br/><a className='capitalize text-primary capi' href={companyLink}>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {addredd}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
        </>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })


  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position={`Fsc Pre-Engineering`} company={`S.M Govt Science College`} time={`2019-2021`}  work={`I pursued my FSc from SM Government Science College from 2019 to 2021.




`}/>
                <Details position={`Bachelors of Computer Science`} company={`Dawood University of Engineering & Technology`} time={`2021-still`} addredd={`Gulshan-e-Hadeed, Karachi`} work={`Currently, I am pursuing a Bachelor of Computer Science degree.




`}/>
                

            </ul>

        </div>



    </div>
  )
}

export default Education