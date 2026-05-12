import React from 'react'
import AppointmentSection from '../components/Appointment'
import { Phone, MapPin, MessageCircle, Clock, Calendar, ArrowRight } from 'lucide-react'

export default function AppointmentPage() {
  return (
    <main style={{ background: 'var(--bg-cream)' }}>
      {/* Page Hero */}
      <div style={{
        background: 'var(--primary-dark)',
        padding: '160px 0 100px',
        color: 'var(--white)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ background: 'var(--secondary)', color: '#fff' }}>Official Booking Channel</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 20, color: '#FFFFFF' }}>Schedule Your <span style={{ color: 'var(--accent)' }}>Consultation.</span></h1>
          <p style={{ opacity: 0.9, maxWidth: 650, margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.5, fontWeight: 500, color: '#f8f8f8' }}>
            Secure your surgical assessment or clinical follow-up with Dr. K. Jagan Mohan Reddy today.
          </p>
        </div>
      </div>

      {/* Modern Contact Strip */}
      <div className="contact-strip" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="contact-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 24, 
            paddingBottom: 80 
          }}>
            {[
              { icon: <Phone size={24} />, title: 'Direct Helpline', sub: '+91 96524 88788', color: 'var(--primary)' },
              { icon: <MessageCircle size={24} />, title: 'WhatsApp Help', sub: 'Instant Response', color: 'var(--secondary)' },
              { icon: <Clock size={24} />, title: 'Hospital Hours', sub: '24/7 Emergency Care', color: 'var(--primary)' },
              { icon: <MapPin size={24} />, title: 'Facility Location', sub: 'Nandyal, Andhra Pradesh', color: 'var(--secondary)' },
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ 
                background: 'var(--bg-white)', 
                border: '1px solid var(--border-light)', 
                padding: '24px 32px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 20, 
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ color: item.color }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', marginBottom: 4, textTransform: 'uppercase' }}>{item.title}</div>
                  <div style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600 }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AppointmentSection />

      {/* Visit Info Strip */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 80, alignItems: 'center' }} className="location-grid">
             <div>
                <span className="section-tag">Find Us</span>
                <h2 className="section-title">Strategic Presence <span style={{ color: 'var(--secondary)' }}>in Nandyal</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 32 }}>
                   Located in the heart of Nandyal, our hospital is easily accessible by road and rail, facilitating rapid trauma care for the Rayalaseema region.
                </p>
                
                <div style={{ display: 'grid', gap: 32 }}>
                   <div style={{ display: 'flex', gap: 20 }}>
                      <MapPin size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <div>
                         <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>Hospital Address</h4>
                         <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Door No: 25/684-16, Beside Tejaswini Hotel,<br />Padmavathi Nagar, Nandyal – 518501</p>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: 20 }}>
                      <Phone size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <div>
                         <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>Clinical Helpdesk</h4>
                         <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91 96524 88788<br />08514-244415</p>
                      </div>
                   </div>
                </div>
             </div>

             <div style={{ height: '500px', border: '1px solid var(--border-medium)', boxShadow: 'var(--shadow-md)' }}>
                <iframe
                  title="Hospital Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383!2d78.48!3d15.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzQ4LjAiTiA3OMKwMjgnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
             </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .location-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .location-grid > div:last-child { height: 400px !important; }
        }
        @media (max-width: 768px) {
          .contact-strip { margin-top: -40px !important; }
          .contact-grid { padding-bottom: 40px !important; gap: 16px !important; }
          .card { padding: 20px 24px !important; }
        }
      `}</style>
    </main>
  )
}
