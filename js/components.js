const components = {
    nav: (lang) => {
        const isDetailsPage = window.location.pathname.includes('project-details');
        const backText = lang === 'en' ? '← Back' : '← Terug';

        return `
        <nav class="fixed top-0 w-full z-50 glass border-b border-slate-200 dark:border-slate-800 h-20">
            <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <div class="flex items-center gap-6">
                    <a href="index.html" class="text-2xl font-black tracking-tighter italic hover:text-indigo-600 transition">RAVEN.</a>
                </div>
                
                <div class="flex items-center gap-8">
                    <div class="flex items-center gap-4 border-r border-slate-300 dark:border-slate-700 pr-6">
                        <button onclick="window.toggleTheme()" class="hover:text-indigo-600 transition">
                            <i data-lucide="moon" class="theme-icon w-5 h-5"></i>
                        </button>

                        <button onclick="window.toggleLang()" class="group flex items-center gap-2 hover:text-indigo-600 transition">
                            <i data-lucide="languages" class="w-4 h-4 text-slate-400 group-hover:text-indigo-600"></i>
                            <span class="font-bold tracking-tighter">${lang.toUpperCase()}</span>
                        </button>
                    </div>
                    <ul class="flex gap-6 text-xs font-bold uppercase tracking-widest text-inherit">
                        <li><a href="index.html#work" data-i18n="nav-work" class="hover:text-indigo-600 transition">Work</a></li>
                        <li><a href="about.html" data-i18n="nav-about" class="hover:text-indigo-600 transition">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `},
    footer: (lang, text) => `
        <footer class="py-20 border-t border-slate-200 dark:border-slate-800 px-6 mt-20 bg-slate-50 dark:bg-slate-950 transition-colors">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="text-center md:text-left">
                    <p class="text-slate-500 text-sm mb-2">${text}</p>
                </div>
                <div class="flex gap-8 font-bold text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100">
                    <a href="https://github.com/SukunaRaven" target="_blank" class="hover:text-indigo-600 transition">GitHub</a>
                    <a href="https://www.linkedin.com/in/sabrina-genegel-047005377/" target="_blank" class="hover:text-indigo-600 transition">LinkedIn</a>
                </div>
            </div>
        </footer>
    `
};