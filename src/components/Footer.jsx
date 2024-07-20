import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-black'>
        <div className='container py-12 mx-auto text-white md:py-24 max-w-6xl'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
            <div>
              <h3 className='text-lg font-semibold'>Program</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a href='#' className='text-gray-400'>
                    Overview
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Benefits
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Company</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a href='#' className='text-gray-400'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Press
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Legal</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a href='#' className='text-gray-400'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Contact</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a href='#' className='text-gray-400'>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Support
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-400'>
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
