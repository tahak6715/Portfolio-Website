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

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })


  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position={`Windows & Software Installer`} company={`Khan Computers`} time={`2018-2020`} addredd={`Gulshan-e-Hadeed, Karachi`} work={`As a Windows and software installer at Khan Computers, I gained valuable experience in setting up and configuring various computer systems and software applications. Installing and configuring Windows operating systems on desktops, laptops, and servers. Setting up and configuring various software applications, including Microsoft Office, Adobe Creative Suite, and antivirus software. Troubleshooting software and hardware issues to identify and resolve problems.`}/>
                <Details position={`Frontend Developer`} company={`Freelance`} time={`2021-still`} addredd={`Gulshan-e-Hadeed, Karachi`} work={`Embarking on freelance front-end dev, I dove into diverse projects, mastering communication and adapting to changing tech. Triumphs like site launches and client satisfaction fueled growth, while challenges honed skills in negotiation and time management. Freelancing isn't just a job; it's a lifestyle of constant learning and self-discovery.`}/>
                

            </ul>

        </div>



    </div>
  )
}

export default Experience