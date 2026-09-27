import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { experiences } from '../../data/portfolioData';

const TYPE_COLORS = {
  leadership: { color: '#c084fc', bg: 'rgba(168,85,247,0.1)', label: 'Leadership' },
  achievement: { color: '#fb923c', bg: 'rgba(234,88,12,0.1)', label: 'Achievement' },
  extracurricular: { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', label: 'Extracurricular' },
  volunteer: { color: '#4ade80', bg: 'rgba(34,197,94,0.1)', label: 'Volunteering' },
  academic: { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', label: 'Academic' },
};

function Experience() {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-label="Experience"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          right: '-80px',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience & Activities</h2>
          <div className="section-underline" />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', fontSize: '1rem' }}>
            Extracurricular activities, competition achievements, and student leadership milestones.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '3rem', maxWidth: '760px' }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '20px',
              top: '10px',
              bottom: '10px',
              width: '1.5px',
              background: 'linear-gradient(to bottom, var(--accent), rgba(234,88,12,0.1), transparent)',
            }}
          />

          {experiences.map((exp, i) => {
            const typeMeta = TYPE_COLORS[exp.type] || TYPE_COLORS['academic'];
            return (
              <div
                key={exp.id}
                className={`fade-up ${isVisible ? 'visible' : ''}`}
                style={{
                  position: 'relative',
                  marginBottom: i < experiences.length - 1 ? '2rem' : '0',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-2.5rem',
                    top: '1.25rem',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--bg-primary)',
                    border: `2px solid ${typeMeta.color}`,
                    boxShadow: `0 0 0 4px ${typeMeta.bg}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    zIndex: 1,
                  }}
                >
                  <span>{exp.icon}</span>
                </div>

                {/* Card */}
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                        <span
                          style={{
                            padding: '0.15rem 0.55rem',
                            borderRadius: '100px',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: typeMeta.color,
                            background: typeMeta.bg,
                            border: `1px solid ${typeMeta.color}33`,
                          }}
                        >
                          {typeMeta.label}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          marginBottom: '0.15rem',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--accent-light)', fontWeight: 500 }}>
                        {exp.organization}
                      </p>
                    </div>
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        flexShrink: 0,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                      marginBottom: '0.875rem',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Skills tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tech-badge">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
