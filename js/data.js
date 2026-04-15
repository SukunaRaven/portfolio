const projectData = [
    {
        title: "Storyge",
        url: "https://github.com/AngryPapayah/cle4-storyge",
        image: "images/Logo.jpg",
        tags: ["JavaScript", "Excalibur"],
        desc: { 
            en: "Interactive storytelling meets unboxing. Built on Excalibur, Storyge isn't just a game—it's a digital puzzle box. You can’t just click through; you have to prove you’ve been paying attention. I linked narrative progression to contextual quizzes, making sure every item you unlock feels earned.",
            nl: "Interactieve storytelling ontmoet de 'unboxing' trend. Gebouwd op de Excalibur-engine, is Storyge meer dan een game: het is een digitale puzzelbox. Je klikt er niet zomaar doorheen; je moet bewijzen dat je oplet. Ik heb voortgang gekoppeld aan quizvragen, zodat elk verhaalitem dat je vrijspeelt ook echt voelt als een beloning."
        }
    },
    {
        title: "NatuurMoment",
        url: "https://github.com/HenkHR/NatuurMoment",
        image: "images/logoNM.png",
        tags: ["Laravel", "Tailwind"],
        desc: { 
            en: "Getting people off their couches and into the woods. NatuurMoment gamifies the outdoors with 'Nature Bingo' and GPS-tracked routes. I focused on making the mapping high-performance and the experience simple enough for kids but engaging enough for parents. It's tech that actually encourages you to look away from your screen.",
            nl: "Mensen van de bank en het bos in krijgen. NatuurMoment maakt de natuur leuker met 'Natuur Bingo' en GPS-routes. De uitdaging? Razendsnelle kaarten en een interface die simpel genoeg is voor kinderen, maar uitdagend genoeg voor hun ouders. Tech die je juist motiveert om níét naar je scherm te staren."
        }
    },
    {
        title: "Merai",
        url: "https://github.com/SukunaRaven/merai",
        image: "images/TLE3-Mera-LogoIcon.png",
        tags: ["React", "AI", "Tailwind"],
        desc: { 
            en: "Ever wondered how YouTube’s algorithm sees you? Merai peeks inside 'The Bubble.' By analyzing subscription metadata, it visualizes the digital boxes we get put into. It’s a tool built to spark conversations about data privacy—turning abstract code into a mirror of your digital identity.",
            nl: "Ooit afgevraagd hoe het YouTube-algoritme naar je kijkt? Merai laat het je zien. Door metadata van abonnementen te analyseren, visualiseren we de digitale hokjes waar je in wordt geplaatst. Het is een tool die het gesprek over privacy start door abstracte data te veranderen in een spiegel van je digitale identiteit."
        }
    },
    {
        title: "Camaros",
        url: "https://github.com/SukunaRaven/camaros",
        image: "images/Camaro.png",
        tags: ["Laravel", "Tailwind"],
        desc: { 
            en: "A car platform where the real engine is under the hood. While the frontend looks sharp, the heavy lifting happens in the admin panel. I built a bulletproof permissions system to keep sensitive data locked down, proving that a complex backend can still be elegant and secure.",
            nl: "Een automotive platform waarbij de echte motor onder de motorkap zit. De voorkant ziet er strak uit, maar het echte werk gebeurt in het admin-paneel. Ik heb een waterdicht permissiesysteem gebouwd om gevoelige data achter slot en grendel te houden. Complex vanbinnen, simpel en veilig vanbuiten."
        }
    },
    {
        title: "Moody",
        url: "https://github.com/SukunaRaven/moody",
        image: "images/moody-chatbot.png",
        tags: ["Python", "React", "AI", "Tailwind", "Typescript"],
        desc: { 
            en: "An AI companion that actually reads the room. Moody uses Python to analyze sentiment and TypeScript/React to deliver a smooth experience. It’s not just a chatbot; it’s a space for reflection, designed to show that code can be used to build empathy, not just automation.",
            nl: "Een AI-maatje dat de sfeer aanvoelt. Moody combineert Python-sentimentanalyse met een strakke TypeScript/React-frontend. Geen simpele chatbot, maar een plek voor reflectie. Het is mijn bewijs dat je code kunt gebruiken voor empathie, en niet alleen voor automatisering."
        }
    },
    {
        title: "Signatuur Opdracht",
        url: "https://github.com/SukunaRaven/signatuur-opdracht",
        image: "images/signatuuropdracht.png",
        tags: ["HTML", "CSS", "JavaScript"],
        desc: { 
            en: "My personal highlight reel. This isn't just a portfolio; it's a logbook of my evolution from 'making things work' to 'making things scale.' It tracks my progress through year two of Software Engineering, serving as a benchmark for my coding standards and design style.",
            nl: "Mijn persoonlijke 'highlight reel'. Dit is geen standaard portfolio, maar een logboek van mijn groei. Het laat zien hoe ik ben veranderd van iemand die code 'werkend krijgt' naar iemand die systemen bouwt die schalen. Mijn eigen standaard voor code en design, vastgelegd in één project."
        }
    }
];

