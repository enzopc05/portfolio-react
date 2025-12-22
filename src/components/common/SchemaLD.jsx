import React, { useMemo } from "react";
import { personalInfo, projects } from "../../data/portfolioData";

const SchemaLD = () => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  const graph = useMemo(() => {
    const person = {
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: "Développeur Fullstack / Chef de Projet IT",
      email: `mailto:${personalInfo.email}`,
      url: `${baseUrl}/`,
      image: personalInfo.profileImage ? `${baseUrl}${personalInfo.profileImage}` : undefined,
      sameAs: [personalInfo.linkedin, personalInfo.github].filter(Boolean),
      address: personalInfo.location,
      alumniOf: personalInfo.school,
    };

    const projectNodes = projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: `${baseUrl}/?project=${project.id}`,
      description: project.shortDescription || project.fullDescription,
      dateCreated: `${project.year}-01-01`,
      genre: project.category === "ecole" ? "Education" : "Professional",
      keywords: project.technologies?.join(", ") || undefined,
      inLanguage: "fr",
    }));

    return [person, ...projectNodes];
  }, [baseUrl]);

  const jsonLd = useMemo(
    () =>
      JSON.stringify(
        {
          "@context": "https://schema.org",
          "@graph": graph,
        },
        null,
        2
      ),
    [graph]
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default SchemaLD;
