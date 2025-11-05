// ========================================
// INFORMATIONS PERSONNELLES
// ========================================
export const personalInfo = {
  name: "Enzo Pace",
  currentYear: 3, // ⚠️ MODIFIER CHAQUE ANNÉE (1, 2 ou 3)
  startYear: 2025, // Année de début de votre Bachelor
  formation: "Bachelor Développement Informatique",
  school: "IUT de Votre Ville",
  email: "enzo",
  phone: "+33 6 16 25 49 14",
  location: "Saint Ouen l'Aumône, France",
  github: "https://github.com/enzopc05",
  linkedin: "https://www.linkedin.com/in/enzo-pace-15811a266/",
  profileImage: "/images/profile.jpg",
  cvUrl: "/documents/CV.pdf",
  bio: `Étudiant passionné en informatique, actuellement en ${3}ème année de BUT Informatique. 
        Spécialisé dans le développement web et les applications.`,
};

// ========================================
// PROJETS
// ========================================
export const projects = [
  {
    id: 1,
    title: "Les4Fantastiques",
    category: "ecole",
    year: 2024,
    yearOfStudy: 2, // Année d'études où le projet a été réalisé
    technologies: ["HTML", "CSS", "JavaScript", "API Marvel"],
    image: "/images/projects/projetecole1.png",
    shortDescription:
      "Requête à l'API Marvel afin d'avoir des résultats visuels",
    fullDescription:
      "Projet réalisé en équipe de 4 permettant d'interroger l'API Marvel pour afficher des informations détaillées sur les personnages. Interface responsive avec système de recherche dynamique et filtres.",
    features: [
      "Intégration de l'API Marvel",
      "Recherche en temps réel",
      "Interface responsive",
      "Gestion d'équipe avec Git",
    ],
    learnings: [
      "Travail avec des APIs externes",
      "Gestion d'équipe et Git",
      "Manipulation du DOM en JavaScript",
    ],
    githubUrl: "https://github.com/...",
    demoUrl: null,
  },
  {
    id: 2,
    title: "GhostTrack",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["Java", "JavaFX", "SQL"],
    image: "/images/projects/ghosttrack.jpg",
    shortDescription: "Logiciel de ticketing sur le thème des trains",
    fullDescription:
      "Application desktop de gestion de tickets pour un système ferroviaire fictif. Système complet avec gestion des réservations, des horaires et des utilisateurs.",
    features: [
      "Interface graphique JavaFX",
      "Base de données SQL",
      "Gestion des réservations",
      "Système d'authentification",
    ],
    learnings: [
      "Programmation orientée objet avancée",
      "Interface graphique avec JavaFX",
      "Architecture MVC",
    ],
    githubUrl: "https://github.com/...",
    demoUrl: null,
  },
  {
    id: 3,
    title: "JO Ticket",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQL"],
    image: "/images/projects/Logo_JO_d'été_-_Paris_2024.png",
    shortDescription: "Système complet de billetterie pour les Jeux Olympiques",
    fullDescription:
      "Projet ambitieux comprenant 3 applications : une interface d'administration pour gérer les événements, une application mobile pour l'achat de tickets, et un système de scan de QR codes pour les contrôles d'accès.",
    features: [
      "Application d'administration web",
      "Application mobile",
      "Génération de QR codes",
      "Scanner de tickets",
      "Paiement en ligne",
    ],
    learnings: [
      "Framework Django",
      "Développement full-stack",
      "Application mobile",
      "Architecture multi-plateformes",
    ],
    githubUrl: "https://github.com/...",
    demoUrl: null,
  },
  {
    id: 4,
    title: "gestEPI",
    category: "ecole",
    year: 2025,
    yearOfStudy: 2,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/climbing-4514507_1280.jpg",
    shortDescription:
      "Gestion d'Équipements de Protection Individuelle pour l'escalade",
    fullDescription:
      "Application web complète pour gérer les EPI dans le cadre de l'escalade. Permet le suivi des équipements, leur état, les dates de maintenance et leur attribution aux grimpeurs.",
    features: [
      "Interface React moderne",
      "API REST avec Express",
      "Base de données MongoDB",
      "Système d'alertes de maintenance",
    ],
    learnings: [
      "React et hooks",
      "Architecture REST",
      "MongoDB et NoSQL",
      "Authentification JWT",
    ],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.exemple.com",
  },
];

// ========================================
// COMPÉTENCES
// ========================================
export const skills = {
  webDev: {
    category: "Développement Web",
    items: [
      { name: "HTML", level: 90, color: "#E34F26" },
      { name: "CSS", level: 85, color: "#264DE4" },
      { name: "React", level: 75, color: "#61DAFB" },
    ],
  },
  programmation: {
    category: "Programmation",
    items: [
      { name: "JavaScript", level: 80, color: "#F0DB4F" },
      { name: "Python", level: 70, color: "#306998" },
    ],
  },
  database: {
    category: "Bases de données",
    items: [{ name: "MySQL", level: 60, color: "#4479A1" }],
  },
  tools: {
    category: "Outils & Méthodes",
    items: [{ name: "Git", level: 70, color: "#F1502F" }],
  },
};

// ========================================
// TIMELINE (Parcours)
// ========================================
export const timeline = [
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
    id: 3,
    year: "2023 - 2025",
    period: "BTS SIO SLAM",
    icon: "📚",
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
