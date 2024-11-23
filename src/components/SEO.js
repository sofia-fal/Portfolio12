import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sofia Fal - Développeur Web à Toulouse",
    description:
      "Portfolio de Sofia Fal, développeur web front-end spécialisé en HTML, CSS, JavaScript, et React avec 6 ans d'expérience.",
    url: "https://portfolio-sofiafal.vercel.app/",
    creator: {
      "@type": "Organization",
      name: "Sofia Fal",
      url: "https://portfolio-sofiafal.vercel.app/",
      contactPoint: {
        "@type": "ContactPoint",
        email: "sofia-fal@hotmail.com",
        telephone: "+33-6-52-16-70-15",
        contactType: "customer support",
        areaServed: "FR",
      },
      sameAs: ["https://github.com/sofia-fal"],
    },
    hasPart: {
      "@type": "OfferCatalog",
      name: "Services proposés",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Développement de sites web",
            description:
              "Création de sites web modernes et responsive adaptés aux besoins des clients.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Optimisation SEO",
            description:
              "Amélioration du référencement naturel pour maximiser la visibilité en ligne.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Développement d'applications web",
            description:
              "Conception et déploiement d'applications web performantes et évolutives.",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
