import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download, ChevronRight } from 'lucide-react';
import { CV_URL } from '../../data/portfolioData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll listener
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-wrapper flex items-center justify-between" style={{ maxWidth: '1200px' }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
            aria-label="Sarasi Rajarathna — Home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-light))' }}
            >
              SR
            </div>
            <span className="hidden sm:block text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Sarasi Rajarathna
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                    style={{ color: isActive ? 'var(--accent-light)' : 'var(--text-secondary)' }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-light))' }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CV_URL}
              download
              className="btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.82rem' }}
              aria-label="Download CV"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
            style={{ color: 'var(--text-primary)', background: mobileOpen ? 'rgba(255,255,255,0.08)' : 'transparent' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-lg"
          style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)' }}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <div className="mb-4 px-2">
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--accent-light)' }}>
            Navigation
          </p>
        </div>

        {NAV_LINKS.map(({ label, href }) => {
          const id = href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                color: isActive ? 'var(--accent-light)' : 'var(--text-secondary)',
                background: isActive ? 'var(--accent-dim)' : 'transparent',
                border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
              <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.3 }} />
            </a>
          );
        })}

        <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href={CV_URL}
            download
            className="btn-primary w-full justify-center"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
