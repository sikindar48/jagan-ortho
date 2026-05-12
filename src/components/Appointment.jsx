import React, { useState } from 'react'
import { Calendar, Phone, CheckCircle, ArrowRight, Clock, MapPin } from 'lucide-react'

export default function AppointmentSection() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="section" style={{ background: 'var(--bg-cream)', borderTop: '1px solid var(--border-medium)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: 0,
          background: 'var(--bg-white)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-md)'
        }} className="appointment-grid">
          
          {/* Info Side */}
          <div style={{ padding: '64px', borderRight: '1px solid var(--border-medium)', background: 'var(--primary)', color: 'var(--bg-white)' }}>
            <span className="section-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--bg-white)' }}>Join Our Schedule</span>
            <h2 style={{ fontSize: '3rem', color: 'var(--bg-white)', marginBottom: 24, lineHeight: 1.1 }}>Book Your clinical <span style={{ color: 'var(--accent)' }}>Assessment</span></h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: 48, lineHeight: 1.6 }}>
              Direct access to specialized orthopedic evaluations and surgical planning.
            </p>

            <div style={{ display: 'grid', gap: 32 }}>
               <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <div style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Direct Helpline</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>+91 96524 88788</div>
                  </div>
               </div>

               <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <div style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Clinical Timing</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>Mon — Sat, 10 AM - 8 PM</div>
                  </div>
               </div>

               <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div style={{ opacity: 0.6, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Hospital Campus</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Padmavathi Nagar, Nandyal</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ padding: '64px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <CheckCircle size={80} color="var(--primary)" style={{ margin: '0 auto 24px' }} />
                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>Request Received</h3>
                <p style={{ color: 'var(--text-muted)' }}>Our team will verify your slot within the hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 24 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>Patient Full Name</label>
                  <input
                    required
                    placeholder="Enter patient name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    style={{
                      width: '100%', padding: '14px 18px', border: '1px solid var(--border-medium)',
                      fontSize: '1rem', outline: 'none', background: 'var(--bg-cream)'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>Contact Phone</label>
                    <input
                      required
                      placeholder="+91..."
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      style={{
                        width: '100%', padding: '14px 18px', border: '1px solid var(--border-medium)',
                        fontSize: '1rem', outline: 'none', background: 'var(--bg-cream)'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>Consultation Date</label>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={e => setForm({...form, date: e.target.value})}
                      style={{
                        width: '100%', padding: '14px 18px', border: '1px solid var(--border-medium)',
                        fontSize: '1rem', outline: 'none', background: 'var(--bg-cream)'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>Brief Clinical History</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Knee pain, Ligament injury..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    style={{
                      width: '100%', padding: '14px 18px', border: '1px solid var(--border-medium)',
                      fontSize: '1rem', outline: 'none', background: 'var(--bg-cream)', resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '18px', justifyContent: 'center', fontSize: '1rem' }}>
                  Request Clinical Slot <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <style>{`
        input:focus, textarea:focus { border-color: var(--primary) !important; background: #fff !important; }
        @media (max-width: 1024px) {
          .appointment-grid { grid-template-columns: 1fr !important; }
          .appointment-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--border-medium) !important; padding: 40px !important; }
          .appointment-grid > div:last-child { padding: 40px !important; }
        }
      `}</style>
    </section>
  )
}
