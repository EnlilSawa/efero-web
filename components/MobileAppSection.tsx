'use client'
import { useState, useEffect } from 'react'

function StatusBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 14px 0' }}>
      <span style={{ color: 'white', fontSize: 11, fontWeight: 600 }}>9:41</span>
      <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
          {[3, 5, 7, 9].map(h => (
            <div key={h} style={{ width: 3, height: h, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 1 }} />
          ))}
        </div>
        <div style={{ width: 20, height: 10, border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', right: -3, top: '50%', transform: 'translateY(-50%)', width: 2, height: 5, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '0 1px 1px 0' }} />
          <div style={{ width: '70%', height: '100%', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 1 }} />
        </div>
      </div>
    </div>
  )
}

function Screen1() {
  const jobs = [
    { name: 'Kjetil Hansen', address: 'Storgata 12, Oslo', status: 'Pågår', active: true },
    { name: 'Marte Olsen', address: 'Bergveien 5, Bergen', status: 'Ny', active: false },
    { name: 'Lars Eriksen', address: 'Kirkegata 8', status: 'Ny', active: false },
  ]
  return (
    <div style={{ height: '100%', backgroundColor: '#0A1B33', boxSizing: 'border-box' }}>
      <StatusBar />
      <div style={{ padding: '12px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <div style={{ color: 'white', fontSize: 18, fontWeight: 700 }}>Mine jobber</div>
            <div style={{ color: '#64748B', fontSize: 11, marginTop: 2 }}>Mandag 9. juni</div>
          </div>
          <div style={{ backgroundColor: 'rgba(37,99,255,0.15)', color: '#60a5fa', fontSize: 10, fontWeight: 600, padding: '4px 10px', borderRadius: 20 }}>
            3 aktive
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {jobs.map(job => (
            <div key={job.name} style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              borderRadius: 10,
              padding: '10px 12px',
              borderLeft: '3px solid #2563FF',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                <div style={{ color: 'white', fontSize: 13, fontWeight: 600 }}>{job.name}</div>
                <div style={{
                  backgroundColor: job.active ? 'rgba(37,99,255,0.2)' : 'rgba(21,128,61,0.2)',
                  color: job.active ? '#93c5fd' : '#86efac',
                  fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 20,
                }}>
                  {job.status}
                </div>
              </div>
              <div style={{ color: '#64748B', fontSize: 11 }}>{job.address}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Screen2() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 600)
    return () => clearTimeout(t)
  }, [])

  const r = 50
  const circumference = 2 * Math.PI * r

  return (
    <div style={{
      height: '100%', backgroundColor: '#0A1B33',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '24px', boxSizing: 'border-box',
    }}>
      <svg width="120" height="120" viewBox="0 0 120 120" style={{ marginBottom: 20 }}>
        <circle cx="60" cy="60" r={r} fill="rgba(21,128,61,0.1)" />
        <circle
          cx="60" cy="60" r={r}
          fill="none" stroke="#15803D" strokeWidth="4" strokeLinecap="round"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: animated ? 0 : circumference,
            transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'rotate(-90deg)',
            transformOrigin: '60px 60px',
          }}
        />
        <path
          d="M36 60 L52 76 L84 44"
          fill="none" stroke="#4ade80" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
          style={{ opacity: animated ? 1 : 0, transition: 'opacity 0.3s ease 0.8s' }}
        />
      </svg>
      <div style={{ color: 'white', fontSize: 18, fontWeight: 700, marginBottom: 6, textAlign: 'center' }}>
        Jobb fullført!
      </div>
      <div style={{ color: '#64748B', fontSize: 13, textAlign: 'center', lineHeight: 1.6, marginBottom: 24 }}>
        Faktura genereres<br />automatisk
      </div>
      <div style={{
        backgroundColor: '#2563FF', color: 'white',
        fontSize: 13, fontWeight: 600, padding: '11px 28px', borderRadius: 10,
      }}>
        Marker som ferdig
      </div>
    </div>
  )
}

function Screen3() {
  return (
    <div style={{ height: '100%', backgroundColor: '#0A1B33', boxSizing: 'border-box' }}>
      <StatusBar />
      <div style={{ padding: '12px 14px' }}>
        <div style={{ color: 'white', fontSize: 18, fontWeight: 700, marginBottom: 2 }}>Statistikk</div>
        <div style={{ color: '#64748B', fontSize: 11, marginBottom: 14 }}>Denne måneden</div>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: '14px', marginBottom: 10 }}>
          <div style={{ color: '#64748B', fontSize: 11, marginBottom: 6 }}>Total inntekt</div>
          <div style={{ color: '#4ade80', fontSize: 26, fontWeight: 700, lineHeight: 1 }}>182 450 kr</div>
          <div style={{ color: '#4ade80', fontSize: 11, marginTop: 6 }}>↑ 12% fra forrige måned</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 10 }}>
          {[
            { label: 'Jobber', value: '24', color: '#60a5fa' },
            { label: 'Betalt', value: '21', color: '#4ade80' },
            { label: 'Venter', value: '3', color: '#f59e0b' },
          ].map(s => (
            <div key={s.label} style={{
              backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 6px', textAlign: 'center',
            }}>
              <div style={{ color: s.color, fontSize: 20, fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: '#64748B', fontSize: 10, marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '12px 14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
            <span style={{ color: '#64748B', fontSize: 11 }}>Betalingsstatus</span>
            <span style={{ color: '#4ade80', fontSize: 11, fontWeight: 600 }}>87%</span>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 4, height: 6 }}>
            <div style={{ backgroundColor: '#2563FF', borderRadius: 4, height: 6, width: '87%' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function MobileAppSection() {
  const [activeScreen, setActiveScreen] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActiveScreen(prev => (prev + 1) % 3)
        setVisible(true)
      }, 500)
    }, 5500)
    return () => clearInterval(interval)
  }, [])

  const goToScreen = (i: number) => {
    if (i === activeScreen) return
    setVisible(false)
    setTimeout(() => {
      setActiveScreen(i)
      setVisible(true)
    }, 500)
  }

  return (
    <section style={{ backgroundColor: '#0A1B33', padding: '96px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <h2 style={{ color: 'white', fontSize: 36, fontWeight: 600, textAlign: 'center', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          Se Efero i lomma di
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, textAlign: 'center', margin: '0 0 56px', lineHeight: 1.6 }}>
          Teknikerne bruker mobilappen.<br />Du har full oversikt.
        </p>

        {/* Phone wrapper */}
        <div className="efero-mobile-float" style={{ position: 'relative', marginBottom: 32 }}>

          {/* Left side buttons */}
          <div style={{ position: 'absolute', left: -4, top: 116, width: 4, height: 28, backgroundColor: '#2a2a4a', borderRadius: '3px 0 0 3px' }} />
          <div style={{ position: 'absolute', left: -4, top: 154, width: 4, height: 28, backgroundColor: '#2a2a4a', borderRadius: '3px 0 0 3px' }} />
          {/* Right side button */}
          <div style={{ position: 'absolute', right: -4, top: 130, width: 4, height: 50, backgroundColor: '#2a2a4a', borderRadius: '0 3px 3px 0' }} />

          {/* Phone body */}
          <div style={{
            width: 280, height: 560,
            backgroundColor: '#1a1a2e',
            borderRadius: 40,
            border: '6px solid #2a2a4a',
            position: 'relative',
            overflow: 'hidden',
            boxSizing: 'border-box',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)',
          }}>

            {/* Glare / reflection */}
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '55%', height: '45%',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)',
              borderRadius: '34px 0 0 0',
              pointerEvents: 'none', zIndex: 30,
            }} />

            {/* Notch */}
            <div style={{
              position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
              width: 80, height: 24, backgroundColor: '#1a1a2e',
              borderRadius: '0 0 16px 16px', zIndex: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#0d0d1a' }} />
            </div>

            {/* Screen */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: '#0A1B33', borderRadius: 28, overflow: 'hidden',
            }}>
              <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease', height: '100%' }}>
                {activeScreen === 0 && <Screen1 />}
                {activeScreen === 1 && <Screen2 />}
                {activeScreen === 2 && <Screen3 />}
              </div>
            </div>

            {/* Home indicator */}
            <div style={{
              position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
              width: 64, height: 4, backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 2, zIndex: 20,
            }} />
          </div>
        </div>

        {/* Dot navigation */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, alignItems: 'center' }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => goToScreen(i)} style={{
              width: i === activeScreen ? 24 : 8, height: 8, borderRadius: 4,
              backgroundColor: i === activeScreen ? '#2563FF' : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
            }} />
          ))}
        </div>

        {/* Feature points */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
          {['Jobber på telefonen', 'Én knapp når ferdig', 'Faktura sending via appen'].map((text, i) => (
            <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {text}
              {i < 2 && <span style={{ opacity: 0.4 }}>·</span>}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes eferoMobileFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .efero-mobile-float {
          animation: eferoMobileFloat 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
