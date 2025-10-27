import React from 'react'
import { Link, Edit, ChevronDown, CheckCircle, Repeat, Globe, ListOrdered } from 'lucide-react'

function FeatureItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="w-5 h-5 text-green-500" />
      <span>{text}</span>
    </div>
  )
}

function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column */}
        <div className="p-8 bg-white rounded-xl shadow-2xl text-gray-900">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Link className="w-5 h-5 mr-3 text-green-600" /> Shorten a long URL
          </h2>

          <div className="space-y-6">
            {/* URL Input */}
            <input
              type="url"
              placeholder="Enter long link here"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />

            {/* Custom Alias */}
            <div className="pt-2">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Edit className="w-4 h-4 mr-2 text-gray-500" /> Customize your link
              </h3>

              <div className="flex rounded-lg shadow-sm">
                <div className="flex items-center bg-gray-100 border border-gray-300 text-gray-600 rounded-l-lg p-3">
                  <span className="font-mono">tinyurl.com</span>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </div>
                <input
                  type="text"
                  placeholder="Enter alias"
                  className="flex-1 p-3 border-t border-r border-b border-gray-300 rounded-r-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 w-full bg-green-600 text-white font-semibold py-3 rounded-lg text-lg hover:bg-green-700 transition duration-200 shadow-md shadow-green-700/50">
            Shorten URL
          </button>

          {/* Legal Text */}
          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            By clicking Shorten URL, I agree to the <a href="#" className="underline hover:text-green-600">Terms of Service</a>, <a href="#" className="underline hover:text-green-600">Privacy Policy</a> and use of <a href="#" className="underline hover:text-green-600">Cookies</a>.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-white pt-4 lg:pt-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            The Original URL Shortener
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Create shorter URLs with TinyURL.
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-lg">
            Want more out of your link shortener? Track link analytics, use branded domains for fully custom links, and manage your links with our paid plans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#10344d] transition duration-200 shadow-lg">
              View Plans
            </button>
            <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 shadow-lg shadow-green-700/50">
              Create Free Account
            </button>
          </div>

          {/* Features */}
          <h3 className="text-xl font-bold mb-4">TinyURL plans include:</h3>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <FeatureItem icon={CheckCircle} text="Detailed Link Analytics" />
            <FeatureItem icon={Repeat} text="Bulk Short URLs" />
            <FeatureItem icon={Globe} text="Fully Branded Domains" />
            <FeatureItem icon={ListOrdered} text="Link Management Features" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
