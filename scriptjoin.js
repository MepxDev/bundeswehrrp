const langData = {
  de: {
    home: "Startseite",
    about: "Über Uns",
    join: "Mitmachen",
    rules: "Regeln",
    contact: "Kontakt",
    join_title: "Werde Teil von BundeswehrRP",
    join_desc: "Fülle das Formular aus, um dich zu bewerben und ein Teil unseres Teams zu werden.",
    name_label: "Dein Name",
    roblox_label: "Roblox Benutzername",
    age_label: "Alter",
    motivation_label: "Warum möchtest du beitreten?",
    submit_btn: "Absenden",
    footer_note: "Nicht offiziell mit der Bundeswehr verbunden",
    success_message: "Danke! Dein Antrag wurde gesendet."
  },
  en: {
    home: "Home",
    about: "About",
    join: "Join",
    rules: "Rules",
    contact: "Contact",
    join_title: "Join BundeswehrRP",
    join_desc: "Fill out the form to apply and become part of our team.",
    name_label: "Your Name",
    roblox_label: "Roblox Username",
    age_label: "Age",
    motivation_label: "Why do you want to join?",
    submit_btn: "Submit",
    footer_note: "Not officially affiliated with the Bundeswehr",
    success_message: "Thank you! Your application has been submitted."
  }
};

const languageSelect = document.getElementById("languageSelect");
const form = document.getElementById("joinForm");
const message = document.getElementById("formMessage");

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (langData[lang] && langData[lang][key]) {
      el.textContent = langData[lang][key];
    }
  });
}

languageSelect.addEventListener("change", () => {
  const selected = languageSelect.value;
  updateLanguage(selected);
  localStorage.setItem("lang", selected);
});

document.addEventListener("DOMContentLoaded", () => {
  const storedLang = localStorage.getItem("lang") || "de";
  languageSelect.value = storedLang;
  updateLanguage(storedLang);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = langData[languageSelect.value].success_message;
  form.reset();
});
