import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Placeholder components for different pages
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main>
      {/* Fast Booking Section */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Fast Booking</h2>

          <div className="space-y-6">
            {/* Date Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Select a date</h3>
              <div className="flex space-x-2 overflow-x-auto date-selector">
                {['12 Jun, Thu', '13 Jun, Fri', '14 Jun, Sat', '15 Jun, Sun', '16 Jun, Mon', '17 Jun, Tue', '18 Jun, Wed'].map((date) => (
                  <button
                    key={date}
                    className="whitespace-nowrap px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Select a time</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p className="text-sm text-gray-300 mb-4">
                  Only patrons who meet any ONE of the following criteria will be allowed to this screening:
                </p>
                <ul className="text-sm text-gray-300 space-y-1 mb-4">
                  <li>1. Fully vaccinated</li>
                  <li>2. Recovered from COVID-19 within the last 180 days after infection with valid memo.</li>
                  <li>3. Medically ineligible for all COVID-19 vaccines with valid doctor-certified memo.</li>
                  <li>4. Children aged 12 years and below (i.e. born in or after 2010)</li>
                </ul>
                <p className="text-sm text-gray-300">
                  By clicking CONFIRM, you agree that you and all members of your group meet any of the criteria above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Italian Film Festival */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg overflow-hidden">
                <div className="p-8 h-full flex flex-col justify-end bg-black bg-opacity-40">
                  <h3 className="text-2xl font-bold text-white mb-2 cinema-title">ITALIAN FILM FESTIVAL 2025</h3>
                  <p className="text-gray-200 mb-4">
                    From June 7 to 22, the much-anticipated Italian Film Festival 2025 returns to Singapore,
                    organized in collaboration with The Projector and the Singapore Film Society.
                  </p>
                  <button className="btn-secondary">
                    FIND OUT MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Pink Screen */}
            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-gradient-to-r from-pink-900 to-red-900 rounded-lg overflow-hidden">
                <div className="p-8 h-full flex flex-col justify-end bg-black bg-opacity-40">
                  <h3 className="text-2xl font-bold text-white mb-2 cinema-title">PINK SCREEN</h3>
                  <p className="text-gray-200 mb-4">
                    Singapore's largest LGBTQIA+ film festival returns to The Projector from 30 May to 29 June.
                    Kicking off with a premiere of The Wedding Banquet (2025).
                  </p>
                  <button className="btn-secondary">
                    FIND OUT MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Everywhere Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center cinema-title">
            Everything at Everywhere that's happening this week
          </h2>

          {/* Week Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <button
                key={day}
                className={`px-4 py-2 rounded ${
                  day === 'Thu' ? 'bg-white text-black' : 'bg-gray-800 text-white hover:bg-gray-700'
                } transition-colors`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Film Cards Grid */}
          <div className="film-grid">
            {/* Flow */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-blue-400 to-teal-600 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-semibold rounded">Awards Season</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">Projector Exclusive</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Adventure</span>
                  <span className="genre-tag">Animation</span>
                  <span className="genre-tag">Fantasy</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">Flow</h3>
                <p className="text-sm text-gray-300 mb-4">
                  54 wins & 70 Nominations including Winner for Best Animated Feature Film for the 97th Academy Awards.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 13:00
                  </button>
                </div>
              </div>
            </div>

            {/* Universal Language */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-orange-400 to-red-600 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">Projector Exclusive</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Comedy</span>
                  <span className="genre-tag">Drama</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">Universal Language</h3>
                <span className="rating-badge mb-2">PG</span>
                <p className="text-sm text-gray-300 mb-4">
                  2024 Cannes Film Festival winner for Director's Fortnight Audience Award.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 13:10
                  </button>
                </div>
              </div>
            </div>

            {/* Above The Dust */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-gray-600 to-gray-800 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-2 py-1 text-xs font-semibold rounded">Asian Cinema</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">Projector Exclusive</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Drama</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">Above The Dust (沃土)</h3>
                <span className="rating-badge mb-2">M18</span>
                <p className="text-sm text-gray-300 mb-4">
                  2024 Golden Horse Winner & Berlinale Crystal Bear Nominee
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 14:30
                  </button>
                </div>
              </div>
            </div>

            {/* Hard Truths */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-red-500 to-red-700 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">New Release</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Comedy</span>
                  <span className="genre-tag">Drama</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">Hard Truths</h3>
                <span className="rating-badge mb-2">PG13</span>
                <p className="text-sm text-gray-300 mb-4">
                  Pansy is a woman so full of rage that every interaction she has devolves into lashing out.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 17:30
                  </button>
                </div>
              </div>
            </div>

            {/* Hollywoodgate */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-yellow-600 to-orange-700 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">Projector Exclusive</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Documentary</span>
                  <span className="genre-tag">War</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">Hollywoodgate</h3>
                <span className="rating-badge mb-2">M18</span>
                <p className="text-sm text-gray-300 mb-4">
                  Unprecedented and audacious, the riveting result of a year spent with the Taliban.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 18:00
                  </button>
                </div>
              </div>
            </div>

            {/* HAPPYEND */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-indigo-500 to-purple-700 relative">
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-2 py-1 text-xs font-semibold rounded">Asian Cinema</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">Projector Exclusive</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Drama</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">HAPPYEND</h3>
                <span className="rating-badge mb-2">PG13</span>
                <p className="text-sm text-gray-300 mb-4">
                  With bold visuals and a rebellious soundtrack, the film captures the shift from youthful apathy to political awakening.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 20:00
                  </button>
                </div>
              </div>
            </div>

            {/* The Life Of Chuck */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-teal-500 to-blue-700 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">New Release</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Drama</span>
                  <span className="genre-tag">Fantasy</span>
                  <span className="genre-tag">Sci-Fi</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">The Life Of Chuck</h3>
                <span className="rating-badge mb-2">NC16</span>
                <p className="text-sm text-gray-300 mb-4">
                  From the mind of Stephen King. Starring Tom Hiddleston, Mark Hamill.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <button className="time-button">
                    Buy 20:15
                  </button>
                </div>
              </div>
            </div>

            {/* The Phoenician Scheme */}
            <div className="bg-black rounded-lg overflow-hidden film-card-hover">
              <div className="aspect-[3/4] bg-gradient-to-b from-green-400 to-blue-600 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">New Release</span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="genre-tag">Comedy</span>
                  <span className="genre-tag">Crime</span>
                  <span className="genre-tag">Drama</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 cinema-subtitle">The Phoenician Scheme</h3>
                <span className="rating-badge mb-2">NC16</span>
                <p className="text-sm text-gray-300 mb-4">
                  2025 Cannes Film Festival Palme d'Or nominee. Wes Anderson returns with his signature whimsical style.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cineleisure</span>
                  <div className="space-x-2">
                    <button className="time-button">
                      Buy 15:30
                    </button>
                    <button className="time-button">
                      Buy 20:30
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Perfect for any event */}
            <div className="text-center">
              <div className="aspect-video bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 cinema-subtitle">Perfect for any event</h3>
              <p className="text-gray-300 mb-6">
                With one classic cinema hall (Green Room), one alternative entertainment space with a stage (Redrum),
                one cosy yet flexible hall space (Blue Room), and a foyer café/bar, The Projector is an ideal setting for a range of events.
              </p>
              <button className="btn-secondary">
                Find Out More
              </button>
            </div>

            {/* Membership */}
            <div className="text-center">
              <div className="aspect-video bg-gradient-to-r from-red-900 to-pink-900 rounded-lg mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4 cinema-subtitle">Ready to make the jump to full-fledged kinophile?</h3>
              <p className="text-gray-300 mb-6">
                Join our membership club - free tickets, discounts, the works. Just click here already!
              </p>
              <button className="btn-secondary">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Placeholder components for other pages
function FilmsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Films & Events</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function LocationsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Locations</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function BarPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Bar</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function VenueHirePage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Venue Hire</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function MembershipPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Membership & Gifts</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function FAQPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">FAQ</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">About</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Careers</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function AdvertisePage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Advertise</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/films" element={<FilmsPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/bar" element={<BarPage />} />
          <Route path="/venue-hire" element={<VenueHirePage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
