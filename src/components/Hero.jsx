import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const jaganPhoto = `${import.meta.env.BASE_URL}dr-jagan.jpg`;

  return (
    <section style={{
      paddingTop: 160,
      paddingBottom: 80,
      background: 'var(--bg-cream)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        zIndex: 0
      }}>
         <img src={jaganPhoto} alt="Dr. Jagan" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'sepia(0.2)' }} />
         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-cream), transparent)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(350px, 0.7fr)',
          gap: 60,
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Content */}
          <div>
            <span className="section-tag">Clinical Excellence Since 2015</span>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              marginBottom: 24, 
              color: 'var(--primary-dark)',
              lineHeight: 1.15
            }}>
              Jagan <span style={{ color: 'var(--secondary)' }}>Hospital</span> — Advanced Knee Replacement Center
            </h1>

            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-main)', 
              marginBottom: 40,
              lineHeight: 1.5,
              maxWidth: '600px',
              fontWeight: 500
            }}>
              Under the expert surgical leadership of <strong>Dr. K. Jagan Mohan Reddy</strong>, we provide world-class orthopedic interventions with a focus on rapid recovery and precision.
            </p>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 60 }}>
              <Link to="/appointment" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                Book Consultation <ArrowRight size={18} />
              </Link>
              <a href="tel:+919652488788" className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1rem' }}>
                Emergency Line
              </a>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, auto)',
              gap: 40,
              justifyContent: 'flex-start',
              borderTop: '1px solid var(--border-medium)',
              paddingTop: 40
            }}>
               <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>1,000+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Knee Surgeries</div>
               </div>
               <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>15+ YRS</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Experience</div>
               </div>
               <div>
                  <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
                     {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />)}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Patient Trust</div>
               </div>
            </div>
          </div>

          {/* Right Action Side / Info Card */}
          <div style={{ padding: 0 }}>
             <div className="card" style={{ 
                padding: '48px', 
                background: 'var(--bg-white)', 
                border: 'none',
                boxShadow: 'var(--shadow-md)',
                display: 'grid',
                gap: 32
             }}>
                <h3 style={{ fontSize: '1.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: 16 }}>Immediate Access</h3>
                
                <div style={{ display: 'flex', gap: 20 }}>
                   <div style={{ color: 'var(--primary)' }}><MapPin size={24} /></div>
                   <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Our Location</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Padmavathi Nagar, Beside Tejaswini Hotel, Nandyal – 518501</div>
                   </div>
                </div>

                <div style={{ display: 'flex', gap: 20 }}>
                   <div style={{ color: 'var(--primary)' }}><Clock size={24} /></div>
                   <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Emergency Timing</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>24/7 Surgical Trauma Care<br />OPD: 10AM — 08PM</div>
                   </div>
                </div>

                <div style={{ display: 'flex', gap: 20 }}>
                   <div style={{ color: 'var(--primary)' }}><Phone size={24} /></div>
                   <div>
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Verified Line</div>
                      <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 800 }}>+91 96524 88788</div>
                   </div>
                </div>

                <Link to="/appointment" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                   Instant Scheduling
                </Link>
             </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
