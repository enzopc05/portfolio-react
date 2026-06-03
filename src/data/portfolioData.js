// ========================================
// INFORMATIONS PERSONNELLES
// ========================================
export const personalInfo = {
  name: "Enzo Pace",
  currentYear: 3,
  startYear: 2025,
  formation: "Bachelor Développement Informatique",
  school: "Sup de Vinci — Campus Paris La Défense",
  email: "enzopace05@gmail.com",
  phone: "+33 6 16 25 49 14",
  location: "Saint-Ouen-l'Aumône (95)",
  github: "https://github.com/enzopc05",
  linkedin: "https://www.linkedin.com/in/enzo-pace-15811a266/",
  portfolio: "https://www.enzopc.com",
  profileImage: "/images/profile.jpg",
  cvUrl: "/documents/CV.pdf",
  bio: `Développeur fullstack en dernière année de Bachelor, actuellement en alternance chez Eurodislog. À la recherche d'une alternance de 24 mois à partir de septembre 2026 pour un BAC+5 Expert en Ingénierie Informatique (E3IN) à l'ESIEE-IT.`,

  // Recherche d'alternance
  seeking: {
    type: "Alternance 24 mois",
    startDate: "Septembre 2026",
    formation: "BAC+5 Expert en Ingénierie Informatique et Innovation Numérique (E3IN)",
    school: "ESIEE-IT — Pontoise",
    rhythm: "1 mois entreprise / 1 mois formation",
  },

  // Langues
  languages: [
    { name: "Français", level: "Natif", code: "fr" },
    { name: "Anglais", level: "B2 — Intermédiaire supérieur", code: "en" },
    { name: "Espagnol", level: "B1 — Intermédiaire", code: "es" },
  ],

  // Certifications
  certifications: ["MOOC RGPD — CNIL"],

  // Centres d'intérêt
  interests: {
    cultural: ["Musique", "Voyages", "Photographie"],
    sport: ["Basket-Ball", "Musculation"],
  },
};

