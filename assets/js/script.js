'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

if (testimonialsItem.length > 0 && modalContainer && modalCloseBtn && overlay) {
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }

  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select && selectValue) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

if (selectItems.length > 0 && selectValue) {
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }
}

if (filterBtn.length > 0 && selectValue) {
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn && formInputs.length > 0) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article[data-page]");

if (navigationLinks.length > 0 && pages.length > 0) {
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
      const targetPage = this.getAttribute('data-page');
      for (let j = 0; j < pages.length; j++) {
        if (targetPage === pages[j].dataset.page) {
          pages[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
        }
      }
      navigationLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    });
  }
}

const translations = {
  en: {
    name: "Vlad Shmalii",
    title: "Backend Developer / AI Engineer",
    navAbout: "About",
    navResume: "Resume",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    aboutTitle: "About me",
    aboutText1: "Backend Developer with 2+ years of experience building scalable Python applications. Specialized in high-performance APIs, microservices architecture, and AI integrations. Reduced system response time by 65% and improved team efficiency by 50%.",
    aboutText2: "Developed 6+ Telegram bots for automation, 3 full CRUD backends with REST API and authentication, 1 large-scale service with microservices architecture, async processing, and third-party integrations.",
    whatImDoing: "What I'm doing",
    service1Title: "Backend Development",
    service1Text: "High-load API development with FastAPI, SQLAlchemy, PostgreSQL, Docker & AWS.",
    service2Title: "AI & Automation",
    service2Text: "AI model integration, business process automation, Telegram bots with ML.",
    service3Title: "Web3 Integrations",
    service3Text: "Crypto payment systems, Ethereum, Tron integration, smart contracts.",
    service4Title: "System Architecture & DevOps",
    service4Text: "Microservices, RabbitMQ, Kafka, Celery, CI/CD, Docker containerization.",
    resumeTitle: "Resume",
    educationTitle: "Education",
    experienceTitle: "Experience",
    techStackTitle: "Tech Stack",
    portfolioTitle: "Portfolio",
    contactTitle: "Contact",
    formTitle: "Contact Form",
    fullNamePlaceholder: "Full name",
    emailPlaceholder: "Email address",
    messagePlaceholder: "Your Message",
    sendBtn: "Send Message",
    selectCategory: "Select category"
  },
  ua: {
    name: "Влад Шмалій",
    title: "Backend Developer / AI Engineer",
    navAbout: "Про мене",
    navResume: "Резюме",
    navPortfolio: "Портфоліо",
    navContact: "Контакти",
    aboutTitle: "Про мене",
    aboutText1: "Backend Developer з 2+ роками досвіду створення масштабованих Python-застосунків. Спеціалізуюся на високопродуктивних API, мікросервісній архітектурі та AI-інтеграціях. Знизив час відповіді системи на 65% і покращив ефективність команди на 50%.",
    aboutText2: "Розробив 6+ Telegram-ботів для автоматизації, 3 повноцінні CRUD-бекенди з REST API та аутентифікацією, 1 великомасштабний сервіс з мікросервісною архітектурою, асинхронною обробкою та інтеграціями третіх сторін.",
    whatImDoing: "Чим я займаюся",
    service1Title: "Backend розробка",
    service1Text: "Розробка високонавантажених API на FastAPI, SQLAlchemy, PostgreSQL з Docker і AWS.",
    service2Title: "AI та автоматизація",
    service2Text: "Інтеграція AI-моделей, автоматизація бізнес-процесів, Telegram-боти з ML.",
    service3Title: "Web3 інтеграції",
    service3Text: "Розробка криптоплатіжних систем, інтеграція Ethereum, Tron, смарт-контрактів.",
    service4Title: "Системна архітектура & DevOps",
    service4Text: "Мікросервіси, RabbitMQ, Kafka, Celery, CI/CD, контейнеризація з Docker.",
    resumeTitle: "Резюме",
    educationTitle: "Освіта",
    experienceTitle: "Досвід",
    techStackTitle: "Технології",
    portfolioTitle: "Портфоліо",
    contactTitle: "Контакти",
    formTitle: "Форма зв'язку",
    fullNamePlaceholder: "Повне ім'я",
    emailPlaceholder: "Email адреса",
    messagePlaceholder: "Ваше повідомлення",
    sendBtn: "Відправити",
    selectCategory: "Оберіть категорію"
  }
};

