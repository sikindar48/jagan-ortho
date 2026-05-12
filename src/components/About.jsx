import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Award, Target } from 'lucide-react'

export default function About() {
  const buildingPhoto = `${import.meta.env.BASE_URL}jagan-hospital.jpg`;

  return (
    <section className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(350px, 1fr)',
          gap: 80,
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Left - Visual Content */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              border: '1px solid var(--border-medium)',
              boxShadow: '20px 20px 0 var(--accent)',
              zIndex: 1
            }}>
              <img
                src={buildingPhoto}
                alt="Jagan Hospital Entrance"
                style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Right - Text Content */}
          <div>
            <span className="section-tag">Clinical History</span>
            <h2 className="section-title">Jagan Hospital: Founded on <span style={{ color: 'var(--secondary)' }}>Excellence</span></h2>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-main)', 
              fontWeight: 600, 
              marginBottom: 24,
              lineHeight: 1.4
            }}>
              Jagan Hospital is a premier destination for advanced medical care in Nandyal, driven by clinical precision and patient safety.
            </p>

            <p style={{ color: 'var(--text-muted)', marginBottom: 40, lineHeight: 1.8 }}>
              Under the expert surgical leadership of <strong>Dr. K. Jagan Mohan Reddy</strong>, we have evolved into a center of excellence for total knee replacements and trauma management. Our facility is equipped with modern diagnostics and high-protocol operation theatres, ensuring every patient receives world-class treatment in the Rayalaseema region.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Meticulous Surgical Protocol</span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckCircle size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>Transparent Care Pathways</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 20 }}>
              <Link to="/about" className="btn btn-primary">Our Legacy</Link>
              <Link to="/doctors" className="btn btn-secondary">Meet Our Surgeons</Link>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  )
}
