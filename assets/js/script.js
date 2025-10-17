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
    const categories = filterItems[i].dataset.category.toLowerCase();

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (categories.includes(selectedValue.toLowerCase())) {
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
    aboutText1: "Backend Developer with 3+ years of experience building scalable Python applications. Working on projects ranging from small startups to systems handling thousands of daily users. Specialized in high-performance APIs, microservices architecture, and AI integrations.",

    aboutText2: "Developed 50+ Telegram bots for business automation, several full-stack CRUD backends with REST API and authentication, large-scale services with microservices architecture. Built custom Web3 payment systems, integrated AI for support and analytics.",

    whatImDoing: "What I'm doing",

    service1Title: "Backend Development",
    service1Text: "High-load API development with FastAPI, Django. Architecture design, performance optimization, third-party integrations. From MVP to production.",

    service2Title: "AI & Automation",
    service2Text: "LLM integration (OpenAI, Claude), AI chatbots for customer support. Automation via Telegram bots with ML analysis. Building monitoring systems with AI.",

    service3Title: "Web3 Integrations",
    service3Text: "Building custom crypto payment systems on Ethereum and Tron. Web3 integration, Infura, smart contracts. Full control without middleman fees.",

    service4Title: "System Architecture & DevOps",
    service4Text: "Microservices architecture, async processing (Celery, Kafka). Docker containerization, CI/CD, AWS. Process standardization and documentation.",
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
    selectCategory: "Select category",
    edu1Title: "State University of Telecommunications",
    edu1Period: "2017 — 2023",
    edu1Text: "Master's degree in Telecommunications Engineering. Studied programming, algorithms, system architecture, network technologies.",

    edu2Title: "Python for Everybody Specialization",
    edu2Period: "University of Michigan via Coursera — 2023",
    edu2Text: "Advanced study of Python, data structures, web scraping, working with databases.",

    edu3Title: "Database Systems",
    edu3Period: "Stanford via edX — 2023",
    edu3Text: "Study of SQL, query optimization, relational database design, normalization.",

    exp1Title: "Backend Developer — Popeye Solution",
    exp1Period: "01.2023 — 08.2025",
    exp1Text:
        "Working as a Middle Backend Developer, involved in the full project cycle — from concept to production. " +
        "Projects vary in scale: from small ones (team of 3) where you need to move fast and handle everything yourself, " +
        "to large systems (15+ specialists) where coordination and clear task distribution are key.\n\n" +

        "I analyze requirements, design architecture, plan asynchronous processes and microservice interactions. " +
        "I choose technologies for core components, build prototypes, formulate technical tasks for the team. " +
        "Set up logging, monitoring, security, and define code standards. " +
        "We build microservice systems of various scales — from CRM to e-commerce platforms handling thousands of daily users.\n\n" +

        "Within the team, we created our own clean code standards based on PEP 8, Google Style Guide, and industry best practices, " +
        "but adapted them to our needs. We follow OOP principles, SOLID, DRY, KISS, YAGNI. " +
        "Developed internal project architecture, templates for common tasks, and libraries for authentication, validation, and payment processing. " +
        "Built a knowledge base that developers gradually fill — this significantly sped up onboarding and reduced time spent understanding others' code.\n\n" +

        "Thanks to process standardization, the team started working faster, we stopped missing deadlines, and code reviews became easier. " +
        "Implemented AI solutions: LLM-based support chats and monitoring bots that analyze metrics.\n\n" +

        "One interesting challenge was optimizing order processing for an e-commerce platform. " +
        "Rewrote caching logic and async tasks, added smart filters for search. " +
        "Customers found products faster, conversion grew. " +
        "The client was very happy and showed appreciation with a bonus.\n\n" +

        "Responsible for third-party integrations, optimization, async processing, and backend automation. " +
        "I support projects post-release: profiling, refactoring code, improving architecture. " +
        "Always keep security in check — access control, authentication, encryption, and logging.",

    exp2Title: "Backend Developer — Freelance",
    exp2Period: "2022 — Present",
    exp2Text:
        "On freelance, I create my own products and work on client projects from various platforms (don't work with Russia and Belarus). " +
        "Developing Telegram bots, backends for business apps with auth, APIs, and admin panels.\n\n" +

        "The most interesting project was a Twitch bot that analyzed streams in real-time and automatically created clips. " +
        "It tracked sudden scene changes, loud sounds, and chat reactions. " +
        "We even started training an ML model on other streams so the bot could learn to recognize \"epic moments\" on its own. " +
        "The project wasn't finished, but technically it was really cool.\n\n" +

        "Built 50+ Telegram bots: online cinemas with external movie database integration, bots for small businesses with built-in payments, " +
        "customer support, internal process automation, booking systems, and reminders. " +
        "Each bot is a unique story with its own logic.\n\n" +

        "Created large-scale systems with microservice architecture and async processing. " +
        "Integrated payment systems, Web3, and third-party APIs. " +
        "Once had to build a custom crypto payment system based on Infura and Tron — " +
        "this allowed the client to avoid middleman fees and fully control the process.\n\n" +

        "Always ensure stability, security, and code coverage with tests. " +
        "After launch, I support projects, optimize and improve architecture so systems handle load and run like clockwork.",
    // Quote
    quoteText: "Make it work, make it right, make it fast.",
    quoteAuthor: "— Kent Beck",
    quoteTooltip: "American software engineer, creator of Extreme Programming (XP) and Test-Driven Development (TDD)",

    // Portfolio projects
    project1Title: "Twitch Auto Clip Bot",
    project1Category: "ML Stream Analysis & Auto Clips",

    project2Title: "Highlight Detector",
    project2Category: "Pattern-Based Video Highlight Detection",

    project3Title: "Telegram Auto Poster",
    project3Category: "Automated Content Distribution Bot",

    project4Title: "Proxy Shop Platform",
    project4Category: "Full-Stack Backend + Frontend",

    project5Title: "Chat API",
    project5Category: "Real-Time Chat System",

    project6Title: "Support Service",
    project6Category: "Microservices Framework",

    project7Title: "E-commerce Backend",
    project7Category: "FastAPI, PostgreSQL, Redis"
  },
  ua: {
    name: "Влад Шмалій",
    title: "Backend Developer / AI Engineer",
    navAbout: "Про мене",
    navResume: "Резюме",
    navPortfolio: "Портфоліо",
    navContact: "Контакти",
    aboutTitle: "Про мене",
    aboutText1: "Backend Developer з 3+ роками досвіду створення масштабованих Python-застосунків. Працюю з проєктами від невеликих стартапів до систем з тисячами щоденних користувачів. Спеціалізуюся на високопродуктивних API, мікросервісній архітектурі та AI-інтеграціях.",

    aboutText2: "Розробив 50+ Telegram-ботів для автоматизації бізнес-процесів, кілька повноцінних CRUD-бекендів з REST API та аутентифікацією, великомасштабні сервіси з мікросервісною архітектурою. Створював власні платіжні системи на Web3, інтегрував AI для підтримки та аналітики.",

    whatImDoing: "Чим я займаюся",

    service1Title: "Backend розробка",
    service1Text: "Розробка високонавантажених API на FastAPI, Django. Проєктування архітектури, оптимізація продуктивності, інтеграція зовнішніх сервісів. Від MVP до production.",

    service2Title: "AI та автоматизація",
    service2Text: "Інтеграція LLM-моделей (OpenAI, Claude), розробка AI-чатів для підтримки. Автоматизація через Telegram-боти з ML-аналізом. Створення систем моніторингу з AI.",

    service3Title: "Web3 інтеграції",
    service3Text: "Розробка власних криптоплатіжних систем на Ethereum та Tron. Інтеграція Web3, Infura, робота зі смарт-контрактами. Повний контроль без комісій посередників.",

    service4Title: "Системна архітектура & DevOps",
    service4Text: "Мікросервісна архітектура, асинхронна обробка (Celery, Kafka). Контейнеризація з Docker, CI/CD, AWS. Стандартизація процесів та документація.",
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
    selectCategory: "Оберіть категорію",
    edu1Title: "Державний університет телекомунікацій",
    edu1Period: "2017 — 2023",
    edu1Text: "Магістр інженерії телекомунікацій. Вивчав програмування, алгоритми, системну архітектуру, мережеві технології.",

    edu2Title: "Python for Everybody Specialization",
    edu2Period: "University of Michigan via Coursera — 2023",
    edu2Text: "Поглиблене вивчення Python, структур даних, веб-скрейпінгу, роботи з базами даних.",

    edu3Title: "Database Systems",
    edu3Period: "Stanford via edX — 2023",
    edu3Text: "Вивчення SQL, оптимізації запитів, проектування реляційних баз даних, нормалізації.",

    // Experience
    exp1Title: "Backend Developer — Popeye Solution",
    exp1Period: "01.2023 — 08.2025",
    exp1Text:
        "Працюю бекенд-розробником рівня Middle, беру участь у повному циклі — від ідеї до продакшену. " +
        "Проєкти бувають різного масштабу: від невеликих (команда 3 людини), де потрібно швидко приймати рішення та робити все самому, " +
        "до великих систем (15+ спеціалістів), де важлива координація та чітке розподілення задач.\n\n" +

        "Займаюся аналізом вимог, проєктуванням архітектури, плануванням асинхронних процесів та логіки між мікросервісами. " +
        "Вибираю технології для ключових компонентів, створюю прототипи, формулюю технічні завдання для команди. " +
        "Налаштовую логування, моніторинг, безпеку та визначаю стандарти коду. " +
        "Розробляємо мікросервісні системи різного масштабу — від CRM до e-commerce платформ з тисячами щоденних користувачів.\n\n" +

        "Всередині команди ми створили власні стандарти чистого коду на базі PEP 8, Google Style Guide та найкращих практик індустрії, " +
        "але адаптували їх під наші потреби. Дотримуємося принципів ООП, SOLID, DRY, KISS, YAGNI. " +
        "Розробили внутрішню архітектуру проєктів, шаблони для типових задач та бібліотеки для авторізації, валідації, обробки платежів. " +
        "Створили базу знань, яку розробники поступово заповнюють — це суттєво пришвидшило онбординг нових людей та зменшило час на розбір чужого коду.\n\n" +

        "Завдяки стандартизації процесів команда почала працювати швидше, ми перестали прогавлювати дедлайни, а код-рев'ю стали проходити легше. " +
        "Впроваджували AI-рішення: підтримку чатів на базі LLM-моделей та ботів для моніторингу й аналізу метрик.\n\n" +

        "Одна з цікавих задач — оптимізація обробки замовлень в e-commerce. " +
        "Переробили логіку кешування та асинхронних завдань, додали smart-фільтри для пошуку. " +
        "Клієнти почали швидше знаходити товари, конверсія зросла. " +
        "Замовник залишився дуже задоволений і подякував додатковим бонусом.\n\n" +

        "Відповідаю за інтеграції зовнішніх сервісів, оптимізацію, асинхронну обробку та автоматизацію процесів. " +
        "Підтримую проєкти після релізу: профілюю, рефакторю код, покращую архітектуру. " +
        "Слідкую за безпекою — контроль доступів, аутентифікація, шифрування та логування.",

    exp2Title: "Backend Developer — Freelance",
    exp2Period: "2022 — Дотепер",
    exp2Text:
        "На фрилансі створюю власні продукти та працюю на замовлення з різних платформ (не працюю з Росією та Білоруссю). " +
        "Розробляю Telegram-боти, бекенди для бізнес-додатків з авторізацією, API та адмінками.\n\n" +

        "Найцікавіший проєкт — бот для Twitch, який аналізував стріми в реальному часі та автоматично створював кліпи. " +
        "Відстежував різкі зміни сцен, гучні звуки, реакції в чаті. " +
        "Почали навіть тренувати ML-модель на інших трансляціях, щоб бот вчився розпізнавати \"епічні моменти\" самостійно. " +
        "Проєкт не завершили, але технічно це було дуже круто.\n\n" +

        "Розробив понад 50 Telegram-ботів: онлайн-кінотеатри з інтеграцією зовнішніх БД, боти для малого бізнесу з вбудованими платежами, " +
        "підтримка клієнтів, автоматизація внутрішніх процесів, системи бронювання та нагадувань. " +
        "Кожен бот — це окрема історія з унікальною логікою.\n\n" +

        "Створював масштабні системи з мікросервісною архітектурою та асинхронною обробкою. " +
        "Інтегрував платіжні системи, Web3 та сторонні API. " +
        "Одного разу довелося розробити власну криптоплатіжну систему на базі Infura та Tron — " +
        "це дозволило замовнику уникнути комісій посередників і повністю контролювати процес.\n\n" +

        "Завжди забезпечую стабільність, безпеку, покриваю код тестами. " +
        "Після запуску супроводжую проєкти, оптимізую та покращую архітектуру, щоб системи витримували навантаження та працювали як годинник."},
  // Quote
  quoteText: "Зроби так, щоб працювало, зроби правильно, зроби швидко.",
  quoteAuthor: "— Кент Бек",
  quoteTooltip: "Американський інженер-програміст, творець Extreme Programming (XP) та Test-Driven Development (TDD)",

  // Portfolio projects
  project1Title: "Twitch Auto Clip Bot",
  project1Category: "ML-аналіз стрімів та автоматичні кліпи",

  project2Title: "Highlight Detector",
  project2Category: "Виявлення хайлайтів на основі патернів",

  project3Title: "Telegram Auto Poster",
  project3Category: "Автоматизована розсилка контенту",

  project4Title: "Proxy Shop Platform",
  project4Category: "Full-Stack Backend + Frontend",

  project5Title: "Chat API",
  project5Category: "Система чату в реальному часі",

  project6Title: "Support Service",
  project6Category: "Фреймворк мікросервісів",

  project7Title: "E-commerce Backend",
  project7Category: "FastAPI, PostgreSQL, Redis"
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

    // ===== СПОЧАТКУ data-i18n =====
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Tooltip для цитати
    const quoteAuthor = document.querySelector('[data-i18n-tooltip]');
    if (quoteAuthor) {
      const tooltipKey = quoteAuthor.getAttribute('data-i18n-tooltip');
      if (t[tooltipKey]) {
        quoteAuthor.setAttribute('data-tooltip', t[tooltipKey]);
      }
    }

    // ===== ПОТІМ ВСЕ ІНШЕ =====
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

const emailLink = document.querySelector('.contact-info a[href^="mailto"]');
if (emailLink) {
  emailLink.addEventListener('click', function(e) {
    e.preventDefault();

    pages.forEach(page => {
      page.classList.toggle('active', page.dataset.page === 'contact');
    });

    navigationLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.page === 'contact');
    });

    setTimeout(() => {
      const form = document.querySelector('.contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  });
}