// ========================================
// PROJETS
// ========================================
export const projects = [
  // --- École ---
  {
    id: 1,
    title: "Les4Fantastiques",
    category: "ecole",
    year: 2024,
    yearOfStudy: 2,
    technologies: ["HTML", "CSS", "JavaScript", "API Marvel"],
    image: "/images/projects/projetecole1.png",
    shortDescription: "Requête à l'API Marvel afin d'avoir des résultats visuels",
    fullDescription:
      "Projet d'équipe : interrogation de l'API Marvel pour afficher fiches perso, recherche et filtres avec UI responsive.",
    features: [
      "Intégration API Marvel",
      "Recherche en temps réel",
      "Interface responsive",
      "Gestion d'équipe via Git",
    ],
    learnings: [
      "Consommation d'API externes",
      "Manipulation du DOM",
      "Workflow Git en équipe",
    ],
    githubUrl: "https://github.com/Semiiih/Les4Fantastiques",
    demoUrl: null,
  },
  {
    id: 2,
    title: "GhostTrack",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["Java", "JavaFX", "SQL"],
    image: "/images/projects/ghosttrack.png",
    shortDescription: "Logiciel de ticketing sur le thème des trains",
    fullDescription:
      "Application desktop complète pour gérer réservations, horaires et utilisateurs avec persistance SQL.",
    features: [
      "UI JavaFX",
      "CRUD complet",
      "Authentification",
      "Base de données relationnelle",
    ],
    learnings: ["POO avancée", "JavaFX", "Architecture MVC"],
    githubUrl: "https://github.com/Orosten/GhostTrack",
    demoUrl: null,
  },
  {
    id: 3,
    title: "JO Ticket",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["Python", "Django", "JavaScript", "SQL"],
    image: "/images/projects/projetecole3.png",
    shortDescription: "Système de billetterie pour les Jeux Olympiques",
    fullDescription:
      "Suite de 3 apps : admin web, achat mobile, et contrôle d'accès (QR codes/scan). Données et schémas fournis.",
    features: [
      "Back-office Django",
      "QR codes & scan",
      "Flux achat / validation",
      "Paiement (placeholder)",
    ],
    learnings: [
      "Full-stack Django",
      "Architecture multi-apps",
      "Modélisation SQL",
    ],
    githubUrl: "https://github.com/enzopc05/ProjetJO",
    demoUrl: null,
  },
  {
    id: 4,
    title: "gestEPI",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/projetecole4.png",
    shortDescription: "Gestion d'Équipements de Protection Individuelle",
    fullDescription:
      "Application web pour suivre les EPI (état, maintenance, affectation), alertes et API REST.",
    features: [
      "UI React moderne",
      "API REST Express",
      "Stockage NoSQL",
      "Alertes de maintenance",
    ],
    learnings: ["React (hooks)", "REST", "NoSQL", "Auth (JWT)"],
    githubUrl: "https://github.com/enzopc05/projet_gestEPI",
    demoUrl: null,
  },
  {
    id: 5,
    title: "Macro EXCEL (Automation WMS)",
    category: "entreprise",
    year: 2024,
    yearOfStudy: 2,
    technologies: ["VBA", "Excel"],
    image: "/images/projects/macro-excel.png",
    shortDescription: "Automatisations Excel pour la logistique (rapports/exports).",
    fullDescription:
      "Macros VBA pour accélérer traitements, contrôles et exports liés au WMS / traçabilité interne chez Eurodislog.",
    features: [
      "Génération de rapports",
      "Contrôles automatiques",
      "Exports normalisés",
    ],
    learnings: ["VBA avancé", "Optimisation process", "Qualité de données"],
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 6,
    title: "API Amazon (SP-API)",
    category: "entreprise",
    year: 2024,
    yearOfStudy: 2,
    technologies: ["C#", ".NET", "Amazon SP-API", "REST"],
    image: "/images/projects/amazon-api.png",
    shortDescription: "Intégration SP-API pour échanges e-commerce.",
    fullDescription:
      "Service .NET consommant la SP-API d'Amazon pour récupérer/mettre à jour données produits/commandes chez Eurodislog.",
    features: ["Auth clés/roles", "Récupération commandes", "Logs & retries"],
    learnings: [".NET Web API", "OAuth/Signatures", "Résilience prod"],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "Documentation d'utilisation",
        type: "pdf",
        url: "Portfolio/doc/amazon_doc.pdf",
      },
    ],
  },
  {
    id: 7,
    title: "API POM",
    category: "entreprise",
    year: 2024,
    yearOfStudy: 2,
    technologies: ["C#", ".NET", "SQL Server", "REST"],
    image: "/images/projects/pom-api.png",
    shortDescription: "API de gestion commerciale (POM).",
    fullDescription:
      "Développement d'une API REST pour orchestrer flux POM : schémas, BDD de test et conventions Git documentés.",
    features: [
      "Endpoints REST",
      "BDD de test fournie",
      "Convention Git d'équipe",
    ],
    learnings: ["Conventions d'équipe", "Design d'API", "Tests / Environnements"],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "Convention GIT",
        type: "markdown",
        url: "Portfolio/doc/Git-convention.md",
      },
      {
        title: "Schéma Projet POM",
        type: "png",
        url: "Portfolio/doc/schémaProjetPOM.png",
      },
      {
        title: "Base de donnée de test",
        type: "sql",
        url: "Portfolio/doc/pomBDD.sql",
      },
      {
        title: "README - POM API",
        type: "markdown",
        url: "Portfolio/doc/README_POM-API.md",
      },
    ],
  },
  {
    id: 8,
    title: "POM SAG",
    category: "entreprise",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["C#", ".NET", "SQL Server", "REST"],
    image: "/images/projects/pom-api.png",
    shortDescription: "Module/variation SAG autour de POM.",
    fullDescription:
      "Évolution du socle POM pour périmètre SAG : documentation et schéma d'arborescence partagés.",
    features: ["Endpoints dédiés", "Arborescence standardisée", "Docs projet"],
    learnings: ["Factorisation", "Versionning", "Livraison continue"],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "README - POM SAG",
        type: "markdown",
        url: "Portfolio/doc/README_POM-SAG.md",
      },
      {
        title: "Schéma Projet POM",
        type: "png",
        url: "Portfolio/doc/schémaProjetPOM.png",
      },
    ],
  },
  {
    id: 9,
    title: "Vérification numéro de traçabilité",
    category: "entreprise",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["C#", ".NET", "SQL Server"],
    image: "/images/projects/verif-traca.png",
    shortDescription: "Outil de contrôle des numéros de traçabilité.",
    fullDescription:
      "Application interne Eurodislog pour vérifier la conformité/validité des numéros de traçabilité.",
    features: ["Vérifications métiers", "Exports", "Journalisation"],
    learnings: ["Conformité process", "Qualité de données", "UX interne"],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "README - Vérification traçabilité",
        type: "markdown",
        url: "Portfolio/doc/README_VerifTraca.md",
      },
      {
        title: "Documentation d'utilisation",
        type: "pdf",
        url: "Portfolio/doc/EURO-XXX-IN-00X-A_Verification_traca_exo.pdf",
      },
    ],
  },
  {
    id: 10,
    title: "AlerTrain (maquette GhostTrack)",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["Figma", "UI Design"],
    image: "/images/projects/alertrain.png",
    shortDescription: "Maquette UI du projet AlerTrain.",
    fullDescription:
      "Prototype visuel de l'interface utilisateur (flows d'écrans, composants).",
    features: ["Design composants", "Parcours utilisateur", "Export assets"],
    learnings: ["Systèmes de design", "Prototypage", "Hand-off"],
    githubUrl: "https://github.com/Jeeyrr/AlerTrain",
    demoUrl: null,
    documents: [
      {
        title: "Maquette - Projet AlerTrain",
        type: "image",
        url: "Portfolio/doc/Maquette (1).png",
      },
    ],
  },
  {
    id: 11,
    title: "NAHB - Not Another Hero's Book",
    category: "ecole",
    year: 2025,
    yearOfStudy: 3,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/projects/nahb-cover.png",
    shortDescription:
      "Plateforme fullstack pour créer et jouer des histoires interactives (dont vous êtes le héros).",
    fullDescription:
      "Les auteurs conçoivent des histoires arborescentes, les lecteurs jouent en faisant des choix, et les admins modèrent la plateforme avec stats et rôles.",
    features: [
      "Auth JWT avec rôles (Reader, Author, Admin)",
      "CRUD complet histoires/pages/choix avec fins nommées",
      "Stats de parcours et collection de fins",
      "Upload d'images, filtrage et recherche",
      "Docker Compose prêt pour backend/frontend/DB",
    ],
    learnings: [
      "Conception fullstack modulaire",
      "Sécurisation JWT et rôles",
      "Arborescences narratives et stats de parcours",
      "CI locale via Docker Compose",
    ],
    githubUrl: "https://github.com/enzo-supdev/Enzo_Rayane_NAHB",
    demoUrl: null,
    documents: [
      {
        title: "README NAHB (détails)",
        type: "markdown",
        url: "/documents/README%20(2).md",
      },
    ],
  },
  {
    id: 12,
    title: "DeepSea Archives",
    category: "ecole",
    year: 2025,
    yearOfStudy: 3,
    technologies: ["Microservices", "Express", "Prisma", "PostgreSQL", "Docker"],
    image: "/images/projects/deepsea-cover.png",
    shortDescription:
      "Plateforme microservices pour cataloguer des créatures abyssales et valider des observations par des experts.",
    fullDescription:
      "Trois services (auth, observation, taxonomy) orchestrent l'authentification, la modération, la validation et la classification taxonomique avec statistiques globales.",
    features: [
      "3 microservices indépendants (auth, observation, taxonomy)",
      "Soft delete et historisation complète des actions",
      "Validation par rôles USER/EXPERT/ADMIN",
      "Prisma + PostgreSQL multi-instances",
      "Docker Compose et scripts de migration",
    ],
    learnings: [
      "Architecture microservices Express",
      "Prisma sur bases multiples",
      "Gestion fine des rôles et modération",
      "Observabilité et statistiques métier",
    ],
    githubUrl: "https://github.com/enzo-supdev/Enzo_Rayane_DeepSea",
    demoUrl: null,
    documents: [
      {
        title: "README DeepSea (détails)",
        type: "markdown",
        url: "/documents/README%20(3).md",
      },
    ],
  },
  {
    id: 13,
    title: "DynamicsToXmlTranslator",
    category: "entreprise",
    year: 2025,
    yearOfStudy: 3,
    technologies: [".NET 8", "C#", "SQL Server", "XML"],
    image: "/images/projects/dynamics-xml-translator.png",
    shortDescription:
      "Traducteur automatisé Dynamics 365 vers XML/TXT compatibles WINDEV/SPEED (5 entités).",
    fullDescription:
      "Console .NET 8 avec DI, services par entité, export XML/TXT (Articles, PO, RO, TO, Packing Slips), traitement UTF-8, mode Test/Production, export par lots et logs Serilog.",
    features: [
      "Export Articles/PO/RO/TO en XML + Packing Slips en 2 TXT",
      "Exclusion automatique ART_STAT=3",
      "Traitement UTF-8 avancé (caractères spéciaux)",
      "Mode Test et Production avec marquage",
      "Export par lots pour gros volumes",
      "Logging rotatif avec Serilog",
    ],
    learnings: [
      "Architecture .NET 8 modulaire (DI/services)",
      "Mappage modèles Dynamics ↔ WINDEV/SPEED",
      "Performances batch et IO fichiers",
      "Observabilité via logs et statistiques",
    ],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "README DynamicsToXmlTranslator",
        type: "markdown",
        url: "/documents/README%20(4).md",
      },
    ],
  },
  {
    id: 14,
    title: "API_BioR - Sync Dynamics → SQL Server",
    category: "entreprise",
    year: 2025,
    yearOfStudy: 3,
    technologies: [".NET 8", "C#", "SQL Server", "Azure AD", "OAuth2"],
    image: "/images/projects/api-bior.png",
    shortDescription:
      "Synchronisation intelligente Dynamics 365 vers SQL Server (JSON_IN/OUT) avec confirmations automatiques.",
    fullDescription:
      "Outil .NET 8 orchestrant l'auth OAuth2 Azure AD, la sync des Articles/Orders vers JSON_IN, la traçabilité JSON_OUT, les confirmations automatiques (PO/RO/TO/Sales) et le lancement du translator.",
    features: [
      "Détection de changements via hash et clés métier",
      "Gestion ACTIVE/DELETED + ajout automatique JSON_SENT",
      "Confirmations Articles et 4 types de commandes",
      "Traçabilité complète dans JSON_OUT",
      "Lancement conditionnel de DynamicsToXmlTranslator",
      "Configuration via appsettings.json",
    ],
    learnings: [
      "Auth Azure AD / OAuth2",
      "Intégration API Dynamics 365",
      "Optimisations SQL Server et index",
      "Orchestration de workflows et résilience",
    ],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "README API_BioR",
        type: "markdown",
        url: "/documents/README%20(5).md",
      },
    ],
  },
];

