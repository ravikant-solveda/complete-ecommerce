import React from 'react'
import Wrapper from '@/components/Wrapper'
import Link from 'next/link'

const Failed = () => {
  return (
    <div className='max-w-[600px] rounded-lg p-5 border border-black mx-auto  flex flex-col'>
        <div className='text-2xl font-bold'>Payment failed</div>
        <div className='text-base mt-5'>For any product related query, drop an email to </div>
        <div className='udnerline'>shoeshopcontact@shop.com</div>
       <Link href='/' className='font-bold mt-5'>
           Continue Shoping
       </Link>
    </div>
  )
}

export default Failed