import React from 'react'

const Faq = () => {
  return (
    <>
      <section className='w-full bg-gray-50'>
        <div className='container py-12 mx-auto md:py-24 max-w-6xl'>
          <h2 className='text-2xl font-bold text-center md:text-4xl'>
            Frequently Asked Questions
          </h2>
          <div className='mt-8 space-y-4'>
            <div className='p-4 bg-white border rounded shadow'>
              <h3 className='text-lg font-semibold'>
                How do I refer a friend?
              </h3>
              <p className='mt-2 text-gray-600'>
                You can refer a friend by sharing your unique referral link with
                them.
              </p>
            </div>
            <div className='p-4 bg-white border rounded shadow'>
              <h3 className='text-lg font-semibold'>
                What rewards can I earn?
              </h3>
              <p className='mt-2 text-gray-600'>
                You can earn various rewards such as cash, vouchers, and more.
              </p>
            </div>
            <div className='p-4 bg-white border rounded shadow'>
              <h3 className='text-lg font-semibold'>
                How do I track my referrals?
              </h3>
              <p className='mt-2 text-gray-600'>
                You can track your referrals in the referral section of your
                account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
