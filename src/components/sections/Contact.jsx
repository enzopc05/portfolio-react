import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Veuillez accepter la politique de confidentialité');
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
        setFormData({ email: '', message: '', consent: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Contactez-moi</h2>
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
            <form className="contact__form" onSubmit={handleSubmit}>
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
                />
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
                ></textarea>
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
                  <a href="/rgpd" target="_blank" rel="noopener noreferrer">
                    politique de confidentialité
                  </a>
                </label>
              </div>

              {submitStatus === 'success' && (
                <div className="contact__message contact__message--success">
                  <i className="fas fa-check-circle"></i>
                  Merci ! Votre message a été envoyé avec succès.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__message contact__message--error">
                  <i className="fas fa-exclamation-circle"></i>
                  Une erreur est survenue. Veuillez réessayer.
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