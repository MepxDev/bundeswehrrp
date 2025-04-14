const translations = {
  de: {
    home: "Startseite",
    about: "Über Uns",
    join: "Mitmachen",
    rules: "Regeln",
    contact: "Kontakt",
    about_title: "Willkommen bei BundeswehrRP!",
    about_text: "Erlebe die Bundeswehr auf Roblox und werde Teil unserer Community.",
    footer_note: "Nicht offiziell mit der Bundeswehr verbunden",

    // Join Page
    join_title: "Mitmachen bei BundeswehrRP",
    join_description: "Schritt-für-Schritt Anleitung, um uns beizutreten.",
    username_label: "Benutzername",
    email_label: "E-Mail-Adresse",
    age_label: "Alter",
    submit_button: "Beitreten"
  },
  en: {
    home: "Home",
    about: "About Us",
    join: "Join",
    rules: "Rules",
    contact: "Contact",
    about_title: "Welcome to BundeswehrRP!",
    about_text: "Experience the Bundeswehr on Roblox and join our community.",
    footer_note: "Not officially affiliated with the Bundeswehr",

    // Join Page
    join_title: "Join BundeswehrRP",
    join_description: "Step-by-step guide to join us.",
    username_label: "Username",
    email_label: "Email Address",
    age_label: "Age",
    submit_button: "Join Now"
  }
};

function updateLanguage(language) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[language] && translations[language][key]) {
      el.textContent = translations[language][key];
    }
  });

  localStorage.setItem("lang", language);
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("languageSelect");
  const savedLang = localStorage.getItem("lang") || "de";
  select.value = savedLang;
  updateLanguage(savedLang);

  select.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });
});
