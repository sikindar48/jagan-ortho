import React from 'react'
import { Monitor, Zap, Bed, Heart, AlertCircle, Users, Shield, Award } from 'lucide-react'

const facilities = [
  { icon: <Monitor size={24} />, title: 'Modern OT', desc: 'Surgical suites equipped with laminar airflow systems and high-end anesthesia workstations.' },
  { icon: <Zap size={24} />, title: 'Digital Imaging', desc: 'Precision diagnostics featuring high-resolution X-rays and imaging integration.' },
  { icon: <Bed size={24} />, title: 'Patient Wards', desc: 'Clean, comfortable recovery rooms designed for maximum hygiene and safety.' },
  { icon: <Heart size={24} />, title: 'ICU Monitoring', desc: 'Dedicated monitoring units for critical orthopedic and trauma patient care.' },
  { icon: <AlertCircle size={24} />, title: 'Trauma Unit', desc: 'Rapid response surgical team available 24/7 for orthopedic emergencies.' },
  { icon: <Users size={24} />, title: 'Expert Team', desc: 'Highly trained paramedical staff specializing in orthopedic nursing and rehab care.' },
  { icon: <Shield size={24} />, title: 'Cashless Support', desc: 'Seamless processing for Aarogyasree, EHS, and private corporate health schemes.' },
  { icon: <Award size={24} />, title: 'Sterile Protocols', desc: 'Strict adherence to international standards for surgical sterilization and infection control.' },
]

export default function Facilities() {
  return (
    <section className="section" style={{ background: 'var(--bg-cream)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="section-tag">Patient First Infrastructure</span>
          <h2 className="section-title">Technological <span style={{ color: 'var(--secondary)' }}>Capabilities</span></h2>
          <p style={{ margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
            We invest in advanced medical technology to ensure the highest standards of safety and clinical outcomes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {facilities.map((facility, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border-medium)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                background: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
              }}>
                {facility.icon}
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  marginBottom: 12,
                  color: 'var(--primary-dark)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {facility.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}>
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
