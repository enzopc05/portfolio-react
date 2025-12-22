import { useEffect } from 'react';

// Lightweight Meta component for SPA pages (no external dependency)
export default function Meta({
  title = 'Portfolio – Enzo Pace',
  description = 'Portfolio de Enzo Pace – Développeur. Projets, compétences et contact.',
  url = typeof window !== 'undefined' ? window.location.href : undefined,
  image = '/assets/images/og-default.png',
}) {
  useEffect(() => {
    if (title) document.title = title;

    const ensureTag = (selector, makeEl) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = makeEl();
        document.head.appendChild(el);
      }
      return el;
    };

    // Description
    const metaDesc = ensureTag('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    });
    metaDesc.setAttribute('content', description);

    // Open Graph
    const ogTitle = ensureTag('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    });
    ogTitle.setAttribute('content', title);

    const ogDesc = ensureTag('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    });
    ogDesc.setAttribute('content', description);

    const ogType = ensureTag('meta[property="og:type"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:type');
      return m;
    });
    ogType.setAttribute('content', 'website');

    const ogUrl = ensureTag('meta[property="og:url"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:url');
      return m;
    });
    if (url) ogUrl.setAttribute('content', url);

    const ogImage = ensureTag('meta[property="og:image"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:image');
      return m;
    });
    ogImage.setAttribute('content', image);

    // Twitter
    const twCard = ensureTag('meta[name="twitter:card"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'twitter:card');
      return m;
    });
    twCard.setAttribute('content', 'summary_large_image');

    const twTitle = ensureTag('meta[name="twitter:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'twitter:title');
      return m;
    });
    twTitle.setAttribute('content', title);

    const twDesc = ensureTag('meta[name="twitter:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'twitter:description');
      return m;
    });
    twDesc.setAttribute('content', description);

    const twImage = ensureTag('meta[name="twitter:image"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'twitter:image');
      return m;
    });
    twImage.setAttribute('content', image);
  }, [title, description, url, image]);

  return null;
}
