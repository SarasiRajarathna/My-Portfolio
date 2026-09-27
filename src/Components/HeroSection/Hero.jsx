import React, { useEffect, useRef, useState } from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, MediumIcon, BehanceIcon } from '../icons/SocialIcons';
import profileImg from '../../assets/Profile Pic.jpg';
import { CV_URL, CONTACT } from '../../data/portfolioData';

const TITLES = [
  'UI/UX Designer',
  'Full-Stack Developer',
  'QA Engineer',
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const imageRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  // Floating animation on image load
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    if (imgLoaded && imageRef.current) {
      imageRef.current.classList.add('loaded');
    }
  }, [imgLoaded]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero — Introduction"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, #0d0d1a 100%)',
      }}
    >
      {/* Background decorations */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* LEFT — Text */}
          <div className="hero-text-left" style={{ maxWidth: '620px' }}>
            {/* Greeting chip */}
            <div
              className="inline-flex items-center gap-2 mb-4"
              style={{
                padding: '0.35rem 1rem',
                background: 'var(--accent-dim)',
                border: '1px solid var(--border-accent)',
                borderRadius: '100px',
                fontSize: '0.82rem',
                fontWeight: 500,
                color: 'var(--accent-light)',
              }}
            >
              <span style={{ fontSize: '0.85rem' }}>👋</span>
              Hello, I'm Sarasi
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              Sarasi{' '}
              <span className="gradient-text">Rajarathna</span>
            </h1>

            {/* Typewriter title */}
            <div
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                minHeight: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <span>Aspiring </span>
              <span style={{ color: 'var(--accent-light)', fontWeight: 600 }}>
                {displayed}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.1em',
                  background: 'var(--accent-light)',
                  borderRadius: '1px',
                  animation: 'typewriter-cursor 0.8s ease infinite',
                  verticalAlign: 'middle',
                  marginLeft: '1px',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '500px',
              }}
            >
              Information Systems undergraduate at Sabaragamuwa University of Sri Lanka, passionate about crafting elegant digital experiences through full-stack development, UI/UX design, and quality-driven engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-3">
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="btn-primary"
                id="hero-view-projects-btn"
              >
                View My Projects
                <ArrowRight size={16} />
              </a>
              <a
                href={CV_URL}
                download
                className="btn-secondary"
                id="hero-download-cv-btn"
                aria-label="Download CV PDF"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-3 mt-5">
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Find me on
              </span>
              <div className="flex gap-2">
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.4rem 0.75rem' }}
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.4rem 0.75rem' }}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={CONTACT.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.4rem 0.75rem' }}
                  aria-label="Medium"
                >
                  <MediumIcon size={16} />
                </a>
                <a
                  href={CONTACT.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ padding: '0.4rem 0.75rem' }}
                  aria-label="Behance"
                >
                  <BehanceIcon size={16} />
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="btn-ghost"
                  style={{ padding: '0.4rem 0.75rem' }}
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Profile Image */}
          <div
            ref={imageRef}
            className="hero-image-right"
            style={{ flexShrink: 0, position: 'relative' }}
            aria-hidden="true"
          >
            {/* Outer glow ring */}
            <div
              style={{
                position: 'absolute',
                inset: '-16px',
                borderRadius: '50%',
                background:
                  'conic-gradient(from 0deg, var(--accent), var(--accent-light), #c084fc, var(--accent))',
                opacity: 0.25,
                filter: 'blur(12px)',
              }}
            />
            {/* Image border ring */}
            <div
              className="profile-image-container"
              style={{
                width: 'clamp(240px, 22vw, 320px)',
                height: 'clamp(240px, 22vw, 320px)',
                borderRadius: '50%',
                padding: '3px',
                background: 'linear-gradient(135deg, var(--accent), var(--accent-light), #c084fc)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <img
                src={profileImg}
                alt="Sarasi Rajarathna — Profile"
                onLoad={() => setImgLoaded(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  background: 'var(--bg-card)',
                }}
              />
            </div>

            {/* Skill indicator badges */}
            <div
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '-30px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: '#60a5fa' }}>⚛️</span> Full-Stack Dev
            </div>
            <div
              style={{
                position: 'absolute',
                top: '10%',
                left: '-30px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '0.5rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span>🎭</span> UI/UX Design
            </div>
          </div>
        </div>
      </div>

      {/* Hero responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            display: flex;
            justify-content: center;
            order: -1;
          }
          .hero-grid > div:last-child > div[style*="absolute"][style*="right"] {
            right: 0 !important;
          }
          .hero-grid > div:last-child > div[style*="absolute"][style*="left"] {
            left: 0 !important;
          }
          .hero-text-left .flex.flex-wrap {
            justify-content: center;
          }
          .hero-text-left .flex.items-center.gap-3.mt-5 {
            justify-content: center;
          }
          .hero-text-left p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-text-left .inline-flex {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;