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
    join_title: 'Welcome to BundeswehrRP!',
    join_text: 'Step-by-step guide to joining us.',
    join_username: 'Username',
    join_email: 'Email Address',
    join_age: 'Age',
    join_button: 'Join Now',
    footer_note: 'Not officially affiliated with the Bundeswehr',
  },
  de: {
    home: 'Startseite',
    about: 'Über Uns',
    join: 'Mitmachen',
    rules: 'Regeln',
    contact: 'Kontakt',
    join_title: 'Willkommen bei BundeswehrRP!',
    join_text: 'Schritt-für-Schritt Anleitung, um uns beizutreten.',
    join_username: 'Benutzername',
    join_email: 'E-Mail-Adresse',
    join_age: 'Alter',
    join_button: 'Beitreten',
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

// Handle form submission
const form = document.getElementById('joinForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  alert(`Vielen Dank für deine Anmeldung, ${username}! Du wirst in Kürze kontaktiert.`);
  form.reset();
});

