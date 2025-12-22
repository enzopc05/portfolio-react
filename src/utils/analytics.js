// Lightweight analytics helper for Plausible or Umami
// Uses environment variables to optionally load Plausible
// REACT_APP_PLAUSIBLE_DOMAIN (required) and REACT_APP_PLAUSIBLE_SRC (optional)

const getWindow = () => (typeof window !== 'undefined' ? window : undefined);

export const loadAnalytics = () => {
  const win = getWindow();
  if (!win) return;

  const domain = process.env.REACT_APP_PLAUSIBLE_DOMAIN;
  if (!domain) return; // opt-in only

  // Avoid double-injecting
  if (document.querySelector('script[data-analytics="plausible"]')) return;

  const script = document.createElement('script');
  script.setAttribute('data-analytics', 'plausible');
  script.setAttribute('data-domain', domain);
  script.defer = true;
  script.src = process.env.REACT_APP_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js';
  document.head.appendChild(script);
};

export const trackEvent = (name, properties = {}) => {
  const win = getWindow();
  if (!win) return;

  // Plausible
  if (typeof win.plausible === 'function') {
    win.plausible(name, { props: properties });
  }

  // Umami
  if (win.umami && typeof win.umami.track === 'function') {
    win.umami.track(name, properties);
  }
};
