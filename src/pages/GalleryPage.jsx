import React, { useState } from 'react'
import { X, Award, Newspaper, Image, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const categories = ['All', 'Hospital', 'Clinical', 'Awards', 'Media']

const galleryItems = [
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80', title: 'State-of-the-Art Operations', desc: 'Equipped with the latest surgical technology and high-fidelity monitoring.' },
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', title: 'Modern Patient Wing', desc: 'Secure and comfortable recovery suites for our patients.' },
  { cat: 'Awards', type: 'award', src: 'https://images.unsplash.com/photo-1578308323226-c4382a3d05a9?w=800&q=80', title: 'Quality Accreditation', desc: 'Recognized for clinical success and surgical safety standards.' },
  { cat: 'Clinical', type: 'image', src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', title: 'Rehabilitation Center', desc: 'Advanced mobilization protocols for effective postoperative care.' },
  { cat: 'Media', type: 'news', src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80', title: 'Healthcare Excellence', desc: 'Dr. Jagan discussing clinical innovations in the public medical forum.' },
  { cat: 'Hospital', type: 'image', src: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80', title: 'Clinical Infrastructure', desc: 'Advanced medical setups designed for precision and rapid trauma response.' },
]

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active)

  const goLightbox = (dir) => {
    setLightbox(i => (i + dir + filtered.length) % filtered.length)
  }

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
          <span className="section-tag" style={{ background: 'var(--secondary)', color: '#fff' }}>Institutional Records</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: 20, color: '#FFFFFF' }}>Jagan Hospital <span style={{ color: 'var(--accent)' }}>Gallery.</span></h1>
          <p style={{ opacity: 0.9, maxWidth: 650, margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.5, fontWeight: 500, color: '#f0f0f0' }}>
            Visual records of our clinical infrastructure, hospital milestones, and surgical expertise.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          {/* Categories Tab */}
          <div style={{ 
            display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60, 
            justifyContent: 'center'
          }}>
            {categories.map(c => (
              <button 
                key={c} 
                onClick={() => setActive(c)} 
                className="btn"
                style={{
                  padding: '12px 32px',
                  background: active === c ? 'var(--primary)' : 'var(--bg-white)',
                  color: active === c ? 'var(--bg-white)' : 'var(--primary)',
                  border: active === c ? '1px solid var(--primary)' : '1px solid var(--border-medium)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid View */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 32,
          }}>
            {filtered.map((item, i) => (
              <div 
                key={i} 
                className="card"
                style={{ 
                  padding: 0,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid var(--border-medium)'
                }}
                onClick={() => setLightbox(i)}
              >
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                   <img 
                    src={item.src} 
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', top: 20, right: 20,
                    background: 'var(--secondary)', color: '#fff',
                    padding: '6px 14px', fontWeight: 800, fontSize: '0.75rem',
                    textTransform: 'uppercase', letterSpacing: 1
                  }}>
                    {item.cat}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-dark)', marginBottom: 8, fontFamily: 'Inter' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Lightbox */}
      {lightbox !== null && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(26, 22, 18, 0.98)',
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }} onClick={() => setLightbox(null)}>
          <button onClick={e => { e.stopPropagation(); goLightbox(-1) }} style={{ position: 'absolute', left: 40, background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>
            <ChevronLeft size={48} />
          </button>

          <div style={{ maxWidth: 1000, width: '90%', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].title} style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', border: '2px solid var(--secondary)' }} />
            <div style={{ marginTop: 32 }}>
               <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: 8 }}>{filtered[lightbox].title}</h3>
               <p style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>{filtered[lightbox].desc}</p>
            </div>
          </div>

          <button onClick={e => { e.stopPropagation(); goLightbox(1) }} style={{ position: 'absolute', right: 40, background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}>
            <ChevronRight size={48} />
          </button>

          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 40, right: 40, color: '#fff', cursor: 'pointer', background: 'none', border: 'none' }}>
            <X size={48} />
          </button>
        </div>
      )}
    </main>
  )
}
