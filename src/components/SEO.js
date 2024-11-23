import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sofia Fal - Développeur Web à Toulouse",
    description:
      "Portfolio de Sofia Fal, développeur web front-end spécialisé en HTML, CSS, JavaScript, et React avec 6 ans d'expérience",
    address: {
      "@type": "PostalAddress",
      streetAddress: "945 Chemin de Tutelle",
      addressLocality: "Salles-sur-Garonne",
      postalCode: "31390",
      addressRegion: "OC",
      addressCountry: "FR",
    },
    priceRange: "$$",
    url: "https://portfolio-sofiafal.vercel.app/",
    telephone: "+33652167015",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
