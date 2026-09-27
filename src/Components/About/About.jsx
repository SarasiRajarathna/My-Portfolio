import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GraduationCap, Code2, Palette, TestTube, BarChart3, MapPin } from 'lucide-react';

const FOCUS_AREAS = [
  { icon: <Code2 size={18} />, label: 'Full-Stack Development', color: '#60a5fa' },
  { icon: <Palette size={18} />, label: 'UI/UX Design', color: '#c084fc' },
  { icon: <TestTube size={18} />, label: 'Quality Assurance', color: '#4ade80' },
  { icon: <BarChart3 size={18} />, label: 'Data Analytics', color: '#fb923c' },
];

function About() {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Me"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative bg orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          left: '-80px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-underline" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* LEFT — Description */}
          <div className={`fade-up delay-200 ${isVisible ? 'visible' : ''}`}>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '1.25rem',
              }}
            >
              I am an enthusiastic, hardworking, and ambitious undergraduate currently pursuing a{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                BSc (Hons) in Information Systems
              </span>{' '}
              at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. I have a deep passion for the IT industry, with strong communication and interpersonal skills.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '1.25rem',
              }}
            >
              My interests span across{' '}
              <span style={{ color: 'var(--accent-light)', fontWeight: 500 }}>full-stack development</span>,{' '}
              <span style={{ color: 'var(--accent-light)', fontWeight: 500 }}>UI/UX design</span>, and modern web technologies. I am actively seeking an internship to learn new things and further develop and improve my skills and knowledge.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
              }}
            >
              My goal is to combine creativity and technical knowledge to design and develop applications that are both functional and engaging, while continuously learning and improving as a future IT professional.
            </p>

            {/* Location indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.75rem',
                color: 'var(--text-muted)',
                fontSize: '0.875rem',
              }}
            >
              <MapPin size={15} style={{ color: 'var(--accent-light)' }} />
              Sabaragamuwa University, Sri Lanka
            </div>
          </div>

          {/* RIGHT — Info cards */}
          <div
            className={`fade-up delay-400 ${isVisible ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Education card */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(234, 88, 12, 0.12)',
                    border: '1px solid rgba(234, 88, 12, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent-light)',
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <p
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-light)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      Higher Education
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      2024 – Present
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '0.975rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    BSc (Hons) in Information Systems
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Sabaragamuwa University of Sri Lanka
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--accent-light)', marginTop: '0.2rem', fontWeight: 500 }}>
                    3rd-year undergraduate
                  </p>
                </div>
              </div>

              {/* School Education */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(96, 165, 250, 0.12)',
                    border: '1px solid rgba(96, 165, 250, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#60a5fa',
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <p
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#60a5fa',
                        marginBottom: '0.2rem',
                      }}
                    >
                      Secondary Education
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      2008 – 2022
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: '0.975rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Advanced Level 2022 — Physical Science Stream
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Swarnapali Balika National School, Anuradhapura
                  </p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    3C passes
                  </p>
                </div>
              </div>
            </div>

            {/* Focus Areas card */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-light)',
                  marginBottom: '1rem',
                }}
              >
                Focus Areas
              </p>
              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}
              >
                {FOCUS_AREAS.map(({ icon, label, color }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 0.75rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span style={{ color }}>{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Available for opportunities */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1.25rem',
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                color: '#4ade80',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  flexShrink: 0,
                  boxShadow: '0 0 6px #4ade80',
                }}
              />
              Available for internship opportunities
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
