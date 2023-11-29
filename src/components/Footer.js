import React from 'react'
import Layout from './layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={"w-full border-t-4 border-solid border-dark font-medium text-lg "}>
    <Layout className={"flex items-center justify-between py-8 "}>
        <span>
            {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        
        <Link className='underline underline-offset-4' href={""}>
        Build with &hearts; Taha khan
        </Link>
        <Link className='underline underline-offset-4' href={""}>
        Say Hello
        </Link>
    </Layout>
    </footer>
  )
}

export default Footer