import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';
import { trackEvent } from '../../utils/analytics';
import '../../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    consent: false,
    honeypot: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.email) {
      nextErrors.email = 'Email requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Email invalide';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      nextErrors.message = 'Message trop court (min. 10 caractères)';
    }

    if (!formData.consent) {
      nextErrors.consent = 'Vous devez accepter la politique de confidentialité';
    }

    if (formData.honeypot) {
      nextErrors.honeypot = 'Spam détecté';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitStatus(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xnnjklvn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _replyto: formData.email,
          message: formData.message,
          _subject: 'Nouveau message depuis le portfolio'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', message: '', consent: false, honeypot: '' });
        setErrors({});
        trackEvent('form_submit_success', { source: 'contact_form' });
      } else {
        setSubmitStatus('error');
        trackEvent('form_submit_error', { source: 'contact_form', status: response.status });
      }
    } catch (error) {
      setSubmitStatus('error');
      trackEvent('form_submit_error', { source: 'contact_form', status: 'network' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Contactez-moi</h2>
          <p className="contact__cta">
            <strong>Travaillons ensemble</strong> — Discutons de votre projet ou de votre besoin.
            <span className="contact__cta-actions">
              <a
                href={`mailto:${personalInfo.email}?subject=Contact%20portfolio%20-%20Projet`}
                className="contact__cta-btn"
                aria-label="Envoyer un email pour travailler ensemble"
                onClick={() => trackEvent('cta_email_click', { location: 'contact_header' })}
              >
                Écrire un email
              </a>
              <a
                href="#contact-form"
                className="contact__cta-link"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                - Ou utiliser le formulaire
              </a>
            </span>
          </p>
          <p className="contact__subtitle">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="contact__content">
          {/* Informations de contact */}
          <div className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Téléphone</h3>
              <a href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone}
              </a>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Localisation</h3>
              <p>{personalInfo.location}</p>
            </div>

            <div className="contact__social">
              <h3>Réseaux sociaux</h3>
              <div className="contact__social-links">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__social-link"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact__form-wrapper">
            <form className="contact__form" id="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Honeypot anti-spam */}
              <div className="contact__honeypot" aria-hidden="true">
                <label htmlFor="website">Ne pas remplir ce champ</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email">Votre adresse email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <p className="contact__field-error">{errors.email}</p>}
              </div>

              <div className="contact__form-group">
                <label htmlFor="message">Votre message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows="6"
                  required
                  aria-invalid={Boolean(errors.message)}
                ></textarea>
                {errors.message && <p className="contact__field-error">{errors.message}</p>}
              </div>

              <div className="contact__form-consent">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
<label htmlFor="consent">
  J'ai lu et j'accepte la{' '}
  <Link to="/politique-confidentialite">
    politique de confidentialité
  </Link>
</label>
              </div>
              {errors.consent && <p className="contact__field-error">{errors.consent}</p>}

              {submitStatus === 'success' && (
                <div className="contact__message contact__message--success" role="status" aria-live="polite">
                  <i className="fas fa-check-circle"></i>
                  Merci ! Votre message a été envoyé avec succès.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__message contact__message--error" role="alert" aria-live="assertive">
                  <div className="contact__message-row">
                    <i className="fas fa-exclamation-circle"></i>
                    <span>Une erreur est survenue. Veuillez réessayer.</span>
                  </div>
                  <button
                    type="button"
                    className="contact__fallback"
                    onClick={() => {
                      trackEvent('cta_email_fallback', { source: 'contact_form' });
                      window.location.href = `mailto:${personalInfo.email}?subject=Contact%20portfolio%20-%20Fallback&body=${encodeURIComponent(formData.message || '')}`;
                    }}
                  >
                    Utiliser l'email direct
                  </button>
                </div>
              )}

              <button 
                type="submit" 
                className="contact__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;