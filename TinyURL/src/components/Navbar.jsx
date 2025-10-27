import React, { useState } from 'react'
import { HelpCircle, ChevronDown, Menu } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const NavItem = ({ children }) => (
    <a href="#" className="text-white hover:text-cyan-300 font-medium transition duration-150">
      {children}
    </a>
  )

  return (
    <header className="py-4 shadow-xl border-b border-gray-800/50 bg-[#10344d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-white tracking-wider">
          TINYURL
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <NavItem><HelpCircle className="w-5 h-5 inline-block" /></NavItem>
          <NavItem>My URLs</NavItem>
          <NavItem>Plans</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>
            <span className="flex items-center">
              Features <ChevronDown className="w-4 h-4 ml-1" />
            </span>
          </NavItem>
          <button className="text-white hover:text-cyan-300 font-semibold">Sign Up</button>
          <button className="bg-white text-[#10344d] px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 shadow-md">Sign In</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-white hover:text-cyan-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-2 space-y-3 text-white bg-[#10344d]">
          <NavItem>My URLs</NavItem>
          <NavItem>Plans</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Features</NavItem>
          <button className="block w-full bg-white text-[#10344d] py-2 rounded-lg font-semibold hover:bg-gray-200">Sign In</button>
        </div>
      )}
    </header>
  )
}

export default Navbar
