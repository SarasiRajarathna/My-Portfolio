import React, { useEffect, useCallback } from 'react';
import { X, ExternalLink, Play, Code2, Palette } from 'lucide-react';
import { Github, Figma } from '../icons/SocialIcons';

// Import images for modal preview
import agroguardImg from '../../assets/AgroGuard-AI.png';
import calculatorImg from '../../assets/Calculator Hub.jpg';
import govcareImg from '../../assets/GovCare.png';
import lankawayImg from '../../assets/LankaWay.png';
import orixaImg from '../../assets/ORIXA.png';
import ridegoImg from '../../assets/RideGo.png';
import velouraImg from '../../assets/Veloura.png';
import vitadermaImg from '../../assets/Vita-Derma.png';

const PROJECT_IMAGES = {
  govcare: govcareImg,
  'govcare-uiux': govcareImg,
  veloura: velouraImg,
  fixmycity: null,
  agroguard: agroguardImg,
  orixa: orixaImg,
  vitaderma: vitadermaImg,
  calculatorhub: calculatorImg,
  lankaway: lankawayImg,
  'railways-case-study': null,
  ridego: ridegoImg,
};

const CATEGORY_META = {
  'full-stack': { label: 'Full-Stack Development', icon: <Code2 size={16} />, color: '#60a5fa' },
  frontend: { label: 'Frontend Development', icon: <Code2 size={16} />, color: '#38bdf8' },
  'ui-ux': { label: 'UI/UX Design', icon: <Palette size={16} />, color: '#c084fc' },
  uiux: { label: 'UI/UX Design', icon: <Palette size={16} />, color: '#c084fc' },
};

function ProjectModal({ project, onClose }) {
  const catMeta = CATEGORY_META[project.category] || CATEGORY_META['full-stack'];
  const image = PROJECT_IMAGES[project.id] || project.image || null;
  const isOngoing = Boolean(project.status && project.status.toLowerCase().includes('ongoing'));

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  const technologies = project.technologies || project.designTools || [];
  const features = project.features || [];

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      <div className="modal-content" role="document">
        {/* Header */}
        <div
          style={{
            padding: '1.75rem 1.75rem 1.25rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            position: 'sticky',
            top: 0,
            background: 'var(--bg-secondary)',
            zIndex: 10,
          }}
        >
          <div>
            {/* Category badge & Status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.2rem 0.625rem',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: catMeta.color,
                  background: `${catMeta.color}18`,
                  border: `1px solid ${catMeta.color}33`,
                }}
              >
                {catMeta.icon}
                {catMeta.label}
              </span>

              {isOngoing && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    padding: '0.2rem 0.625rem',
                    borderRadius: '100px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#fbbf24',
                    background: 'rgba(251, 191, 36, 0.15)',
                    border: '1px solid rgba(251, 191, 36, 0.35)',
                  }}
                >
                  Ongoing Project
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {project.title}
            </h2>
            {project.subtitle && (
              <p style={{ color: 'var(--accent-light)', fontSize: '0.9rem', fontWeight: 500, marginTop: '0.2rem' }}>
                {project.subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid var(--border-subtle)',
              background: 'var(--bg-card)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all var(--transition-base)',
            }}
            aria-label="Close project details"
            className="close-btn"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem' }}>
          {/* Project image preview if available */}
          {image && (
            <div
              style={{
                marginBottom: '1.75rem',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                maxHeight: '280px',
              }}
            >
              <img
                src={image}
                alt={project.imageAlt || project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Quick links */}
          {(project.github || project.live || project.figma || project.prototype) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <Figma size={15} /> View Figma Design
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.figma ? "btn-ghost" : "btn-primary"}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <Github size={15} /> GitHub Repository
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={14} /> Live Website
                </a>
              )}
              {project.prototype && (
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                >
                  <Play size={15} /> View Prototype
                </a>
              )}
            </div>
          )}

          {/* Overview */}
          {project.overview && (
            <Section title="Overview">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{project.overview}</p>
            </Section>
          )}

          {/* Problem / Solution (side by side) */}
          {(project.problem || project.solution) && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }} className="modal-two-col">
              {project.problem && (
                <div
                  style={{
                    padding: '1rem',
                    background: 'rgba(239,68,68,0.06)',
                    border: '1px solid rgba(239,68,68,0.15)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div
                  style={{
                    padding: '1rem',
                    background: 'rgba(34,197,94,0.06)',
                    border: '1px solid rgba(34,197,94,0.15)',
                    borderRadius: 'var(--radius-md)',
                  }}
                >
                  <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                    Solution
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* My Contribution */}
          {project.contribution && (
            <Section title="My Contribution">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>{project.contribution}</p>
            </Section>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <Section title="Technologies Used">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.3rem 0.75rem',
                      borderRadius: '100px',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* Features */}
          {features.length > 0 && (
            <Section title="Key Features">
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span style={{ color: 'var(--accent-light)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <style>{`
          .close-btn:hover {
            background: rgba(255,255,255,0.08) !important;
            color: var(--text-primary) !important;
          }
          @media (max-width: 600px) {
            .modal-two-col {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h4
        style={{
          fontSize: '0.78rem',
          fontWeight: 700,
          color: 'var(--accent-light)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '0.625rem',
        }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

export default ProjectModal;
