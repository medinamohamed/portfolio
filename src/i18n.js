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
        'comingsoon': 'Coming soon'

    }
  },
  fr: {
    translation: {
        'title': 'Développeuse et Designer d\'interfaces',
        'about':  'À propos',
        'bio': 'Je suis une développeuse passionnée par la convergence de la technologie et du design. Je combine mon expertise technique avec un esprit créatif pour créer des solutions numériques innovantes et intuitives. Je m\'engage à rester à la pointe des technologies émergentes, ce qui me pousse à rechercher constamment la connaissance et l\'exploration.',
        'work': 'Projets',
        'comingsoon': 'À venir'

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
