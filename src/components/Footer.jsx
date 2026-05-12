import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ChevronRight, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary-dark)', color: 'rgba(255,255,255,0.85)', borderTop: '4px solid var(--secondary)' }}>
      <div className="container" style={{ padding: '80px 0 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 60,
          marginBottom: 60,
        }}>
          {/* Logo/Identity */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#fff',
              color: 'var(--primary-dark)',
              fontWeight: 800,
              fontSize: '1.5rem',
              marginBottom: 24,
            }}>
              JAGAN HOSPITAL
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: 32, fontSize: '0.95rem' }}>
              Specialized clinical care and advanced surgical interventions for long-term orthopedic wellness in the Rayalaseema region.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
               <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Facebook size={18} /></div>
               <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Instagram size={18} /></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 28, borderBottom: '1.5px solid rgba(255,255,255,0.1)', paddingBottom: 12 }}>Quick Navigation</h4>
            <div style={{ display: 'grid', gap: 16 }}>
              {[
                { to: '/', label: 'Home Page' },
                { to: '/about', label: 'Our Story' },
                { to: '/doctors', label: 'Consultants' },
                { to: '/gallery', label: 'Clinical Gallery' },
                { to: '/appointment', label: 'Booking Portal' },
              ].map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.95rem', transition: 'var(--transition)' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'inherit'}
                >
                  <ChevronRight size={14} color="var(--accent)" /> {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 28, borderBottom: '1.5px solid rgba(255,255,255,0.1)', paddingBottom: 12 }}>Campus Reach</h4>
            <div style={{ display: 'grid', gap: 24 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem' }}>Beside Tejaswini Hotel, Padmavathi Nagar, Nandyal – 518501, Andhra Pradesh</span>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Phone size={20} color="var(--accent)" />
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>+91 96524 88788</span>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <Clock size={20} color="var(--accent)" />
                <span style={{ fontSize: '0.9rem' }}>Open 24/7 for Trauma & Emergencies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <p style={{ fontSize: '0.85rem' }}>© {new Date().getFullYear()} Jagan Hospital Group. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24, fontSize: '0.85rem' }}>
            <span>Privacy Protocol</span>
            <span>Clinical Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
