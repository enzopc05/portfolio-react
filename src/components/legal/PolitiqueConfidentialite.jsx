import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/Legalpages.css';

const PolitiqueConfidentialite = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="legal-page" id="privacy">
      <div className="legal-page__container">
        <h1 className="legal-page__title">Politique de Confidentialité</h1>
        <p className="legal-page__update">Dernière mise à jour : {currentYear}</p>

        <div className="legal-intro">
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), ce document
            détaille comment sont traitées les données personnelles collectées via ce site web.
          </p>
        </div>

        <section className="legal-block">
          <h2>1. Identité du responsable du traitement</h2>
          <p>Responsable du traitement : <strong>{personalInfo.name}</strong></p>
          <p>
            Contact :{' '}
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </p>
        </section>

        <section className="legal-block">
          <h2>2. Données collectées via le formulaire de contact</h2>
          <p>Les données suivantes sont collectées lorsque vous utilisez le formulaire de contact :</p>
          <ul>
            <li>Adresse e-mail</li>
            <li>Contenu du message</li>
            <li>Date et heure de la soumission</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>3. Analytics sans cookie</h2>
          <p>
            Le site peut charger une mesure d'audience respectueuse de la vie privée (Plausible ou Umami).
            Ces solutions sont configurées en mode sans cookie et sans profilage publicitaire. Les
            données collectées sont agrégées (pages vues, événements de clic anonymisés) et ne permettent
            pas de vous identifier. Vous pouvez bloquer ce script via votre bloqueur ou en supprimant la
            variable d'environnement correspondante côté site.
          </p>
        </section>

        <section className="legal-block">
          <h2>4. Finalités du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul>
            <li>Répondre à vos demandes d'information</li>
            <li>Communiquer avec vous concernant votre message</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>5. Base légale du traitement</h2>
          <p>Le traitement de vos données personnelles est fondé sur :</p>
          <ul>
            <li>Votre consentement explicite lors de la soumission du formulaire</li>
            <li>L'intérêt légitime de répondre à vos demandes</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>6. Destinataires des données</h2>
          <p>Vos données personnelles sont transmises à :</p>
          <ul>
            <li>
              <strong>Formspree</strong> (service de gestion de formulaires) qui traite et transmet
              vos messages
            </li>
            <li>
              <strong>{personalInfo.name}</strong>, responsable du site, qui reçoit et traite vos
              demandes
            </li>
          </ul>
          <p>
            Aucune donnée n'est vendue, louée ou partagée avec des tiers à des fins commerciales.
          </p>
          <p>
            Formspree agit en tant que sous-traitant. Vous pouvez consulter leur politique de confidentialité
            et leur DPA (Data Processing Addendum) sur leur site officiel.
          </p>
        </section>

        <section className="legal-block">
          <h2>7. Durée de conservation</h2>
          <p>Vos données personnelles sont conservées pour une durée de :</p>
          <ul>
            <li>1 an après le dernier échange relatif à votre demande</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>8. Transfert de données hors UE</h2>
          <p>
            Les données collectées via le formulaire de contact peuvent être stockées sur des
            serveurs situés hors de l'Union Européenne (via Formspree). Ces transferts sont
            encadrés par des garanties appropriées conformément à la législation européenne.
          </p>
        </section>

        <section className="legal-block">
          <h2>9. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant vos données
            personnelles :
          </p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification de vos données</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-moi à{' '}
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
          </p>
          <p>
            Vous pouvez aussi demander l'export ou la suppression des événements d'audience associés à votre
            navigation si la mesure d'audience est activée. Toute demande sera traitée sous 30 jours.
          </p>
        </section>

        <section className="legal-block">
          <h2>10. Cookies et technologies similaires</h2>
          <p>Ce site utilise uniquement :</p>
          <ul>
            <li>Un cookie de préférence pour mémoriser votre choix de thème (mode jour/nuit)</li>
            <li>Aucun cookie publicitaire ou de tracking n'est utilisé</li>
          </ul>
        </section>

        <section className="legal-block">
          <h2>11. Sécurité des données</h2>
          <p>
            Des mesures de sécurité techniques et organisationnelles sont mises en place pour
            protéger vos données contre tout accès non autorisé, modification, divulgation ou
            destruction.
          </p>
        </section>

        <section className="legal-block">
          <h2>12. Droit de réclamation</h2>
          <p>
            Si vous estimez que le traitement de vos données personnelles n'est pas conforme à la
            réglementation, vous pouvez déposer une réclamation auprès de la Commission Nationale
            de l'Informatique et des Libertés (CNIL).
          </p>
        </section>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;