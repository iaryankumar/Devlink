import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [animateMenu, setAnimateMenu] = useState(false)
  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      setTimeout(() => setAnimateMenu(true), 10)
    } else {
      setAnimateMenu(false)
      setTimeout(() => setIsMenuOpen(false), 300)
    }
  }
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} animateMenu={animateMenu} />
      <section>
      <Hero/>
      </section>
    </>
  )
}

export default Home
