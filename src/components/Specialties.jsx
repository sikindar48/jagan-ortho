import React from 'react'
import { Bone, Activity, Shield, Heart, Stethoscope, Zap, ArrowRight } from 'lucide-react'

const specialties = [
  {
    icon: <Bone size={28} />,
    title: 'Knee Replacement',
    desc: 'Expert total and partial knee replacement using high-flex implants for maximum postoperative mobility.',
  },
  {
    icon: <Activity size={28} />,
    title: 'Joint Reconstruction',
    desc: 'Complex revision surgeries and reconstruction for hip and shoulder joints with personalized recovery.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Trauma & Fracture',
    desc: 'Emergency management of complex fractures and industrial accidents with 24/7 surgical response.',
  },
  {
    icon: <Stethoscope size={28} />,
    title: 'Clinical Diagnosis',
    desc: 'Evidence-based diagnostic assessments for chronic bone pain and degenerative joint diseases.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Sports Injury',
    desc: 'Specialized care for ligament tears and muscular injuries ensuring rapid return to peak performance.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Cashless Care',
    desc: 'Complete integration with Aarogyasree and EHS for cashless and affordable high-end surgical care.',
  },
]

export default function Specialties() {
  return (
    <section className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="section-tag">Clinical Portfolio</span>
          <h2 className="section-title">Superior Surgical <span style={{ color: 'var(--secondary)' }}>Expertise</span></h2>
          <p style={{ margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            We specialize in advanced orthopedic interventions, bringing state-of-the-art medical technology to the Rayalaseema region.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
        }}>
          {specialties.map((service, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                padding: '48px',
                border: '1px solid var(--border-medium)',
                background: 'var(--bg-white)',
              }}
            >
              <div style={{
                width: 56,
                height: 56,
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
              }}>
                {service.icon}
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  marginBottom: 16,
                  color: 'var(--primary-dark)',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: 24
                }}>
                  {service.desc}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 8, 
                  color: 'var(--primary)', 
                  fontWeight: 700, 
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  borderBottom: '1.5px solid var(--primary)',
                  width: 'fit-content',
                  paddingBottom: 2
                }}>
                  Details <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
