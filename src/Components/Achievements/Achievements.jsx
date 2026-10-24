import React, { useState, useCallback } from 'react';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { achievements } from '../../data/portfolioData';

// Import achievement images
import codeRallyCert from '../../assets/CodeRally Certificate.jpeg';
import codeRallyPhoto1 from '../../assets/CodeRally 1.jpg';
import codeRallyPhoto2 from '../../assets/CodeRally 2.jpg';
import codeArenaImg from '../../assets/CodeArena.jpeg';

// Map achievement certificate/photo assets
const ACHIEVEMENT_ASSETS = {
  'achieve-coderally': {
    certificate: codeRallyCert,
    photos: [codeRallyPhoto1, codeRallyPhoto2],
  },
  'achieve-codearena': {
    certificate: codeArenaImg,
    photos: [],
  },
};

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'extracurricular', label: 'Extracurricular' },
];

const TYPE_STYLE = {
  achievements: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', label: 'Achievement' },
  achievement: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', label: 'Achievement' },
  extracurricular: { color: '#93c5fd', bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.2)', label: 'Extracurricular' },
  certifications: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', label: 'Certification' },
  certificate: { color: '#60a5fa', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', label: 'Certification' },
};

/* ── Lightbox ──────────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }) {
  const handleKey = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );
  React.useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Full-size view: ${alt}`}
    >
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(11,31,56,0.9)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        <X size={18} />
      </button>
      <img
        src={src}
        alt={alt}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
        loading="lazy"
      />
    </div>
  );
}

/* ── Achievement Image Gallery ─────────────────────────────────── */
function AchievementGallery({ itemId, imageAlt }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const assets = ACHIEVEMENT_ASSETS[itemId];

  if (!assets || !assets.certificate) return null;

  const openLightbox = (src, alt) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      <div className="achievement-gallery" style={{ marginBottom: '1rem' }}>
        {/* Primary certificate image */}
        <div
          className="gallery-main"
          onClick={() => openLightbox(assets.certificate, `${imageAlt} — Certificate`)}
          role="button"
          tabIndex={0}
          aria-label={`View certificate for ${imageAlt} in full size`}
          onKeyDown={(e) => e.key === 'Enter' && openLightbox(assets.certificate, `${imageAlt} — Certificate`)}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={assets.certificate}
              alt={`${imageAlt} — Certificate`}
              style={{
                width: '100%',
                height: '160px',
                objectFit: 'cover',
                display: 'block',
              }}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '8px',
                background: 'rgba(7,20,38,0.8)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                padding: '4px 6px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.68rem',
                color: 'var(--accent-light)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <ZoomIn size={11} />
              Certificate
            </div>
          </div>
        </div>

        {/* Supporting photos row */}
        {assets.photos && assets.photos.length > 0 && (
          <div className="gallery-thumbs">
            {assets.photos.map((photo, idx) => (
              <div
                key={idx}
                className="gallery-thumb"
                onClick={() => openLightbox(photo, `${imageAlt} — Photo ${idx + 1}`)}
                role="button"
                tabIndex={0}
                aria-label={`View competition photo ${idx + 1} for ${imageAlt}`}
                onKeyDown={(e) =>
                  e.key === 'Enter' && openLightbox(photo, `${imageAlt} — Photo ${idx + 1}`)
                }
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={photo}
                    alt={`${imageAlt} — Competition Photo ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '90px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      right: '4px',
                      background: 'rgba(7,20,38,0.75)',
                      borderRadius: '4px',
                      padding: '2px 5px',
                      fontSize: '0.62rem',
                      color: 'var(--text-secondary)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    Photo {idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />
      )}
    </>
  );
}

/* ── Main Achievements Section ─────────────────────────────────── */
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
      {/* Background orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-60px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-label">Recognition &amp; Growth</span>
          <h2 className="section-title">Certifications, Achievements &amp; Activities</h2>
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
            const isAchievement = item.category === 'achievements' || item.type === 'achievements';
            const hasGallery = isAchievement && ACHIEVEMENT_ASSETS[item.id];

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
                {/* Image gallery for achievement items */}
                {hasGallery && (
                  <AchievementGallery
                    itemId={item.id}
                    imageAlt={item.imageAlt || item.title}
                  />
                )}

                {/* Legacy single image (non-achievement items) */}
                {!hasGallery && item.image && (
                  <div
                    style={{
                      marginBottom: '1rem',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      height: '180px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-color)',
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
