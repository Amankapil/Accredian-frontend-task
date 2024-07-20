import React from 'react'
import { Button } from '@mui/material'

import img from './assets/hero.png'
const HeroSection = ({ openModal }) => {
  //   return (
  //     <div className='hero-section bg-blue-500 text-white text-center py-20'>
  //       <h1 className='text-4xl font-bold mb-4'>Refer & Earn</h1>
  //       <p className='text-xl mb-6'>Refer your friends and earn rewards!</p>
  //       <Button variant='contained' color='secondary' onClick={openModal}>
  //         Refer Now
  //       </Button>
  //     </div>
  //   )
  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-white'>
      <header className='w-full bg-white  max-w-7xl mx-auto'>
        <div className='container flex items-center justify-between px-4 py-4 mx-auto md:px-6'>
          <div className='flex items-center space-x-4'>
            {/* <img src='/placeholder.svg' alt='Logo' className='h-10' />? */}
            <h1 className='text-[25px] font-semibold'>ACCERDIAN</h1>
            <button className='px-4 py-2 text-white bg-blue-500 rounded'>
              Courses
            </button>
          </div>
          <div className='flex items-center space-x-4'>
            <nav className='hidden md:flex space-x-4'>
              <a href='#' className='text-gray-700'>
                Refer & Earn
              </a>
              <a href='#' className='text-gray-700'>
                Benefits
              </a>
              <a href='#' className='text-gray-700'>
                FAQs
              </a>
              <a href='#' className='text-gray-700'>
                Support
              </a>
            </nav>
            <button className='px-4 py-2 text-blue-500 border border-blue-500 rounded'>
              Login
            </button>
            <button className='px-4 py-2 text-white bg-blue-500 rounded'>
              Try it for free
            </button>
          </div>
        </div>
      </header>
      <main className='flex flex-col items-center w-full flex-1 mt-10'>
        <section className='w-full '>
          <div className='container p-20 flex flexcol items-center py-12  space-y-6 md:py-24 md:space-y-8 bg-[#EEF5FF] max-w-5xl mx-auto shadow '>
            <div className='w-[50%] text-left'>
              <h1 className='text-3xl font-bold text-left md:text-5xl'>
                Let’s Learn & Earn
              </h1>
              <p className='text-lg text-left py-3'>
                Get a chance to win up to Rs. 15,000
              </p>
              <button
                onClick={openModal}
                className='px-6 py-3 text-white bg-blue-500 rounded'
              >
                Refer Now
              </button>
            </div>

            <div className='w-[50%]'>
              <img src={img} alt='App screenshot' className='mt-6' />
            </div>
          </div>
        </section>
        <section className='w-full bg-blue-50  mt-10'>
          <div className='container py-12 mx-auto md:py-24 max-w-6xl'>
            <h2 className='text-2xl font-bold text-center md:text-4xl'>
              How Do I Refer?
            </h2>
            <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-3'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-blue-500 rounded-full' />
                <h3 className='mt-4 text-lg font-semibold'>Invite Friends</h3>
                <p className='mt-2 text-center text-gray-600'>
                  Share your unique referral link with friends.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-blue-500 rounded-full' />
                <h3 className='mt-4 text-lg font-semibold'>They Signup</h3>
                <p className='mt-2 text-center text-gray-600'>
                  Your friends sign up using your referral link.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 bg-blue-500 rounded-full' />
                <h3 className='mt-4 text-lg font-semibold'>Earn Rewards</h3>
                <p className='mt-2 text-center text-gray-600'>
                  You both earn rewards when they complete tasks.
                </p>
              </div>
            </div>
            <button
              onClick={openModal}
              className='px-6 py-3 mt-8 text-white bg-blue-500 rounded mx-auto block'
            >
              Refer Now
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
export default HeroSection
