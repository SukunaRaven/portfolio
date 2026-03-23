// Global State
window.currentLang = localStorage.getItem('lang') || 'en';

// 1. Universal Theme Toggle
window.toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeUI();
};

// 2. Universal Language Toggle
window.toggleLang = () => {
    const newLang = window.currentLang === 'en' ? 'nl' : 'en';
    localStorage.setItem('lang', newLang);
    location.reload();
};

function updateThemeUI() {
    const themeIcon = document.querySelector('.theme-icon');
    const isDark = document.documentElement.classList.contains('dark');
    if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        if (window.lucide) lucide.createIcons();
    }
}

function init() {
    // A. Initial Theme Check
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // B. Inject Shared Components
    const navCont = document.getElementById('nav-container');
    const footCont = document.getElementById('footer-container');

    if (navCont && typeof components !== 'undefined') {
        navCont.innerHTML = components.nav(window.currentLang);
    }
    if (footCont && typeof components !== 'undefined') {
        const footText = (typeof translations !== 'undefined') ? translations[window.currentLang]['footer-copy'] : "© 2026 Raven";
        footCont.innerHTML = components.footer(window.currentLang, footText);
    }

    // C. Load Page Specific Content
    if (document.getElementById('project-grid')) renderHome();
    if (document.getElementById('det-title')) renderDetails();

    // D. Apply Static Translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (typeof translations !== 'undefined' && translations[window.currentLang][key]) {
            el.textContent = translations[window.currentLang][key];
        }
    });

    // E. Sync UI Icons
    updateThemeUI();
}

// Update renderHome to show thumbnails on the main page too
function renderHome() {
    const grid = document.getElementById('project-grid');
    if (!grid || typeof projectData === 'undefined') return;
    grid.innerHTML = projectData.map(p => `
        <a href="project-details.html?id=${p.title.toLowerCase()}" class="project-card group page-enter">
            <div class="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 aspect-[16/10] mb-6 border border-slate-200 dark:border-slate-800">
                <img src="${p.image}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100">
                <div class="absolute bottom-4 left-4 flex gap-2">
                    ${p.tags.map(tag => `<span class="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-sm text-[10px] font-bold rounded-full uppercase tracking-tighter text-slate-900 dark:text-slate-100">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold group-hover:text-indigo-600 transition-colors text-slate-900 dark:text-white">${p.title}</h3>
                <i data-lucide="arrow-up-right" class="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-indigo-600"></i>
            </div>
            <p class="text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">${p.desc[window.currentLang]}</p>
        </a>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

// Updated renderDetails for the Hero Header look
function renderDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    if (typeof projectData === 'undefined') return;

    const project = projectData.find(p => p.title.toLowerCase() === projectId);

    if (project) {
        document.title = `${project.title} | Raven Portfolio`;
        document.getElementById('det-title').textContent = project.title;
        document.getElementById('det-github').href = project.url;

        const lang = window.currentLang || 'en';
        document.getElementById('det-desc').textContent = project.desc[lang];

        // 1. Handle Hero Image
        const headerContainer = document.getElementById('det-image-header');
        if (headerContainer && project.image) {
            headerContainer.innerHTML = `
                <img src="${project.image}" 
                     class="w-full h-full object-cover animate-slow-zoom" 
                     alt="${project.title}">
            `;
        }

        // 2. Handle Tags with glassmorphism style
        const tagContainer = document.getElementById('det-tags');
        if (tagContainer) {
            tagContainer.innerHTML = project.tags.map(t => `
                <span class="px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    ${t}
                </span>
            `).join('');
        }

        if (window.lucide) lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', init);