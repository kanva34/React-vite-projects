import React from 'react'

function Footer() {
  return (
    <footer className="py-4 border-t border-gray-800/50 bg-[#10344d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-sm text-gray-400">
        <p className="w-full text-center sm:w-auto sm:text-left mb-2 sm:mb-0">
          © 2025 TinyURL LLC
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
          <a href="#" className="hover:text-white transition duration-150">Terms</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition duration-150">Privacy Policy</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition duration-150">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