let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);

  const switcher = document.querySelector('.language-switcher');
  if (switcher) {
    switcher.setAttribute('data-lang', lang);
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  const loader = document.querySelector('.language-loader');
  if (loader) {
    loader.classList.add('active');
  }

  setTimeout(() => {
    const t = translations[lang];

    const nameEl = document.querySelector('.name');
    const titleEl = document.querySelector('.title');

    if (nameEl) nameEl.textContent = t.name;
    if (titleEl) titleEl.textContent = t.title;

    const navLinks = document.querySelectorAll('.navbar-link');
    if (navLinks[0]) navLinks[0].textContent = t.navAbout;
    if (navLinks[1]) navLinks[1].textContent = t.navResume;
    if (navLinks[2]) navLinks[2].textContent = t.navPortfolio;
    if (navLinks[3]) navLinks[3].textContent = t.navContact;

    const aboutTitle = document.querySelector('.about .article-title');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

    const aboutTextPs = document.querySelectorAll('.about-text p');
    if (aboutTextPs[0]) aboutTextPs[0].textContent = t.aboutText1;
    if (aboutTextPs[1]) aboutTextPs[1].textContent = t.aboutText2;

    const serviceTitle = document.querySelector('.service-title');
    if (serviceTitle) serviceTitle.textContent = t.whatImDoing;

    const serviceItemTitles = document.querySelectorAll('.service-item-title');
    const serviceItemTexts = document.querySelectorAll('.service-item-text');

    if (serviceItemTitles[0]) serviceItemTitles[0].textContent = t.service1Title;
    if (serviceItemTexts[0]) serviceItemTexts[0].textContent = t.service1Text;
    if (serviceItemTitles[1]) serviceItemTitles[1].textContent = t.service2Title;
    if (serviceItemTexts[1]) serviceItemTexts[1].textContent = t.service2Text;
    if (serviceItemTitles[2]) serviceItemTitles[2].textContent = t.service3Title;
    if (serviceItemTexts[2]) serviceItemTexts[2].textContent = t.service3Text;
    if (serviceItemTitles[3]) serviceItemTitles[3].textContent = t.service4Title;
    if (serviceItemTexts[3]) serviceItemTexts[3].textContent = t.service4Text;

    const resumeTitle = document.querySelector('.resume .article-title');
    if (resumeTitle) resumeTitle.textContent = t.resumeTitle;

    const timelineH3s = document.querySelectorAll('.timeline .h3');
    if (timelineH3s[0]) timelineH3s[0].textContent = t.educationTitle;
    if (timelineH3s[1]) timelineH3s[1].textContent = t.experienceTitle;

    const skillsTitle = document.querySelector('.skills-title');
    if (skillsTitle) skillsTitle.textContent = t.techStackTitle;

    const portfolioTitle = document.querySelector('.portfolio .article-title');
    if (portfolioTitle) portfolioTitle.textContent = t.portfolioTitle;

    const contactTitle = document.querySelector('.contact .article-title');
    if (contactTitle) contactTitle.textContent = t.contactTitle;

    const formTitle = document.querySelector('.form-title');
    if (formTitle) formTitle.textContent = t.formTitle;

    const fullnameInput = document.querySelector('input[name="fullname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('textarea[name="message"]');
    const formBtnSpan = document.querySelector('.form-btn span');
    const selectValueEl = document.querySelector('.select-value');

    if (fullnameInput) fullnameInput.placeholder = t.fullNamePlaceholder;
    if (emailInput) emailInput.placeholder = t.emailPlaceholder;
    if (messageTextarea) messageTextarea.placeholder = t.messagePlaceholder;
    if (formBtnSpan) formBtnSpan.textContent = t.sendBtn;
    if (selectValueEl) selectValueEl.textContent = t.selectCategory;

    setTimeout(() => {
      if (loader) {
        loader.classList.remove('active');
      }
    }, 400);
  }, 300);
}

const savedLang = localStorage.getItem('language') || 'en';
switchLanguage(savedLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

document.addEventListener('DOMContentLoaded', function() {
  switchLanguage(savedLang);
});

window.addEventListener('load', function() {
  const pageLoader = document.querySelector('.page-loader');
  setTimeout(() => {
    if (pageLoader) {
      pageLoader.classList.add('hidden');
      setTimeout(() => {
        pageLoader.style.display = 'none';
      }, 500);
    }
  }, 2200);
});