import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { achievements } from '../../data/portfolioData';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'extracurricular', label: 'Extracurricular' },
];

const TYPE_STYLE = {
  achievements: { color: '#fb923c', bg: 'rgba(234,88,12,0.08)', border: 'rgba(234,88,12,0.2)', label: 'Achievement' },
  achievement: { color: '#fb923c', bg: 'rgba(234,88,12,0.08)', border: 'rgba(234,88,12,0.2)', label: 'Achievement' },
  extracurricular: { color: '#c084fc', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', label: 'Extracurricular' },
  certifications: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', label: 'Certification' },
  certificate: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', label: 'Certification' },
};

function Achievements() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sectionRef, isVisible] = useScrollAnimation();

  const filtered =
    activeFilter === 'all'
      ? achievements
      : achievements.filter(
          (item) => item.category === activeFilter || item.type === activeFilter
        );

  return (
    <section
      id="achievements"
      ref={sectionRef}
      aria-label="Certifications and Achievements"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-label">Recognition & Growth</span>
          <h2 className="section-title">Certifications, Achievements & Activities</h2>
          <div className="section-underline" />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', fontSize: '1rem' }}>
            Professional credentials, competitive hackathon recognitions, and community contributions.
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className={`fade-up delay-200 ${isVisible ? 'visible' : ''}`}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
          role="tablist"
          aria-label="Recognition categories"
        >
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeFilter === id}
              className={`filter-btn ${activeFilter === id ? 'active' : ''}`}
              onClick={() => setActiveFilter(id)}
              id={`achievement-filter-${id}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
          role="list"
          aria-label="Recognition list"
        >
          {filtered.map((item, i) => {
            const typeKey = item.category || item.type;
            const typeMeta = TYPE_STYLE[typeKey] || TYPE_STYLE.achievements;
            return (
              <article
                key={item.id}
                role="listitem"
                className={`glass-card fade-up ${isVisible ? 'visible' : ''}`}
                style={{
                  padding: '1.5rem',
                  transitionDelay: `${i * 60}ms`,
                  display: 'flex',
                  flexDirection: 'column',
                }}
                aria-label={item.title}
              >
                {/* Optional Photograph / Image */}
                {item.image && (
                  <div
                    style={{
                      marginBottom: '1rem',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      height: '180px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Top icon and badge row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.875rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      background: typeMeta.bg,
                      border: `1px solid ${typeMeta.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          padding: '0.15rem 0.5rem',
                          borderRadius: '100px',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: typeMeta.color,
                          background: typeMeta.bg,
                          border: `1px solid ${typeMeta.border}`,
                        }}
                      >
                        {typeMeta.label}
                      </span>
                      {item.year && (
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                          {item.year}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Title & Organization */}
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                {(item.organization || item.subtitle) && (
                  <p style={{ fontSize: '0.82rem', color: typeMeta.color, fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {item.organization || item.subtitle}
                  </p>
                )}

                {/* Description */}
                {item.description && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {item.description}
                  </p>
                )}

                {/* Action button if link is present */}
                {item.link && (
                  <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.45rem 0.85rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        width: 'fit-content',
                      }}
                      aria-label={`${item.buttonText || 'View Certificate'}: ${item.title}`}
                    >
                      <ExternalLink size={13} />
                      {item.buttonText || 'View Certificate'}
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: 'var(--text-muted)',
            }}
          >
            <p>No items in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Achievements;
