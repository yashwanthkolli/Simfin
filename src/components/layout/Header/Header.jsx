import { NavLink, useLocation } from 'react-router-dom'
import { useHeaderTheme } from '@/context/HeaderThemeContext'
import SimFinLogo from '@assets/images/logo.png'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'
import './Header.styles.scss'
import { useState, useEffect, useRef } from 'react'
import Button from '../../ui/Button/Button'

const Header = () => {
  const { theme } = useHeaderTheme()
  const location = useLocation()
  const path = location.pathname.slice(1)
  const hash = location.hash.slice(1)

  const [isOpen, setIsOpen] = useState(false)

  const menuRef = useRef(null)

  const toggleMenu = () => setIsOpen(prev => !prev)

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      )
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const mobileOverlayClick = (e) => {
    e.stopPropagation();
    setIsOpen(false)
  }

  // ESC key support
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <header
      className={`site-header ${
        theme === 'dark' ? 'site-header--dark' : 'site-header--light'
      }`}
    >
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo">
          <img src={SimFinLogo} alt="SimFin logo" />
        </NavLink>

        {/* Desktop Nav (unchanged) */}
        <nav className="site-header__nav" aria-label="Primary navigation">
          <NavLink to="/" end className={path === '' ? 'bold' : ''}>Home</NavLink>
          <NavLink to="/about" className={path.startsWith('about') ? 'bold' : ''}>About</NavLink>
          <NavLink to="/services" className={path.startsWith('services') ? 'bold' : ''}>Services</NavLink>
          <NavLink to="/resources" className={path.startsWith('resources') ? 'bold' : ''}>Resources</NavLink>
          {/* <NavLink to="/about#team" className={hash.startsWith('team') ? 'bold' : ''}>Team</NavLink> */}
        </nav>

        <NavLink to="/contact" className="other-nav">
          Contact Us
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className={`site-header__menu-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="toggle-icon" style={{color: isOpen ? '#0A2342' : 'inherit'}}>
            <Menu className="icon icon-menu" size={22} />
            <X className="icon icon-close" size={22} />
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-nav-overlay" onClick={mobileOverlayClick}>
          <nav
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-nav-drawer"
            aria-label="Mobile navigation"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/resources">Resources</NavLink>

            <div className="mobile-divider" />

            <Button as={NavLink} variant='accent' to="/contact" className="mobile-cta">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
