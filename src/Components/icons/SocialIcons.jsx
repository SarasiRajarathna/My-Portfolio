// Social and brand SVG icons (lucide-react does not include brand logos)
import React from 'react';

export function GithubIcon({ size = 20, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 20, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function FigmaIcon({ size = 20, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zm0-8C4 1.792 5.792 0 8 0h4v8H8C5.792 8 4 6.208 4 4zm8-4h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0zm0 8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V8z" />
    </svg>
  );
}

export function MediumIcon({ size = 20, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export function BehanceIcon({ size = 20, className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.57 6.13c.87 0 1.58.12 2.12.37.54.24.96.6 1.25 1.07.29.47.44 1.05.44 1.74 0 .74-.18 1.37-.53 1.88-.35.51-.87.89-1.55 1.13.88.24 1.54.67 1.99 1.27.45.61.68 1.37.68 2.29 0 .82-.19 1.52-.56 2.1-.38.58-.93 1.02-1.66 1.32-.73.3-1.63.45-2.7.45H0V6.13h6.57zm-.62 4.49c.56 0 1-.12 1.3-.37.31-.25.46-.62.46-1.11 0-.52-.16-.9-.48-1.13-.32-.24-.77-.35-1.35-.35H2.94v2.96h3.01zm.23 5.48c.67 0 1.19-.14 1.55-.42.36-.28.54-.71.54-1.3 0-.6-.19-1.04-.57-1.33-.38-.28-.93-.43-1.65-.43H2.94v3.48h3.24zm11.75-2.06h-5.91c.07.9.38 1.58.94 2.03.56.45 1.28.67 2.16.67.67 0 1.25-.13 1.74-.38.49-.26.85-.57 1.07-.94h2.46c-.4 1.08-1.07 1.94-2.02 2.58-.95.64-2.12.96-3.52.96-1.55 0-2.87-.47-3.95-1.42-1.08-.95-1.62-2.31-1.62-4.08 0-1.74.54-3.11 1.62-4.11 1.08-1 2.39-1.5 3.93-1.5 1.63 0 2.95.51 3.96 1.53 1.01 1.02 1.52 2.45 1.52 4.29 0 .14 0 .26-.01.37zm-2.48-1.89c-.06-.72-.32-1.28-.79-1.68-.47-.4-1.11-.6-1.92-.6-.79 0-1.42.2-1.89.6-.47.4-.74.96-.82 1.68h5.42zm-5.71-4.78h4.74v1.4h-4.74v-1.4z" />
    </svg>
  );
}

// Aliases matching standard names
export const Github = GithubIcon;
export const Linkedin = LinkedinIcon;
export const Figma = FigmaIcon;
export const Medium = MediumIcon;
export const Behance = BehanceIcon;
