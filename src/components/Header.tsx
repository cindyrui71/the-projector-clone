import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 header-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              THE PROJECTOR
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="group relative">
                <Link to="/films" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Films & Events
                </Link>
              </div>
              <div className="group relative">
                <Link to="/locations" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Locations
                </Link>
              </div>
              <div className="group relative">
                <Link to="/bar" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Bar
                </Link>
              </div>
              <div className="group relative">
                <Link to="/venue-hire" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Venue Hire
                </Link>
              </div>
              <div className="group relative">
                <Link to="/membership" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                  Membership & Gifts
                </Link>
              </div>
              <Link to="/faq" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                FAQ
              </Link>
            </div>
          </nav>

          {/* Search Icon */}
          <div className="hidden md:block">
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/films" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Films & Events</Link>
            <Link to="/locations" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Locations</Link>
            <Link to="/bar" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Bar</Link>
            <Link to="/venue-hire" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Venue Hire</Link>
            <Link to="/membership" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Membership & Gifts</Link>
            <Link to="/faq" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">FAQ</Link>
          </div>
        </div>
      )}
    </header>
  )
}
