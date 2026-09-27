import React from 'react';
import { ExternalLink, Play, Eye } from 'lucide-react';
import { Github, Figma } from '../icons/SocialIcons';

// Import existing project images from src/assets
import agroguardImg from '../../assets/AgroGuard-AI.png';
import calculatorImg from '../../assets/Calculator Hub.jpg';
import govcareImg from '../../assets/GovCare.png';
import lankawayImg from '../../assets/LankaWay.png';
import orixaImg from '../../assets/ORIXA.png';
import ridegoImg from '../../assets/RideGo.png';
import velouraImg from '../../assets/Veloura.png';
import vitadermaImg from '../../assets/Vita-Derma.png';

// Map project IDs to verified existing asset images
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
  'full-stack': { label: 'Full-Stack', color: '#60a5fa', bg: 'rgba(59,130,246,0.1)' },
  frontend: { label: 'Frontend', color: '#38bdf8', bg: 'rgba(56,189,248,0.1)' },
  'ui-ux': { label: 'UI/UX', color: '#c084fc', bg: 'rgba(168,85,247,0.1)' },
  uiux: { label: 'UI/UX', color: '#c084fc', bg: 'rgba(168,85,247,0.1)' },
};

function ProjectCard({ project, onViewDetails }) {
  const image = PROJECT_IMAGES[project.id] || project.image || null;
  const catMeta = CATEGORY_META[project.category] || CATEGORY_META['full-stack'];
  const technologies = project.technologies || project.designTools || [];
  const isDesignProject = project.category === 'ui-ux' || project.category === 'uiux';
  const isOngoing = Boolean(project.status && project.status.toLowerCase().includes('ongoing'));

  return (
    <article
      className="project-card"
      aria-label={`Project: ${project.title}`}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Image / Placeholder */}
      <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
        {image ? (
          <img
            src={image}
            alt={project.imageAlt || project.title}
            className="project-image"
            loading="lazy"
          />
        ) : (
          <div className="project-img-placeholder">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(234,88,12,0.15)',
                  border: '1px solid rgba(234,88,12,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                {project.category === 'full-stack'
                  ? '⚛️'
                  : project.category === 'frontend'
                  ? '💻'
                  : '🎭'}
              </div>
              <span
                style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}
              >
                {project.title}
              </span>
            </div>
          </div>
        )}

        {/* Category badge overlay */}
        <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
          <span
            style={{
              padding: '0.2rem 0.625rem',
              borderRadius: '100px',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: catMeta.color,
              background: catMeta.bg,
              border: `1px solid ${catMeta.color}44`,
              backdropFilter: 'blur(8px)',
            }}
          >
            {catMeta.label}
          </span>
        </div>

        {/* Ongoing Project badge overlay */}
        {isOngoing && (
          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
            <span
              style={{
                padding: '0.2rem 0.625rem',
                borderRadius: '100px',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#fbbf24',
                background: 'rgba(251, 191, 36, 0.18)',
                border: '1px solid rgba(251, 191, 36, 0.45)',
                backdropFilter: 'blur(8px)',
              }}
            >
              Ongoing Project
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              {project.title}
            </h3>
            {isOngoing && !image && (
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.12)',
                  padding: '0.1rem 0.45rem',
                  borderRadius: '100px',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                }}
              >
                Ongoing
              </span>
            )}
          </div>
          {project.subtitle && (
            <p style={{ fontSize: '0.78rem', color: 'var(--accent-light)', fontWeight: 500 }}>
              {project.subtitle}
            </p>
          )}
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        {technologies.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="tech-badge">+{technologies.length - 5}</span>
            )}
          </div>
        )}

        {/* Actions */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {/* For UI/UX Design projects: View Figma Design button */}
          {isDesignProject && project.figma ? (
            <>
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.45rem 0.875rem', fontSize: '0.8rem', flex: 1, textDecoration: 'none' }}
                aria-label={`View Figma Design for ${project.title}`}
              >
                <Figma size={14} />
                View Figma Design
              </a>

              <button
                className="btn-ghost"
                style={{ padding: '0.45rem 0.75rem' }}
                onClick={() => onViewDetails(project)}
                id={`view-details-${project.id}`}
                aria-label={`View details for ${project.title}`}
                title="View Details"
              >
                <Eye size={15} />
              </button>
            </>
          ) : (
            <>
              {/* Development projects: View Details as primary */}
              <button
                className="btn-primary"
                style={{ padding: '0.45rem 0.875rem', fontSize: '0.8rem', flex: 1 }}
                onClick={() => onViewDetails(project)}
                id={`view-details-${project.id}`}
                aria-label={`View details for ${project.title}`}
              >
                <Eye size={14} />
                View Details
              </button>

              {/* GitHub link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.45rem 0.75rem' }}
                  aria-label={`GitHub repository for ${project.title}`}
                  title="View on GitHub"
                >
                  <Github size={15} />
                </a>
              )}

              {/* Live demo link */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.45rem 0.75rem', color: 'var(--accent-light)' }}
                  aria-label={`Live demo of ${project.title}`}
                  title="Live Website"
                >
                  <ExternalLink size={15} />
                </a>
              )}

              {/* Figma link (if on development project) */}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.45rem 0.75rem' }}
                  aria-label={`Figma design for ${project.title}`}
                  title="Figma Design"
                >
                  <Figma size={15} />
                </a>
              )}

              {/* Prototype link */}
              {project.prototype && (
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.45rem 0.75rem' }}
                  aria-label={`Prototype for ${project.title}`}
                  title="View Prototype"
                >
                  <Play size={15} />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
