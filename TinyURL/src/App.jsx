import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#10344d] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
