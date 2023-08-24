// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        'title': 'Designer & Developer',
        'about':  'About',
        'bio': ' I am  developer with a passion for the convergence of technology and design. I combine my technical expertise with a creative mindset to craft innovative and intuitive digital solutions.I am commited to staying at the forefront of emerging technologies which drives my constant pursuit of knowledge and exploration.',
        'work': 'Work',
        'comingsoon': 'Coming soon',
        'chat': 'Let\'s chat',
        'bpnp': '1. Between Past & Present',
        'bpnp-desc': 'Development with Webflow | 2021',
        'rfc': '2. Roots For Change',
        'rfc-desc': 'Brand Identity + Infographics | 2019',
        'port-desc':' Design with Figma & Development with React | 2023'

    }
  },
  fr: {
    translation: {
        'title': 'Développeuse et Designer',
        'about':  'À propos',
        'bio': 'Je suis une développeuse passionnée par la convergence de la technologie et du design. Je combine mon expertise technique avec un esprit créatif pour créer des solutions numériques innovantes et intuitives. Je m\'engage à rester à la pointe des technologies émergentes, ce qui me pousse à rechercher constamment la connaissance et l\'exploration.',
        'work': 'Projets',
        'comingsoon': 'À venir',
        'chat': 'Contactez-moi',
        'bpnp': '1. Entre le Passé et le Présent',
        'bpnp-desc': 'Développement avec Webflow | 2021',
        'rfc': '2. Des racines pour le changement',
        'rfc-desc': 'Identité de marque + Infographie | 2021',
        'port-desc':'Conception avec Figma et développement avec React | 2023'


    }
  },
  // Add more language translations as needed
  // For example, add 'fr' for French and provide the French translations in a similar format.
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set the default language
    interpolation: {
      escapeValue: false // React already escapes text
    }
  });

export default i18n;
