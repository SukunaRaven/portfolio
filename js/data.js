const projectData = [
    {
        title: "Storyge",
        url: "https://github.com/AngryPapayah/cle4-storyge",
        image: "../images/Logo.jpg",
        tags: ["JavaScript", "Excalibur"],
        desc: { 
            en: "An interactive storytelling experience built on the Excalibur engine. Storyge blends the 'unboxing' aesthetic with academic challenge; players navigate a digital space where progression is earned. Special narrative items are only unlocked through the successful completion of contextual quizzes, merging traditional gameplay with active knowledge retrieval.",
            nl: "Een interactieve storytelling-ervaring gebouwd op de Excalibur-engine. Storyge combineert de 'unboxing' esthetiek met academische uitdaging; spelers navigeren door een digitale ruimte waar progressie moet worden verdiend. Speciale verhaalelementen worden pas ontgrendeld na het succesvol voltooien van contextuele quizvragen, waarbij traditionele gameplay wordt samengevoegd met actieve kennisoverdracht."
        }
    },
    {
        title: "NatuurMoment",
        url: "https://github.com/HenkHR/NatuurMoment",
        image: "../images/logoNM.png",
        tags: ["Laravel", "Tailwind"],
        desc: { 
            en: "NatuurMoment redefines environmental education by gamifying the transition between the digital and physical worlds. Through interactive 'Nature Bingo' and location-aware route challenges, the platform transforms family days and theme events into immersive outdoor adventures. It’s a multi-generational bridge that utilizes high-performance mapping to foster ecological curiosity.",
            nl: "NatuurMoment herdefinieert natuureducatie door de overgang tussen de digitale en fysieke wereld te gamificeren. Via interactieve 'Natuur Bingo' en locatiegebonden routevragen transformeert het platform familiedagen en thema-events tot meeslepende buitenavonturen. Het is een intergenerationele brug die hoogwaardige mapping inzet om ecologische nieuwsgierigheid te stimuleren."
        }
    },
    {
        title: "Merai",
        url: "https://github.com/SukunaRaven/merai",
        image: "../images/TLE3-Mera-LogoIcon.png",
        tags: ["React", "AI", "Tailwind"],
        desc: { 
            en: "A conceptual AI tool designed to visualize 'The Bubble.' Merai analyzes YouTube subscription metadata to demonstrate how easily algorithms categorize users into digital boxes. Built to educate families on data privacy, it transforms abstract data points into a visual representation of what the internet thinks it knows about you.",
            nl: "Een conceptuele AI-tool ontworpen om 'De Bubbel' te visualiseren. Merai analyseert YouTube-abonnementen om te demonstreren hoe eenvoudig algoritmen gebruikers in digitale hokjes plaatsen. Gebouwd om families bewust te maken van dataprivacy, transformeert het abstracte datapunten naar een visuele weergave van wat het internet over jou denkt te weten."
        }
    },
    {
        title: "Camaros",
        url: "https://github.com/SukunaRaven/camaros",
        image: "../images/Camaro.png",
        tags: ["Laravel", "Tailwind"],
        desc: { 
            en: "A robust automotive platform where the primary challenge was the architecture of access. Beyond the public-facing showcase, the core of the project is a complex administrative ecosystem. I engineered a strict permissions-based backend to ensure sensitive data and management tools remain securely locked behind multi-layered authentication.",
            nl: "Een robuust automotive platform waarbij de grootste uitdaging lag in de architectuur van toegangsbeheer. Naast de publieke showcase vormt een complex administratief ecosysteem de kern van dit project. Ik heb een strikte, op permissies gebaseerde backend ontwikkeld om te garanderen dat gevoelige data en beheertools veilig vergrendeld blijven achter gelaagde authenticatie."
        }
    },
    {
        title: "Moody",
        url: "https://github.com/SukunaRaven/moody",
        image: "../images/moody-chatbot.png",
        tags: ["Python", "React", "AI", "Tailwind", "Typescript"],
        desc: { 
            en: "An AI-driven companion designed for emotional intelligence. Moody utilizes Python-based sentiment analysis and a sleek TypeScript/React frontend to track and support psychological well-being. It’s a testament to the power of technology as a tool for empathy, providing users with a safe space for reflection and growth.",
            nl: "Een AI-gestuurde metgezel ontworpen voor emotionele intelligentie. Moody gebruikt Python-gebaseerde sentimentanalyse en een strakke TypeScript/React-frontend om psychologisch welzijn te monitoren en te ondersteunen. Het is een bewijs van de kracht van technologie als instrument voor empathie en biedt gebruikers een veilige ruimte voor reflectie en groei."
        }
    },
    {
        title: "Signatuur Opdracht",
        url: "https://github.com/SukunaRaven/signatuur-opdracht",
        image: "../images/signatuuropdracht.png",
        tags: ["HTML", "CSS", "JavaScript"],
        desc: { 
            en: "A living document of technical growth. Signatuur Opdracht serves as a personal development framework tracking my evolution through the second year of my software engineering studies. It represents the transition from writing code that works to architecting systems that scale, acting as a signature of my personal coding standards and aesthetic progress.",
            nl: "Een levend document van technische groei. Signatuur Opdracht dient als een framework voor persoonlijke ontwikkeling, waarin mijn evolutie gedurende het tweede jaar van mijn studie Software Engineering wordt bijgehouden. Het vertegenwoordigt de overgang van code die simpelweg werkt naar het architectureren van schaalbare systemen."
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
        "phil-security-desc": "In a digital landscape of rising vulnerabilities, I treat data privacy as a non-negotiable human right. Leveraging my legal background, I bridge the gap between complex regulatory requirements (GDPR/Data Privacy) and clean, defensible code. Security isn't a feature; it's the foundation of trust.",
        "phil-perf-head": "High-Stakes Performance",
        "phil-perf-desc": "Performance is accessibility. Borrowing from the discipline of emergency response, I prioritize the 'critical path' of user interaction. I build systems designed to perform under pressure, ensuring low latency, high availability, and a seamless experience when it matters most.",
        "phil-access-head": "Inclusive Architecture",
        "phil-access-desc": "True innovation leaves no one behind. My certification in Sign Language is a testament to my commitment to non-verbal communication and universal accessibility. I build with WCAG standards at the core, ensuring digital products are intuitive for users of all abilities.",
        "hero-title": "Crafting Digital Excellence.",
        "hero-sub": "I create with the vibel of a craftsman and the precision of an engineer, building scalable, accessible, and exciting web experiences for the modern era.",
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
        "phil-security-desc": "In een digitaal landschap met toenemende kwetsbaarheden beschouw ik privacy als een onvervreemdbaar recht. Dankzij mijn juridische achtergrond sla ik de brug tussen complexe regelgeving en schone, verdedigbare code. Security is geen extra optie; het is het fundament van vertrouwen.",
        "phil-perf-head": "High-Stakes Prestaties",
        "phil-perf-desc": "Performance is toegankelijkheid. Geïnspireerd door de discipline van noodhulp, geef ik prioriteit aan het 'kritieke pad' van gebruikersinteractie. Ik bouw systemen die presteren onder druk, met lage latentie en hoge beschikbaarheid wanneer het er echt toe doet.",
        "phil-access-head": "Inclusieve Architectuur",
        "phil-access-desc": "Echte innovatie laat niemand achter. Mijn certificering in gebarentaal is het bewijs van mijn toewijding aan non-verbale communicatie en universele toegankelijkheid. Ik ontwikkel met WCAG-normen als uitgangspunt, zodat digitale producten intuïtief zijn voor iedereen.",
        "hero-title": "Digitale Excellentie.",
        "hero-sub": "Ik creëer met de vibe van een ambachtsman en de precisie van een ingenieur, en bouw schaalbare, toegankelijke en opwindende webervaringen voor het moderne tijdperk.",
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