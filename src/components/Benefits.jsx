import React from 'react'

const Benefits = ({ openModal }) => {
  return (
    <>
      <section className='w-full bg-white'>
        <div className='container py-12 mx-auto md:py-24 max-w-6xl'>
          <h2 className='text-2xl font-bold text-center md:text-4xl'>
            What Are The Referral Benefits?
          </h2>
          <div className='mt-8 overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr>
                  <th className='px-4 py-2 border'>Program</th>
                  <th className='px-4 py-2 border'>Reward</th>
                  <th className='px-4 py-2 border'>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='px-4 py-2 border'>Referral Program 1</td>
                  <td className='px-4 py-2 border'>Rs. 1,000</td>
                  <td className='px-4 py-2 border'>Active</td>
                </tr>
                <tr>
                  <td className='px-4 py-2 border'>Referral Program 2</td>
                  <td className='px-4 py-2 border'>Rs. 2,000</td>
                  <td className='px-4 py-2 border'>Active</td>
                </tr>
                <tr>
                  <td className='px-4 py-2 border'>Referral Program 3</td>
                  <td className='px-4 py-2 border'>Rs. 3,000</td>
                  <td className='px-4 py-2 border'>Active</td>
                </tr>
                <tr>
                  <td className='px-4 py-2 border'>Referral Program 4</td>
                  <td className='px-4 py-2 border'>Rs. 4,000</td>
                  <td className='px-4 py-2 border'>Active</td>
                </tr>
                <tr>
                  <td className='px-4 py-2 border'>Referral Program 5</td>
                  <td className='px-4 py-2 border'>Rs. 5,000</td>
                  <td className='px-4 py-2 border'>Active</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            onClick={openModal}
            className='px-6 py-3 mt-8 text-white bg-blue-500 rounded mx-auto block'
          >
            Refer Now
          </button>
        </div>
      </section>

      <section className='w-full bg-blue-500'>
        <div className='container py-12 mx-auto text-center text-white md:py-24'>
          <h2 className='text-2xl font-bold md:text-4xl'>
            Want to dive deeper into the program?
          </h2>
          <button className='px-6 py-3 mt-6 bg-white text-blue-500 rounded'>
            Learn More
          </button>
        </div>
      </section>
    </>
  )
}

export default Benefits
