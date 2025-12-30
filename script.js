const translations = {
    en: {
        home: "Home",
        blog: "Blog",
        challenge: "The challenge ends in...", // Додано
        challenge_timer: "The challenge ends in...",
        main_title: "Our challenge: is the<br>revive of the <br> most comfortable iPhone <br> era.", // Додано
        footer_metal: "Silver Aluminum",
        about_title: "About Us",
        home: "Home",
        blog: "Blog",
        challenge_timer: "The challenge ends in...",
        footer_metal: "Silver Aluminum",
        about_title: "About Us",
        about_intro: "It all started with a Christmas gift from Santa.",
        about_p1: "Under the Christmas tree, bartyukm found a first-generation iPhone SE — a smartphone long considered obsolete. But at that very moment, an idea was born that turned into a challenge.",
        about_challenge_title: "The Challenge:",
        about_challenge_desc: "Use iPhone SE (1st gen) until 2030.",
        about_p2: "It's more than just a phone. It's an experiment over time, technology, and habits. No annual race for new models, no upgrades 'just because.' Only one smartphone and daily life with it.",
        about_p3: "bartyukm records the entire journey: how the iPhone works over the years, what difficulties it faces, what breaks, what surprises, and what still holds up.",
        about_goal: "The goal is simple — survive with this iPhone until 2030.",
        about_outro: "Everything that happens between these dates, you will find in our blog."
    },
    uk: {
        home: "Головна",
        blog: "Блог",
        challenge: "Челендж завершиться через...", // Додано
        challenge_timer: "Челендж завершиться через...",
        main_title: "Наш виклик: це<br>відродження<br>найкомфортнішої ери<br>iPhone.", // Додано
        footer_metal: "Сріблястий алюміній",
        about_title: "Про нас",
        home: "Головна",
        blog: "Блог",
        challenge_timer: "Челендж завершиться через...",
        footer_metal: "Сріблястий алюміній",
        about_title: "Про нас",
        about_intro: "Усе почалося з різдвяного подарунка від Санти.",
        about_p1: "Під ялинкою bartyukm знайшов iPhone SE першого покоління — смартфон, який давно вважають застарілим. Але саме в цей момент з’явилася ідея, що перетворилася на челендж.",
        about_challenge_title: "Виклик:",
        about_challenge_desc: "Користуватися iPhone SE (1st gen) до 2030 року.",
        about_p2: "Це більше, ніж просто телефон. Це експеримент над часом, технологіями та звичками. Без щорічної гонитви за новими моделями, без апгрейдів 'бо так треба'. Лише один смартфон і щоденне життя з ним.",
        about_p3: "bartyukm фіксує весь шлях: як iPhone працює з роками, з якими труднощами стикається, що ламається, що дивує і що досі тримається.",
        about_goal: "Мета проста — дожити з цим iPhone до 2030 року.",
        about_outro: "А все, що відбувається між цими датами, ви знайдете в нашому блозі."
    }
};

// ... решта твого коду для зміни мови (updateLanguage) та таймера ...

const langSelect = document.getElementById('language');

function updateLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('preferredLang', lang);
}

langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));

// Запуск при завантаженні
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    langSelect.value = savedLang;
    updateLanguage(savedLang);
    startLaunchTimer();
});

function startLaunchTimer() {
    const targetDate = new Date("Jan 1, 2030 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) {
            document.getElementById("timer").innerHTML = "ENDED";
            return;
        }
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}