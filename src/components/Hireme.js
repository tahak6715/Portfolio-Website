import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-42 h-auto flex items-center relative'>
            <CircularText className={"animate-spin-slow fill-dark"}/>
            <Link href={""} className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 text-bold text-light bg-dark shadow-md border border-solid border-dark w-20 h-20 rounded-full'>
                Hire me
            </Link>
            
        </div>
    </div>
  )
}

export default Hireme