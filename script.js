const langData = {
  de: {
    home: "Startseite",
    about: "Über Uns",
    about_text: "Wir sind eine Roblox-Militär-Community mit Fokus auf Realismus, Ordnung und Teamarbeit.",
    join: "Mitmachen",
    join_text: "Möchtest du Soldat werden? Bewirb dich und beginne deine Karriere bei BundeswehrRP.",
    rules: "Regeln",
    rules_text: "Disziplin, Respekt und Engagement sind Pflicht – hier findest du unsere wichtigsten Vorschriften.",
    contact: "Kontakt",
    hero_title: "Willkommen bei BundeswehrRP",
    hero_desc: "Realistisches Roblox Roleplay basierend auf der Bundeswehr",
    join_now: "Tritt jetzt bei",
    footer_note: "Nicht offiziell mit der Bundeswehr verbunden"
  },
  en: {
    home: "Home",
    about: "About Us",
    about_text: "We are a Roblox military community focused on realism, discipline, and teamwork.",
    join: "Join",
    join_text: "Want to become a soldier? Apply now and start your BundeswehrRP career.",
    rules: "Rules",
    rules_text: "Discipline, respect, and dedication are mandatory – here are our main regulations.",
    contact: "Contact",
    hero_title: "Welcome to BundeswehrRP",
    hero_desc: "Realistic Roblox roleplay based on the German Armed Forces",
    join_now: "Join Now",
    footer_note: "Not officially affiliated with the Bundeswehr"
  }
};

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langData[lang] && langData[lang][key]) {
      el.innerText = langData[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

document.getElementById("languageSelect").addEventListener("change", function () {
  applyLanguage(this.value);
});

// Load preferred language from localStorage
const savedLang = localStorage.getItem("lang") || "de";
document.getElementById("languageSelect").value = savedLang;
applyLanguage(savedLang);

