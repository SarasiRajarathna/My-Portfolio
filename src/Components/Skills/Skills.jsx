import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skillCategories } from '../../data/portfolioData';

function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [sectionRef, isVisible] = useScrollAnimation();

  const currentSkills = skillCategories.find((c) => c.id === activeCategory)?.skills || [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-label="Skills"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-100px',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section heading */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3rem' }}>
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">My Skills</h2>
          <div className="section-underline" />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '540px', fontSize: '1rem' }}>
            A curated set of technologies and tools across frontend, backend, design, quality assurance, and development workflows.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className={`fade-up delay-200 ${isVisible ? 'visible' : ''}`}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeCategory === id}
              aria-controls={`skills-panel-${id}`}
              id={`skills-tab-${id}`}
              className={`filter-btn ${activeCategory === id ? 'active' : ''}`}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          id={`skills-panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`skills-tab-${activeCategory}`}
          className={`fade-up delay-300 ${isVisible ? 'visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '0.75rem',
          }}
        >
          {currentSkills.map(({ name, icon }, index) => (
            <div
              key={name}
              className="skill-chip"
              style={{
                justifyContent: 'center',
                padding: '0.75rem 0.5rem',
                borderRadius: 'var(--radius-md)',
                flexDirection: 'column',
                gap: '0.5rem',
                transitionDelay: `${index * 30}ms`,
              }}
              role="listitem"
            >
              <span style={{ fontSize: '1.25rem' }} aria-hidden="true">{icon}</span>
              <span style={{ textAlign: 'center', fontSize: '0.8rem' }}>{name}</span>
            </div>
          ))}
        </div>

        {/* Proficiency note */}
        <p
          className={`fade-up delay-500 ${isVisible ? 'visible' : ''}`}
          style={{
            marginTop: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
          }}
        >
          * Skills listed represent areas of active learning and project experience. Proficiency levels vary by technology.
        </p>
      </div>
    </section>
  );
}

export default Skills;