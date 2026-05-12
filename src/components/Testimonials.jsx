import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ramesh Kumar',
    procedure: 'Knee Replacement Patient',
    text: 'Exceptional surgical precision. Life without chronic pain is a luxury I had forgotten. The doctors and staff are highly professional.',
    location: 'Nandyal',
  },
  {
    name: 'Lakshmi Devi',
    procedure: 'Joint Reconstruction',
    text: 'Dr. Jagan explains the anatomy and surgery with absolute clarity. The medical standards here are on par with city hospitals.',
    location: 'Kurnool',
  },
  {
    name: 'Venkatesh Reddy',
    procedure: 'Trauma Care Case',
    text: 'Immediate surgical intervention after my accident saved my mobility. Outstanding efficiency and clinical care.',
    location: 'Nandyal',
  },
  {
    name: 'Sujatha P.',
    procedure: 'Knee Management',
    text: 'A highly professional environment. The post-operative recovery protocol is world-class and very effective.',
    location: 'Dhone',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((active + 1) % testimonials.length)
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="section-tag">Patient Success Stories</span>
          <h2 className="section-title">Verified Clinical <span style={{ color: 'var(--secondary)' }}>Outcomes</span></h2>
        </div>

        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          position: 'relative',
        }}>
          
          <div className="card" style={{
            padding: '64px',
            textAlign: 'center',
            background: 'var(--bg-cream)',
            border: 'none',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            <Quote size={48} style={{ position: 'absolute', top: 32, left: 32, opacity: 0.1, color: 'var(--primary)' }} />

            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 32 }}>
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="var(--primary)" color="var(--primary)" />)}
            </div>

            <p style={{
              fontSize: '1.4rem',
              lineHeight: 1.6,
              color: 'var(--primary-dark)',
              fontStyle: 'italic',
              fontWeight: 500,
              marginBottom: 40,
              fontFamily: 'Inter, sans-serif'
            }}>
              "{testimonials[active].text}"
            </p>

            <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: 32 }}>
               <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: 4 }}>{testimonials[active].name}</h4>
               <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{testimonials[active].procedure} • {testimonials[active].location}</p>
            </div>

            {/* Navigation Buttons */}
            <div style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              marginTop: 48
            }}>
              <button
                onClick={prev}
                style={{
                  width: 56, height: 56, background: 'var(--bg-white)', border: '1px solid var(--border-medium)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'var(--transition)'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-white)'}
              >
                <ChevronLeft size={24} color="var(--primary)" />
              </button>
              <button
                onClick={next}
                style={{
                  width: 56, height: 56, background: 'var(--bg-white)', border: '1px solid var(--border-medium)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'var(--transition)'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-white)'}
              >
                <ChevronRight size={24} color="var(--primary)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
