import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/team', name: 'Team' },
    { path: '/pricing', name: 'Pricing' },
    { path: '/projects', name: 'Projects' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">Saksham</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => 
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${isActive ? 'text-black bg-gray-100' : 'text-black hover:text-black hover:bg-gray-50'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-black font-medium transition-colors
                  ${isActive ? 'text-black bg-gray-100' : 'text-black hover:bg-gray-50'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;