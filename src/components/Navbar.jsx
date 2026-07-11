import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { resume } from '../data/resume'
import './Navbar.css'

const navLinks = resume.navLinks.filter((link) => link.id !== 'contact')

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#home" className="header__brand" onClick={handleNavClick}>
          <span className="header__logo" aria-hidden="true">
            JE
          </span>
          <span className="header__name">{resume.name}</span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <ul
            id="header-menu"
            className={`header__links ${menuOpen ? 'header__links--open' : ''}`}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="header__cta-item">
              <a href="#contact" className="header__cta" onClick={handleNavClick}>
                Contact Me
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="header-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
