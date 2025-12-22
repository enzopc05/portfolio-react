// ========================================
// INFORMATIONS PERSONNELLES
// ========================================
export const personalInfo = {
  name: "Enzo Pace",
  currentYear: 3, // ⚠️ MODIFIER CHAQUE ANNÉE (1, 2 ou 3)
  startYear: 2025, // Année de début de votre Bachelor
  formation: "Bachelor Développement Informatique",
  school: "Sup de Vinci - Campus de La Défense",
  email: "enzopropace@gmail.com",
  phone: "+33 6 16 25 49 14",
  location: "Saint Ouen l'Aumône, France",
  github: "https://github.com/enzopc05",
  linkedin: "https://www.linkedin.com/in/enzo-pace-15811a266/",
  profileImage: "/images/profile.jpg",
  cvUrl: "/documents/CV.pdf",
  bio: `Étudiant passionné en informatique, 3ème année de Bachelor. Spécialisé en développement web/fullstack. Objectif : poursuite en Master pour devenir Chef de Projet IT.`,
};

// ========================================
// PROJETS
// ========================================
export const projects = [
  // --- École (déjà présents, conservés/ajustés) ---
  {
    id: 1,
    title: "Les4Fantastiques",
    category: "ecole",
    year: 2024,
    yearOfStudy: 2,
    technologies: ["HTML", "CSS", "JavaScript", "API Marvel"],
    image: "/images/projects/projetecole1.png",
    shortDescription:
      "Requête à l'API Marvel afin d'avoir des résultats visuels",
    fullDescription:
      "Projet d'équipe : interrogation de l'API Marvel pour afficher fiches perso, recherche et filtres avec UI responsive.",
    features: [
      "Intégration API Marvel",
      "Recherche en temps réel",
      "Interface responsive",
      "Gestion d’équipe via Git",
    ],
    learnings: [
      "Consommation d’API externes",
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
      "Suite de 3 apps : admin web, achat mobile, et contrôle d’accès (QR codes/scan). Données et schémas fournis.",
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

  // --- Entreprise / Projets issus de realisations.js ---
  {
    id: 5,
    title: "Macro EXCEL (Automation WMS)",
    category: "entreprise",
    year: 2024,
    yearOfStudy: 2,
    technologies: ["VBA", "Excel"],
    image: "/images/projects/macro-excel.png",
    shortDescription:
      "Automatisations Excel pour la logistique (rapports/exports).",
    fullDescription:
      "Macros VBA pour accélérer traitements, contrôles et exports liés au WMS / traçabilité interne.",
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
      "Service .NET consommant la SP-API d’Amazon pour récupérer/mettre à jour données produits/commandes. Doc d’utilisation fournie (PDF).",
    features: ["Auth clés/roles", "Récupération commandes", "Logs & retries"],
    learnings: [".NET Web API", "OAuth/Signatures", "Résilience prod"],
    githubUrl: null,
    demoUrl: null,
    documents: [
      {
        title: "Documentation d'utilisation",
        type: "pdf",
        url: "Portfolio/doc/amazon_doc.pdf", // source: modal4
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
      "Développement d’une API REST pour orchestrer flux POM : schémas, BDD de test et conventions Git documentés.",
    features: [
      "Endpoints REST",
      "BDD de test fournie",
      "Convention Git d’équipe",
    ],
    learnings: [
      "Conventions d’équipe",
      "Design d’API",
      "Tests / Environnements",
    ],
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
      "Évolution du socle POM pour périmètre SAG : documentation et schéma d’arborescence partagés.",
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
      "Application interne pour vérifier la conformité/validité des numéros de traçabilité. README + procédure PDF.",
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

  // --- École (repéré dans realisations.js) ---
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
      "Prototype visuel de l’interface utilisateur (flows d’écrans, composants).",
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

  // --- Nouveaux projets (cours) ---
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
// COMPÉTENCES (4 catégories + ajouts HTML)
// ========================================
export const skills = {
  webDev: {
    category: "Développement Web",
    items: [
      // existants conservés (couleurs officielles)
      { name: "HTML", level: 90, color: "#E34F26" },
      { name: "CSS", level: 85, color: "#264DE4" },
      { name: "React", level: 75, color: "#61DAFB" },
      { name: "JavaScript", level: 80, color: "#F0DB4F" },

      // depuis skills-data + ton HTML (couleurs distinctes et cohérentes)
      { name: "PHP", level: 80, color: "#777BB4" },
      { name: "XML", level: 80, color: "#0085C3" },
      { name: "API Rest", level: 60, color: "#6C63FF" },
      { name: "CMS", level: 60, color: "#FF6B6B" },
    ],
  },

  programmation: {
    category: "Programmation",
    items: [
      { name: "Python", level: 80, color: "#306998" },
      { name: "Java", level: 80, color: "#FBBC05" },
      { name: "C#", level: 70, color: "#239120" },
      { name: "VBA", level: 80, color: "#FBBC05" },
      { name: "VB6", level: 60, color: "#FBBC05" },
      { name: "JavaFX", level: 60, color: "#FBBC05" },
    ],
  },

  database: {
    category: "Bases de données",
    items: [
      { name: "SQL", level: 80, color: "#F29111" },
      { name: "MySQL", level: 60, color: "#00758F" },
    ],
  },

  tools: {
    category: "Outils & Méthodes",
    items: [
      // IDE & Éditeurs
      { name: "VS Code", level: 80, color: "#007ACC" },
      { name: "IntelliJ IDEA", level: 60, color: "#0A7EBB" },
      { name: "Postman", level: 70, color: "#FF6C37" },

      // Collaboration & Versioning
      { name: "GitHub", level: 70, color: "#181717" },
      { name: "Git", level: 50, color: "#F1502F" },
      { name: "Notion", level: 60, color: "#0A7EBB" },
      { name: "WAMP", level: 60, color: "#A64D79" },

      // Infrastructure & Sécurité (couleurs rouges cohérentes)
      { name: "Réseau", level: 40, color: "#FF6B6B" },
      { name: "Cybersécurité", level: 40, color: "#FF6B6B" },
      { name: "Hébergement web", level: 60, color: "#FF6B6B" },

      // Compétences transverses
      { name: "Méthodes agiles", level: 80, color: "#8E24AA" },
      { name: "Gestion de projet", level: 85, color: "#8E24AA" },
      { name: "Création de contenu", level: 80, color: "#F06292" },
      { name: "Excel", level: 60, color: "#26A69A" },
    ],
  },
};

// ========================================
// TIMELINE (Parcours)
// ========================================
export const timeline = [
  {
    id: 5,
    year: "2025 - Aujourd'hui",
    period: "Bachelor Développement Informatique",
    icon: "📚",
    description:
      "Formation en Bachelor Développement Informatique à Sup de Vinci – Campus Paris La Défense (alternance).",
    achievements: [
      "Développement Full-Stack : front, back, API ; HTML/CSS/JS (niveau avancé).", // ref
      "Frameworks & environnements : React / Angular / Node.js ; PHP (Symfony/Laravel).", // ref
      "Mobile : Kotlin (Android) et Swift (iOS).", // ref
      "Bases de données : exploitation et connexion performante.", // ref
      "Versioning & collaboration : GitHub / GitLab, projets en équipe.", // ref
      "Méthodes agiles (Scrum), gestion de projet et pitch des livrables.", // ref
    ],
    color: "#805c0aff",
    isCurrent: true,
  },
  {
    id: 4,
    year: "2024 - Aujourd'hui",
    period: "Eurodislog",
    icon: "🚀",
    description:
      "Alternance en tant que développeur chez Eurodislog, entreprise spécialisée en logistique",
    achievements: [
      "Développement d'API REST en ASP.NET Core",
      "Gestion de bases de données SQL Server",
      "Authentification par clé API",
      "Travail sur des solutions logistiques innovantes",
      "Collaboration avec les équipes métier",
    ],
    color: "#daab3a",
    isCurrent: true,
  },
  {
    id: 3,
    year: "2023 - 2025",
    period: "BTS SIO SLAM",
    icon: "🎓",
    description:
      "Formation en Services Informatiques aux Organisations - Spécialité Solutions Logicielles et Applications Métiers",
    achievements: [
      "Développement web (HTML/CSS/JS/PHP/React)",
      "Programmation orientée objet (Java, C#, Python)",
      "Gestion de bases de données SQL",
      "Gestion de projet Agile",
      "Réalisation de nombreux projets scolaires",
    ],
    color: "#b67332",
  },
  {
    id: 2,
    year: "2023 - 2024",
    period: "RE/MAX France",
    icon: "💼",
    description: "Assistant projet IT en alternance chez RE/MAX France",
    achievements: [
      "Support IT pour le réseau de franchises",
      "Gestion des flux XML entre plateformes",
      "Analyse et correction de bugs sur le CRM",
      "Travail en équipe dans un environnement dynamique",
    ],
    color: "#e24a68",
  },
  {
    id: 1,
    year: "2021 - 2023",
    period: "Baccalauréat STI2D",
    icon: "🎓",
    description:
      "Formation au lycée avec spécialisation en Sciences et Technologies de l'Industrie et du Développement Durable",
    achievements: [
      "Obtention du Baccalauréat STI2D",
      "Découverte de la programmation",
      "Premiers projets techniques",
      "Développement de la logique algorithmique",
    ],
    color: "#4cadad",
  },
];

// ========================================
// FONCTIONS UTILES
// ========================================

// Obtenir l'année académique actuelle
export const getCurrentAcademicYear = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-11

  // Si on est entre septembre (8) et décembre (11)
  if (month >= 8) {
    return `${year}-${year + 1}`;
  }
  return `${year - 1}-${year}`;
};

// Filtrer les projets par année d'études
export const getProjectsByYear = (year) => {
  return projects.filter((project) => project.yearOfStudy === year);
};

// Obtenir les projets de l'année en cours
export const getCurrentYearProjects = () => {
  return getProjectsByYear(personalInfo.currentYear);
};

// Calculer le nombre total de projets
export const getTotalProjects = () => projects.length;

// Obtenir toutes les technologies utilisées (uniques)
export const getAllTechnologies = () => {
  const allTechs = projects.flatMap((project) => project.technologies);
  return [...new Set(allTechs)].sort();
};