// ========================================
// COMPÉTENCES
// ========================================
export const skills = {
  webDev: {
    category: "Développement Web",
    items: [
      { name: "HTML5", level: 90, color: "#E34F26" },
      { name: "CSS3", level: 85, color: "#264DE4" },
      { name: "JavaScript", level: 80, color: "#F0DB4F" },
      { name: "React", level: 75, color: "#61DAFB" },
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "API REST", level: 75, color: "#6C63FF" },
      { name: "XML / JSON", level: 80, color: "#0085C3" },
      { name: "PHP", level: 65, color: "#777BB4" },
    ],
  },

  programmation: {
    category: "Programmation",
    items: [
      { name: "C# / .NET", level: 80, color: "#239120" },
      { name: "Python / Django", level: 75, color: "#306998" },
      { name: "Java", level: 75, color: "#FBBC05" },
      { name: "VBA / VB6", level: 80, color: "#B7472A" },
      { name: "JWT / OAuth2", level: 70, color: "#6C63FF" },
      { name: "Docker", level: 60, color: "#2496ED" },
    ],
  },

  database: {
    category: "Bases de données",
    items: [
      { name: "SQL Server", level: 80, color: "#CC2927" },
      { name: "MySQL", level: 70, color: "#00758F" },
      { name: "MongoDB", level: 65, color: "#47A248" },
      { name: "PostgreSQL", level: 55, color: "#336791" },
    ],
  },

  tools: {
    category: "Outils & Méthodes",
    items: [
      { name: "Git / GitHub", level: 80, color: "#F1502F" },
      { name: "Postman", level: 75, color: "#FF6C37" },
      { name: "Docker", level: 60, color: "#2496ED" },
      { name: "Méthodes Agile / Scrum", level: 80, color: "#8E24AA" },
      { name: "Gestion de projet", level: 85, color: "#8E24AA" },
      { name: "VS Code / IntelliJ", level: 85, color: "#007ACC" },
      { name: "Figma", level: 65, color: "#F06292" },
      { name: "Excel / VBA", level: 80, color: "#26A69A" },
    ],
  },
};

