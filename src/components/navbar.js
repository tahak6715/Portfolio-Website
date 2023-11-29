import Link from 'next/link';
import React from 'react'
import Logoa from './logo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import TwitterIcon, { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcona } from './icons';

const Navbar = () => {

    const CustomLink = ({href, title, className=""}) => {

        const router = useRouter();
        console.log(router)
        return(
            <>
            <Link href={href} className={`${className} relative group`} >{title}
            <span className={`h-[3px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                </span>
            
            </Link>

            
            </>
        )

    }
  return (

    <>
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>

        <nav>
            <CustomLink href="/" title="Home" className='mr-4'/>
            <CustomLink href="/about" title="About" className='mx-4'/>
            <CustomLink href="/projects" title="Projects" className='mx-4'/>
            <CustomLink href="/articles" title="Articles" className='ml-4'/>
            
        </nav>

        

        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a className='w-6 mx-3' href="https://github.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale: 0.9}}><GithubIcon/></motion.a>
            <motion.a className='w-6 mx-3' href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale: 0.9}}><TwitterIcona/></motion.a>
            <motion.a className='w-6 mx-3' href="https://linkedin.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale: 0.9}}><LinkedInIcon/></motion.a>
            <motion.a className='w-6 mx-3' href="https://dribble.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale: 0.9}}><DribbbleIcon/></motion.a>
            <motion.a className='w-6 mx-3' href="https://pinterest.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale: 0.9}}><PinterestIcon/></motion.a>
            
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>

            <Logoa/>

            


        </div>


    </header>
    
    </>
  )
}

export default Navbar;