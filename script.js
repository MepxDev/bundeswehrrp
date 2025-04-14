const translations = {
  de: {
    home: "Startseite",
    join: "Mitmachen",
    join_title: "Mitmachen bei BundeswehrRP",
    join_description: "Schritt-für-Schritt Anleitung, um uns beizutreten.",
    username_label: "Benutzername",
    email_label: "E-Mail-Adresse",
    age_label: "Alter",
    submit_button: "Beitreten",
    footer_note: "Nicht offiziell mit der Bundeswehr verbunden",
    welcome_title: "Willkommen bei BundeswehrRP!",
    welcome_subtitle: "Erlebe die Bundeswehr auf Roblox und werde Teil unserer Community.",
    learn_more: "Mehr erfahren"
  },
  en: {
    home: "Home",
    join: "Join",
    join_title: "Join BundeswehrRP",
    join_description: "Step-by-step guide to join us.",
    username_label: "Username",
    email_label: "Email Address",
    age_label: "Age",
    submit_button: "Join Now",
    footer_note: "Not officially affiliated with Bundeswehr",
    welcome_title: "Welcome to BundeswehrRP!",
    welcome_subtitle: "Experience the Bundeswehr on Roblox and become part of our community.",
    learn_more: "Learn More"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("languageSelect");
  const savedLang = localStorage.getItem("lang") || "de";
  select.value = savedLang;
  updateLanguage(savedLang);

  select.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("lang", lang);
    updateLanguage(lang);
  });
});

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang] && translations[lang][key];
    if (text) {
      el.textContent = text;
    }
  });
}
