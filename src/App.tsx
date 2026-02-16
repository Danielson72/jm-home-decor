import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-gray-900/90 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/JM Logo.png" 
                alt="JM Home Decor Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>JM Home Decor</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                to="/"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === '/'
                    ? isScrolled
                      ? 'bg-amber-50 text-amber-600'
                      : 'bg-white/10 text-white'
                    : isScrolled 
                      ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600' 
                      : 'text-gray-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/portfolio"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === '/portfolio'
                    ? isScrolled
                      ? 'bg-amber-50 text-amber-600'
                      : 'bg-white/10 text-white'
                    : isScrolled 
                      ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600' 
                      : 'text-gray-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Portfolio
              </Link>
              <Link 
                to="/about"
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === '/about'
                    ? isScrolled
                      ? 'bg-amber-50 text-amber-600'
                      : 'bg-white/10 text-white'
                    : isScrolled 
                      ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600' 
                      : 'text-gray-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                About
              </Link>
              <button 
                onClick={scrollToContact}
                className={`ml-2 px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-amber-600 text-white hover:bg-amber-700' 
                    : 'bg-amber-500 text-white hover:bg-amber-400'
                }`}
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-left transition-all duration-300 ${
                    location.pathname === '/'
                      ? isScrolled
                        ? 'bg-amber-50 text-amber-600'
                        : 'bg-white/10 text-white'
                      : isScrolled
                        ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-left transition-all duration-300 ${
                    location.pathname === '/portfolio'
                      ? isScrolled
                        ? 'bg-amber-50 text-amber-600'
                        : 'bg-white/10 text-white'
                      : isScrolled
                        ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-left transition-all duration-300 ${
                    location.pathname === '/about'
                      ? isScrolled
                        ? 'bg-amber-50 text-amber-600'
                        : 'bg-white/10 text-white'
                      : isScrolled
                        ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  About
                </Link>
                <button
                  onClick={scrollToContact}
                  className={`px-4 py-2 rounded-md text-left font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-amber-500 text-white hover:bg-amber-400'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/JM Logo.png" 
                  alt="JM Home Decor Logo" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-xl font-bold">JM Home Decor</span>
              </div>
              <p className="text-gray-400">Transforming spaces into extraordinary homes since 2010.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Interior Design</li>
                <li>Custom Renovations</li>
                <li>Architectural Planning</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-amber-600 transition">
                    About Us
                  </Link>
                </li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>
                  <button onClick={scrollToContact} className="hover:text-amber-600 transition">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/jmhomedecororlando" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-amber-600 transition flex items-center space-x-2"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 JM Home Decor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;