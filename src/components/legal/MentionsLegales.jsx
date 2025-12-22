import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import '../../styles/components/Legalpages.css';

const MentionsLegales = () => {
  const currentYear = new Date().getFullYear();
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://';

  return (
    <div className="legal-page">
      <div className="legal-page__container">
        <h1 className="legal-page__title">Mentions Légales</h1>
        <p className="legal-page__update">Dernière mise à jour : {currentYear}</p>

        <section className="legal-block">
          <h2>1. Édition du site</h2>
          <p>Le présent site, accessible à l'URL {siteUrl} (le « Site »), est édité par :</p>
          <p><strong>{personalInfo.name}</strong>, résidant à {personalInfo.location}, de nationalité française.</p>
        </section>

        <section className="legal-block">
          <h2>2. Hébergement</h2>
          <p>
            Le Site est hébergé par la société <strong>OVH</strong>, SAS au capital de 10 174 560 €,
            immatriculée au RCS de Lille Métropole sous le n° 424 761 419, dont le siège social est
            situé 2 rue Kellermann - 59100 Roubaix - France.
          </p>
          <p>Téléphone : +33 (0)9 72 10 10 07</p>
        </section>

        <section className="legal-block">
          <h2>3. Directeur de publication</h2>
          <p>Le Directeur de la publication du Site est <strong>{personalInfo.name}</strong>.</p>
        </section>

        <section className="legal-block">
          <h2>4. Nous contacter</h2>
          <p>Par téléphone : {personalInfo.phone}</p>
          <p>
            Par email :{' '}
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </p>
          <p>Par courrier : {personalInfo.location}</p>
        </section>

        <section className="legal-block">
          <h2>5. Données personnelles</h2>
          <p>
            Le traitement de vos données à caractère personnel est régi par notre{' '}
            <a href="/politique-confidentialite">Politique de Confidentialité</a>, disponible depuis la section
            dédiée du Site, conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        <section className="legal-block">
          <h2>6. Cookies</h2>
          <p>
            Le Site utilise des cookies pour son bon fonctionnement. Vous pouvez désactiver les
            cookies depuis les paramètres de votre navigateur.
          </p>
          <p>
            Nous utilisons uniquement des cookies essentiels pour mémoriser vos préférences (mode
            clair/sombre) et aucun cookie publicitaire.
          </p>
        </section>

        <section className="legal-block">
          <h2>7. Droits de propriété intellectuelle</h2>
          <p>
            Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…)
            font l'objet d'une protection par le Code de la propriété intellectuelle et plus
            particulièrement par le droit d'auteur.
          </p>
          <p>
            Les logos et marques des entreprises mentionnées sur ce site sont la propriété de leurs
            détenteurs respectifs.
          </p>
          <p>
            L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction,
            publication, copie des différents contenus.
          </p>
        </section>

        <section className="legal-block">
          <h2>8. Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible et le site est
            périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des
            omissions ou des lacunes.
          </p>
          <p>
            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci
            de bien vouloir le signaler par email en décrivant le problème de la manière la plus
            précise possible.
          </p>
          <p>
            Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule
            responsabilité.
          </p>
        </section>

        <section className="legal-block">
          <h2>9. Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens vers d'autres sites internet ou d'autres ressources
            disponibles sur Internet. Je n'ai pas la capacité de vérifier le contenu des sites
            ainsi visités, et n'assume donc aucune responsabilité de ce fait. Merci de me signaler
            tout lien brisé ou contenu illicite constaté.
          </p>
        </section>

        <section className="legal-block">
          <h2>10. Droit applicable et juridiction compétente</h2>
          <p>
            La législation française s'applique au présent site. En cas de litige, les tribunaux
            français seront compétents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;