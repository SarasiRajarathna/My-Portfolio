import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CONTACT } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin, Medium, Behance } from '../icons/SocialIcons';

function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build a mailto link with form data as fallback (no backend)
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const SOCIAL_LINKS = [
    {
      href: CONTACT.github,
      icon: <Github size={20} />,
      label: 'GitHub',
      username: 'SarasiRajarathna',
      color: '#f0f0f0',
    },
    {
      href: CONTACT.linkedin,
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      username: 'sarasi-rajarathna',
      color: '#60a5fa',
    },
    {
      href: CONTACT.medium,
      icon: <Medium size={20} />,
      label: 'Medium',
      username: 'Sarasi Rajarathna – Medium',
      color: '#00ab6c',
    },
    {
      href: CONTACT.behance,
      icon: <Behance size={20} />,
      label: 'Behance',
      username: 'Sarasi Rajarathna – Behance',
      color: '#053eff',
    },
    {
      href: `mailto:${CONTACT.email}`,
      icon: <Mail size={20} />,
      label: 'Email',
      username: CONTACT.email,
      color: 'var(--accent-light)',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-label="Contact"
      style={{
        padding: '6rem 0',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* BG orb */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-80px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div className={`fade-up ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-underline" />
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'start' }}
          className="contact-grid"
        >
          {/* LEFT */}
          <div className={`fade-up delay-200 ${isVisible ? 'visible' : ''}`}>
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '0.875rem',
              }}
            >
              Let's{' '}
              <span className="gradient-text">Talk</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem', fontSize: '0.975rem' }}>
              I'm currently available for internship opportunities and open to collaborating on exciting projects. If you'd like to discuss an idea, opportunity, or just connect — feel free to reach out!
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'var(--accent-dim)', border: '1px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', flexShrink: 0 }}>
                  <Mail size={16} />
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color var(--transition-base)' }}
                  onMouseOver={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {CONTACT.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80', flexShrink: 0 }}>
                  <Phone size={16} />
                </div>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none', transition: 'color var(--transition-base)' }}
                  onMouseOver={e => e.target.style.color = 'var(--text-primary)'}
                  onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <MapPin size={16} />
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {CONTACT.location}
                </span>
              </div>
            </div>

            {/* Social cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {SOCIAL_LINKS.map(({ href, icon, label, username, color }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                    color: 'var(--text-secondary)',
                  }}
                  aria-label={`${label}: ${username}`}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = `${color}60`;
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                  }}
                >
                  <span style={{ color, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {label}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      {username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact form */}
          <div className={`fade-up delay-400 ${isVisible ? 'visible' : ''}`}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
              aria-label="Contact form"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: '140px' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ justifyContent: 'center', padding: '0.875rem' }}
                id="contact-submit-btn"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={16} />
                    Opening email client…
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;