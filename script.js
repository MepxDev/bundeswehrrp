// Language Switcher
const languageSelect = document.getElementById('languageSelect');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    join: 'Join Now',
    rules: 'Rules',
    contact: 'Contact',
    hero_title: 'Welcome to BundeswehrRP!',
    hero_text: 'Join our unique Roblox roleplay server.',
    join_button: 'Join Now',
    about_title: 'About Us',
    about_text: 'We offer you a unique roleplay experience in the world of the Bundeswehr.',
    rules_title: 'Rules',
    rules_text: 'Before you join, read our server rules and make sure you understand them.',
    contact_title: 'Contact',
    contact_text: 'Have questions? Contact us here.',
    footer_note: 'Not officially affiliated with the Bundeswehr',
  },
  de: {
    home: 'Startseite',
    about: 'Über Uns',
    join: 'Mitmachen',
    rules: 'Regeln',
    contact: 'Kontakt',
    hero_title: 'Willkommen bei BundeswehrRP!',
    hero_text: 'Tritt unserem einzigartigen Roblox Roleplay-Server bei.',
    join_button: 'Jetzt Mitmachen',
    about_title: 'Über Uns',
    about_text: 'Wir bieten dir ein einzigartiges Roleplay-Erlebnis in der Welt der Bundeswehr.',
    rules_title: 'Regeln',
    rules_text: 'Bevor du beitrittst, lese unsere Server-Regeln und stelle sicher, dass du sie verstehst.',
    contact_title: 'Kontakt',
    contact_text: 'Hast du Fragen? Kontaktiere uns hier.',
    footer_note: 'Nicht offiziell mit der Bundeswehr verbunden',
  },
};

languageSelect.addEventListener('change', (event) => {
  const selectedLanguage = event.target.value;
  translatePage(selectedLanguage);
});

function translatePage(language) {
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}

// Default language set to German
translatePage('de');

