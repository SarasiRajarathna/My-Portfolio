import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ui-ux', label: 'UI/UX' },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sectionRef, isVisible] = useScrollAnimation();

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter || (activeFilter === 'ui-ux' && p.category === 'uiux'));

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        aria-label="Projects"
        style={{
          padding: '6rem 0',
          background: 'var(--bg-secondary)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* BG decoration */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-60px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
          {/* Heading */}
          <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3rem' }}>
            <span className="section-label">What I've Built</span>
            <h2 className="section-title">My Projects</h2>
            <div className="section-underline" />
            <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', fontSize: '1rem' }}>
              A collection of full-stack applications, civic tech solutions, and UI/UX design platforms.
            </p>
          </div>

          {/* Filter buttons */}
          <div
            className={`fade-up delay-200 ${isVisible ? 'visible' : ''}`}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
            role="tablist"
            aria-label="Project categories"
          >
            {FILTERS.map(({ id, label }) => (
              <button
                key={id}
                role="tab"
                aria-selected={activeFilter === id}
                className={`filter-btn ${activeFilter === id ? 'active' : ''}`}
                onClick={() => setActiveFilter(id)}
                id={`project-filter-${id}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div
            className={`fade-up delay-300 ${isVisible ? 'visible' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
            role="list"
            aria-live="polite"
            aria-label="Projects list"
          >
            {filtered.map((project, i) => (
              <div
                key={project.id}
                role="listitem"
                style={{
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              </div>
            ))}
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
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Projects;