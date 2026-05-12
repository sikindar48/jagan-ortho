import React from 'react'
import { CheckCircle, Award, Target, Eye, Milestone, Search, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const whyUs = [
  '1000+ Successful Knee Surgeries',
  'Lead Surgeon Dr. Jagan Mohan Reddy',
  'State-of-the-Art Operation Theatre',
  'Transparent & Ethical Treatment',
  'Advanced Post-Op Rehab Plans',
  'Government Health Schemes Accepted',
  'Digital Diagnostic Facilities',
  '24/7 Dedicated Trauma Support',
]

const milestones = [
  { year: '2015', event: 'Hospital foundation established in Nandyal.' },
  { year: '2017', event: 'Achieved first 200 high-flex knee replacements.' },
  { year: '2019', event: 'Upgraded to advanced digital imaging and modular OT.' },
  { year: '2022', event: 'Crossed 800+ complex orthopedic procedures landmark.' },
  { year: '2024', event: 'Recognized for clinical excellence in the Rayalaseema region.' },
]

export default function AboutPage() {
  const buildingPhoto = "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqfWtEsElCHAFEwKOWj7WFz4aS3NX_Cx5n7Gyx06jW-rl3--XhLpavNLiqrlwXPyCKU08ahQvJKt5-oNT4mQZtNNwQx9encDrxTVPJucls1KJqss4zScWSSzGujJV5OnIOMXULQLzsNzhk=s1360-w1360-h1020";

  return (
    <main style={{ background: 'var(--bg-cream)' }}>
      {/* Page Hero */}
      <div style={{
        background: 'var(--primary-dark)',
        padding: '160px 0 100px',
        color: 'var(--white)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ background: 'var(--secondary)', color: '#fff' }}>Our Clinical Legacy</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 20, color: '#FFFFFF' }}>Compassionate Care. <span style={{ color: 'var(--accent)' }}>Jagan Hospital</span></h1>
          <p style={{ opacity: 0.9, maxWidth: 650, margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6, color: '#f8f8f8' }}>
            Building a tradition of orthopedic surgical excellence in Nandyal since 2015, under the dedicated leadership of Dr. K. Jagan Mohan Reddy.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40, marginBottom: 100 }}>
             <div className="card" style={{ padding: '60px', border: 'none', background: 'var(--bg-cream)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: 56, height: 56, background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                   <Target size={28} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 20, color: 'var(--primary-dark)' }}>Our Mission</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
                   To deliver world-class orthopedic interventions through precision surgery and compassionate recovery protocols, ensuring advanced medical care is accessible to the Rayalaseema region.
                </p>
             </div>
             <div className="card" style={{ padding: '60px', border: 'none', background: 'var(--primary)', color: '#fff', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ width: 56, height: 56, background: 'var(--accent)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                   <Eye size={28} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: 20, color: '#fff' }}>Our Vision</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '1rem' }}>
                   To be the premier destination for joint replacement and trauma surgery in Andhra Pradesh, setting benchmarks for surgical success, safety, and patient-centric recovery.
                </p>
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 80, alignItems: 'center' }} className="about-split">
             <div>
                <span className="section-tag">Academic Approach</span>
                <h2 className="section-title">Evidence-Based <span style={{ color: 'var(--secondary)' }}>Medicine</span></h2>
                <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: 600, marginBottom: 24, lineHeight: 1.4 }}>
                   At Jagan Hospital, we combine decades of surgical experience with the latest technological advancements in orthopedics.
                </p>
                <p style={{ color: 'var(--text-muted)', marginBottom: 32, lineHeight: 1.8 }}>
                   Every patient case is evaluated with meticulous attention to detail. Dr. K. Jagan Mohan Reddy established this facility with the conviction that clinical excellence should be paired with deep empathy. Our infrastructure is designed for rapid mobilization, featuring specialized post-operative units and modern rehabilitation support.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                   <div style={{ padding: '24px', background: 'var(--bg-cream)', borderLeft: '4px solid var(--secondary)' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>1,000+</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Joint Procedures</div>
                   </div>
                   <div style={{ padding: '24px', background: 'var(--bg-cream)', borderLeft: '4px solid var(--primary)' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>15+ YRS</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Clinical Practice</div>
                   </div>
                </div>
             </div>
             <div>
                <img
                  src={buildingPhoto}
                  alt="Jagan Hospital Campus"
                  style={{ width: '100%', height: '550px', objectFit: 'cover', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-medium)' }}
                />
             </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section" style={{ background: 'var(--bg-cream)' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <span className="section-tag">Patient Values</span>
              <h2 className="section-title">The Jagan Care <span style={{ color: 'var(--secondary)' }}>Advantage</span></h2>
           </div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {whyUs.map((w, i) => (
                <div key={i} className="card" style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: 16, border: 'none', boxShadow: 'var(--shadow-sm)' }}>
                   <CheckCircle size={20} color="var(--primary)" />
                   <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--primary-dark)' }}>{w}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <span className="section-tag">Timeline</span>
              <h2 className="section-title">Our <span style={{ color: 'var(--secondary)' }}>Historical</span> Journey</h2>
           </div>
           
           <div style={{ maxWidth: 800, margin: '0 auto' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ 
                  display: 'grid', gridTemplateColumns: '120px 1fr', gap: 40, 
                  paddingBottom: 40, borderLeft: '1.5px solid var(--border-medium)', 
                  position: 'relative', paddingLeft: 40, marginLeft: 60 
                }}>
                   <div style={{ 
                     position: 'absolute', left: '-6px', top: 0, 
                     width: 12, height: 12, borderRadius: '50%', background: 'var(--primary)' 
                   }} />
                   <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{m.year}</div>
                   <div style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 500 }}>{m.event}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .about-split { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </main>
  )
}
