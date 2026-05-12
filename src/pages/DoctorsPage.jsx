import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, Calendar, Stethoscope, Star, CheckCircle, ArrowUpRight, Facebook, Mail, Instagram } from 'lucide-react'
import { doctors } from '../components/Doctors'

export default function DoctorsPage() {
  const doctor = doctors[0];

  return (
    <main style={{ background: 'var(--bg-cream)' }}>
      {/* Hero Section */}
      <div style={{
        background: 'var(--primary-dark)',
        padding: '160px 0 100px',
        color: 'var(--white)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span className="section-tag" style={{ background: 'var(--secondary)', color: '#fff' }}>Clinical Leadership</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 20, color: '#FFFFFF' }}>Surgical <span style={{ color: 'var(--accent)' }}>Expertise</span> & Excellence</h1>
          <p style={{ opacity: 0.9, fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5, marginBottom: 0, maxWidth: 650, margin: '0 auto', color: '#f0f0f0' }}>
            Meet our specialist surgeons who are leading the way in modern orthopedic interventions and patient-centric surgical protocols.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <section className="section" style={{ marginTop: '-40px' }}>
        <div className="container">
          <div style={{ 
            background: 'var(--bg-white)', 
            border: '1px solid var(--border-medium)', 
            display: 'grid', 
            gridTemplateColumns: 'minmax(400px, 0.9fr) 1.1fr',
            boxShadow: 'var(--shadow-md)'
          }} className="profile-card">
            
            {/* Image Column */}
            <div style={{ height: '700px', overflow: 'hidden' }}>
              <img 
                src="/dr-jagan.jpg"
                alt={doctor.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Info Column */}
            <div style={{ padding: '64px' }}>
              <div style={{ marginBottom: 40, borderBottom: '1px solid var(--border-medium)', paddingBottom: 32 }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: 12 }}>{doctor.name}</h2>
                <div style={{ fontSize: '1.2rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{doctor.role}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
                <div style={{ padding: '24px', background: 'var(--bg-cream)', borderLeft: '4px solid var(--primary)' }}>
                   <GraduationCap size={24} color="var(--primary)" style={{ marginBottom: 16 }} />
                   <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>Education</div>
                   <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{doctor.qualifications}</div>
                </div>
                <div style={{ padding: '24px', background: 'var(--bg-cream)', borderLeft: '4px solid var(--secondary)' }}>
                   <Stethoscope size={24} color="var(--primary)" style={{ marginBottom: 16 }} />
                   <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>Specialization</div>
                   <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{doctor.specialization}</div>
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                 <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Clinical Profile</h4>
                 <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                    Dr. Jagan Mohan Reddy is the chief clinical lead at Jagan Hospital. He specializes in intricate knee reconstruction and arthroplasty, leveraging modern protocols to achieve successful clinical outcomes in complex orthopedic trauma cases. With over 15 years of dedicated practice, he is recognized for his precision and patient care.
                 </p>
              </div>

              <div style={{ marginBottom: 48 }}>
                 <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>Areas of Expertise</h4>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px' }}>
                    {doctor.expertise.map((exp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-main)', fontWeight: 600, fontSize: '0.95rem' }}>
                        <CheckCircle size={18} color="var(--secondary)" />
                        {exp}
                      </div>
                    ))}
                 </div>
              </div>

              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                 <Link to="/appointment" className="btn btn-primary" style={{ padding: '16px 32px' }}>Book Consultation</Link>
                 <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ width: 48, height: 48, border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Facebook size={20} /></div>
                    <div style={{ width: 48, height: 48, border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Instagram size={20} /></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
           <div className="card" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center', padding: '80px', border: 'none' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 20, color: '#fff' }}>Need an Immediate Assessment?</h2>
              <p style={{ opacity: 0.8, maxWidth: 600, margin: '0 auto 40px', fontSize: '1.1rem' }}>
                Contact our help desk for emergency clinical slots or verification of surgical schedules.
              </p>
              <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                 <a href="tel:+919652488788" className="btn" style={{ background: 'var(--accent)', border: 'none', color: 'var(--primary)', padding: '16px 40px' }}>Call Helpline</a>
                 <Link to="/appointment" className="btn" style={{ borderColor: '#fff', color: '#fff', padding: '16px 40px' }}>Official Booking <ArrowUpRight size={18} /></Link>
              </div>
           </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .profile-card { grid-template-columns: 1fr !important; }
          .profile-card > div:first-child { height: 450px !important; }
          .profile-card > div:last-child { padding: 40px !important; }
        }
      `}</style>
    </main>
  )
}
