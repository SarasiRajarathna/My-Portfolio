import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin, Medium, Behance } from '../icons/SocialIcons';
import { CONTACT } from '../../data/portfolioData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { href: CONTACT.github, icon: <Github size={18} />, label: 'GitHub' },
  { href: CONTACT.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
  { href: CONTACT.medium, icon: <Medium size={18} />, label: 'Medium' },
  { href: CONTACT.behance, icon: <Behance size={18} />, label: 'Behance' },
  { href: `mailto:${CONTACT.email}`, icon: <Mail size={18} />, label: 'Email' },
];

function scrollToSection(e, href) {
  e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3.5rem 0 1.5rem',
      }}
      aria-label="Footer"
    >
      <div className="section-wrapper">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: 'white',
                }}
              >
                SR
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  H.M.S.B. Rajarathna
                </p>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '300px', marginBottom: '1.25rem' }}>
              Information Systems Undergraduate at Sabaragamuwa University of Sri Lanka. Passionate about building elegant digital experiences.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {SOCIAL.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="btn-ghost"
                  style={{ padding: '0.5rem' }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-light)', marginBottom: '1rem' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollToSection(e, href)}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color var(--transition-base)',
                    }}
                    onMouseOver={e => e.target.style.color = 'var(--accent-light)'}
                    onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-light)', marginBottom: '1rem' }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a
                href={`mailto:${CONTACT.email}`}
                style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color var(--transition-base)' }}
                onMouseOver={e => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color var(--transition-base)' }}
                onMouseOver={e => e.target.style.color = 'var(--text-primary)'}
                onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {CONTACT.phone}
              </a>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © 2026 H.M.S.B. Rajarathna. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
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
              transition: 'all var(--transition-base)',
            }}
            aria-label="Scroll to top"
            onMouseOver={e => {
              e.currentTarget.style.background = 'var(--accent-dim)';
              e.currentTarget.style.borderColor = 'var(--border-accent)';
              e.currentTarget.style.color = 'var(--accent-light)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
