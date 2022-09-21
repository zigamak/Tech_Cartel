import React from 'react'
import { Button } from '../shared'

export const ConfirmForm = () => {
    const inputWidth = ' w-[425px]'
  return (
    <>
    <form className=' bg-[#FFFFFF] my-[2em] h-[83vh] w-[574px] flex flex-col content-center items-center '>
        <p className=' font-bold mt-[100px] text-[1.5em]'> Check your email</p>
        <p className='mt-[50px] text-[1em]'>You'll receive a link in the email you supplied that will enable you to reset your account password</p>
        <p className='mt-[50px] text-[1em] font-weight: 600'>emailprovided@example.com</p>
        <p className='mt-[50px] text-[1em]'>If you don't see the email, check other places it might be, like your junk, social or other folders</p>
        <Button> Resend email</Button>
        <Button primary addedClasses='mt-[2em]'>Return to home</Button>
    </form>
    </>
  )
}