const translations = {
    en: {
        "nav-work": "Work",
        "nav-about": "About",
        "back-btn": "Back to Overview",
        "philosophy-title": "Core Philosophy",
        "phil-security-head": "Security & Compliance",
        "phil-security-desc": "Privacy shouldn't be an afterthought. Thanks to my legal background, I don't just look at the code, but also at the rules behind it. I build systems that are GDPR-proof and secure, because users need to be able to trust that their data is in good hands.",
        "phil-perf-head": "High-Stakes Workloads",
        "phil-perf-desc": "Code needs to work, especially when it gets busy. My experience in emergency response taught me to stay calm and focus on what’s essential. I build fast, reliable apps that don’t crash when the pressure is on.",
        "phil-access-head": "Inclusive Architecture",
        "phil-access-desc": "Great software is for everyone. Whether it’s following WCAG guidelines or using my Sign Language skills, I want to make sure my projects are accessible to all users. Digital products should be inclusive, not a barrier.",
        "hero-title": "Crafting Digital Excellence.",
        "hero-sub": "I combine the mindset of a craftsman with the precision of an engineer. I build scalable, accessible web experiences that actually make an impact.",
        "footer-copy": "© 2026 Raven — Developer Portfolio",
        "about-head": "About Me",
        "about-project-head": "About This Project",
        "about-bio": "I am a developer who values discipline and diverse perspectives. My background extends beyond the screen, incorporating legal knowledge and emergency response capabilities.",
        "skills-title": "Technical Skills",
        "lang-title": "Languages",
        "lang-en": "English",
        "lang-nl": "Dutch",
        "level-fluent": "Fluent",
        "level-native": "Native / Fluent",
        "cert-title": "Certifications",
        "cert-law": "Law",
        "cert-law-desc": "Knowledge of legal principles and structures.",
        "cert-ehbo": "EHBO",
        "cert-ehbo-desc": "Certified First Aid provider (Emergency Response).",
        "cert-sign": "Sign Language",
        "cert-sign-desc": "Bridging the gap in non-verbal communication."
    },
    nl: {
        "nav-work": "Projecten",
        "nav-about": "Over mij",
        "back-btn": "Terug naar Overzicht",
        "philosophy-title": "Kernfilosofie",
        "phil-security-head": "Beveiliging & Compliance",
        "phil-security-desc": "Privacy is geen extraatje, het is de basis. Door mijn juridische achtergrond kijk ik niet alleen naar de code, maar ook naar de regels eromheen. Ik bouw systemen die AVG-proof en technisch veilig zijn, want een gebruiker moet er simpelweg op kunnen vertrouwen dat data veilig is.",
        "phil-perf-head": "High-Stakes Prestaties",
        "phil-perf-desc": "Code moet werken, zeker als het druk wordt. Door mijn ervaring in de noodhulp (EHBO) heb ik geleerd om rustig te blijven en te focussen op de essentie. Ik bouw snelle, betrouwbare apps die niet omvallen als het er echt om spant.",
        "phil-access-head": "Inclusieve Architectuur",
        "phil-access-desc": "Goede software is er voor iedereen. Of het nu gaat om WCAG-richtlijnen of mijn kennis van gebarentaal: ik wil dat mijn projecten voor iedereen toegankelijk zijn. Een digitaal product moet een oplossing zijn, geen drempel.",
        "hero-title": "Digitale Excellentie.",
        "hero-sub": "Ik combineer de mindset van een vakman met de precisie van een engineer. Ik bouw schaalbare en toegankelijke webervaringen die écht goed in elkaar zitten.",
        "footer-copy": "© 2026 Raven — Developer Portfolio",
        "about-head": "Over Mij",
        "about-project-head": "Over dit Project",
        "about-bio": "Ik ben een ontwikkelaar die waarde hecht aan discipline en diverse perspectieven. Mijn achtergrond strekt zich uit tot buiten het scherm, met juridische kennis en noodhulpvaardigheden.",
        "skills-title": "Technische Vaardigheden",
        "lang-title": "Talen",
        "lang-en": "Engels",
        "lang-nl": "Nederlands",
        "level-fluent": "Vloeiend",
        "level-native": "Moedertaal",
        "cert-title": "Certificeringen",
        "cert-law": "Recht",
        "cert-law-desc": "Kennis van juridische principes en structuren.",
        "cert-ehbo": "EHBO",
        "cert-ehbo-desc": "Gediplomeerd Eerste Hulp verlener (BHV).",
        "cert-sign": "Gebarentaal",
        "cert-sign-desc": "Het overbruggen van de kloof in non-verbale communicatie."
    }
};