import React, { useState } from 'react'
import './App.css'
import ReferralModal from './components/ReferralModal'
import HeroSection from './components/HeroSection'
import Benefits from './components/Benefits'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='App'>
      <ReferralModal isOpen={isModalOpen} closeModal={closeModal} />
      <HeroSection openModal={openModal} />
      <Benefits openModal={openModal} />
      <Faq openModal={openModal} />
      <Footer />
    </div>
  )
}

export default App
