import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Award, Briefcase, Plus, ChevronRight } from 'lucide-react'

export const doctors = [
  {
    name: 'Dr. K. Jagan Mohan Reddy',
    role: 'Chief Orthopedic Surgeon',
    qualifications: 'MBBS, MS Ortho',
    specialization: 'Knee Replacement Specialist',
    experience: '15+ Years',
    image: `${import.meta.env.BASE_URL}dr-jagan.jpg`,
    expertise: ['Total Knee Replacement', 'Complex Trauma Care', 'Arthroplasty', 'Pelvic Acetabular Surgery'],
  },
]


export default function Doctors() {
  return (
    <section className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="section-tag">Clinical Leadership</span>
          <h2 className="section-title">Meet Our Chief <span style={{ color: 'var(--secondary)' }}>Surgeon</span></h2>
          <p style={{ margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            Highly skilled surgical leadership dedicated to restoring mobility and functional independence.
          </p>
        </div>

        <div style={{
          maxWidth: 1050,
          margin: '0 auto',
          background: 'var(--bg-white)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'minmax(400px, 0.9fr) 1.1fr',
          alignItems: 'center'
        }} className="doctor-card-grid">

          {/* Portrait Side */}
          <div style={{ height: '600px', overflow: 'hidden' }}>
            <img
              src={doctors[0].image}
              alt={doctors[0].name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Bio Side */}
          <div style={{ padding: '64px' }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              color: 'var(--primary-dark)',
              marginBottom: 12,
            }}>
              {doctors[0].name}
            </h3>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--secondary)',
              fontWeight: 700,
              marginBottom: 32,
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              {doctors[0].role}
            </p>

            <div style={{ display: 'grid', gap: 24, marginBottom: 40 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, background: 'var(--bg-cream)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  < GraduationCap size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{doctors[0].qualifications}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Medical Qualifications</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 44, height: 44, background: 'var(--bg-cream)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{doctors[0].experience} Practice</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Surgical Experience</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: 32, marginBottom: 40 }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 0.5 }}>Specialized Expertise</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 20px' }}>
                {doctors[0].expertise.map((exp, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <Plus size={14} color="var(--secondary)" /> {exp}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/doctors" className="btn btn-primary" style={{ padding: '16px 32px' }}>
              Full Academic Profile <ChevronRight size={18} />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .doctor-card-grid { grid-template-columns: 1fr !important; }
          .doctor-card-grid > div:first-child { height: 450px !important; }
          .doctor-card-grid > div:last-child { padding: 40px !important; }
        }
      `}</style>
    </section>
  )
}
