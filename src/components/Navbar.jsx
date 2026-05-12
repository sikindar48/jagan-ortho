import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/doctors', label: 'Our Surgeons' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/appointment', label: 'Appointment' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--primary-dark)',
      borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'var(--transition)',
      padding: scrolled ? '12px 0' : '24px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          textDecoration: 'none',
        }}>
          <div style={{
            padding: '10px 16px',
            background: 'var(--primary)',
            color: 'var(--bg-white)',
            fontWeight: 800,
            fontSize: '1.25rem',
            fontFamily: 'Inter, sans-serif',
          }}>
            JAGAN HOSPITAL
          </div>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            color: scrolled ? 'var(--primary)' : '#FFFFFF',
            lineHeight: 1,
            textTransform: 'uppercase',
            letterSpacing: 1,
            display: scrolled ? 'none' : 'block'
          }}>
            Advanced <span style={{ display: 'block', fontSize: '0.6rem', color: scrolled ? 'var(--secondary)' : 'var(--accent)', fontWeight: 700 }}>Orthopedic Care</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }} className="desktop-nav">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontWeight: 600,
                fontSize: '0.9rem',
                color: scrolled 
                  ? (pathname === l.to ? 'var(--primary)' : 'var(--text-muted)')
                  : '#FFFFFF',
                textDecoration: 'none',
                transition: 'var(--transition)',
                paddingBottom: 4,
                borderBottom: pathname === l.to 
                  ? `2.5px solid ${scrolled ? 'var(--primary)' : '#FFFFFF'}`
                  : '2.5px solid transparent'
              }}
              onMouseEnter={e => e.target.style.color = scrolled ? 'var(--primary)' : 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = scrolled 
                ? (pathname === l.to ? 'var(--primary)' : 'var(--text-muted)')
                : '#FFFFFF'}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919652488788"
            className="btn btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem'
            }}
          >
            Call Us <Phone size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--primary)',
            padding: 8,
          }}
          className="hamburger"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-white)',
          padding: '100px 32px 40px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          gap: 20
        }}>
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: pathname === l.to ? 'var(--primary)' : 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919652488788"
            className="btn btn-primary"
            style={{
              marginTop: 'auto',
              width: '100%',
              padding: '20px',
              justifyContent: 'center',
              fontSize: '1.1rem'
            }}
          >
            Emergency Consultation <Phone size={24} />
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