// ========================================
// TIMELINE (Parcours)
// ========================================
export const timeline = [
  {
    id: 6,
    year: "09/2026 — 07/2028",
    period: "BAC+5 E3IN — ESIEE-IT",
    icon: "🎓",
    description:
      "Expert en Ingénierie Informatique et Innovation Numérique en alternance à l'ESIEE-IT (Pontoise). Rythme : 1 mois entreprise / 1 mois formation. À la recherche d'une entreprise d'accueil.",
    achievements: [
      "Ingénierie logicielle : C#, Java, DevOps, architecture des SI",
      "Cloud, Docker et conteneurisation",
      "Gestion de projets Agile / Scrum, conduite du changement",
      "Management des SI et cybersécurité",
      "Qualité logicielle et tests automatisés",
    ],
    color: "#C8920A",
    isCurrent: false,
    isUpcoming: true,
  },
  {
    id: 5,
    year: "09/2025 — 07/2026",
    period: "Bachelor Développement Informatique — Sup de Vinci",
    icon: "📚",
    description:
      "Formation en Bachelor Développement Informatique (Bac+3) à Sup de Vinci – Campus Paris La Défense, en alternance chez Eurodislog.",
    achievements: [
      "Développement Full-Stack : front, back, API REST",
      "Frameworks : React, Node.js, Express, Django",
      "Architecture microservices et Docker Compose",
      "Bases de données : SQL Server, MongoDB, PostgreSQL",
      "Méthodes Agile, Scrum et gestion de projet",
    ],
    color: "#C8920A",
    isCurrent: true,
  },
  {
    id: 4,
    year: "09/2024 — 08/2026",
    period: "Eurodislog — Chargé de projet IT junior",
    icon: "🚀",
    description:
      "Contrat d'apprentissage chez Eurodislog (Saint-Ouen-l'Aumône), entreprise spécialisée en logistique e-commerce.",
    achievements: [
      "Évolution et maintenance d'applications internes (VB6)",
      "Développement d'API REST en ASP.NET Core (C#)",
      "Automatisation de processus via macros Excel (VBA)",
      "Optimisation de logiciels métiers et intégration Dynamics 365",
      "Gestion de bases de données SQL Server",
    ],
    color: "#C8920A",
    isCurrent: true,
  },
  {
    id: 3,
    year: "09/2023 — 07/2025",
    period: "BTS SIO SLAM — ESIEE-IT",
    icon: "🎓",
    description:
      "BTS Systèmes Informatiques aux Organisations – Option SLAM à l'ESIEE-IT (Pontoise), en alternance.",
    achievements: [
      "Développement web et logiciel (POO, bases de données, SQL)",
      "Administration réseau et cybersécurité de base",
      "Gestion de projets IT en environnement professionnel",
      "Réalisation de nombreux projets scolaires (Java, C#, Python, React)",
    ],
    color: "#7A4F2A",
  },
  {
    id: 2,
    year: "08/2023 — 08/2024",
    period: "RE/MAX France — Assistant chef de projet IT",
    icon: "💼",
    description:
      "Contrat d'apprentissage chez RE/MAX France (Rueil-Malmaison) en tant qu'assistant chef de projet IT.",
    achievements: [
      "Support informatique et accompagnement des franchises",
      "Formation des utilisateurs au CRM et assistance quotidienne",
      "Gestion des flux XML entre plateformes",
      "Gestion du ticketing et suivi des incidents",
      "Analyse et qualification de bugs applicatifs",
    ],
    color: "#5590C0",
  },
  {
    id: 1,
    year: "07/2023",
    period: "Baccalauréat STI2D — Mention Bien",
    icon: "🏆",
    description:
      "Obtention du Baccalauréat STI2D avec mention Bien au Lycée Jean Perrin (Saint-Ouen-l'Aumône).",
    achievements: [
      "Mention Bien",
      "Spécialisation Sciences et Technologies de l'Industrie",
      "Découverte de la programmation et de l'algorithmique",
      "Premiers projets techniques",
    ],
    color: "#4cadad",
  },
];

// ========================================
// FONCTIONS UTILES
// ========================================

export const getCurrentAcademicYear = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  if (month >= 8) return `${year}-${year + 1}`;
  return `${year - 1}-${year}`;
};

export const getProjectsByYear = (year) =>
  projects.filter((project) => project.yearOfStudy === year);

export const getCurrentYearProjects = () =>
  getProjectsByYear(personalInfo.currentYear);

export const getTotalProjects = () => projects.length;

export const getAllTechnologies = () => {
  const allTechs = projects.flatMap((project) => project.technologies);
  return [...new Set(allTechs)].sort();
};
