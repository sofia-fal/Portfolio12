import React from "react";
import { Box, Typography, Chip } from "@mui/material";

export default function PortfolioBlock({
  image,
  source,
  title,
  description,
  skills,
  details, // Nouveau prop pour les détails supplémentaires
}) {
  return (
    <Box
      position='relative' // Position relative pour gérer les éléments absolus (overlay)
      sx={{
        "&:hover .overlay": {
          opacity: 1, // Rendre l'overlay visible au survol
        },
      }}
    >
      {/* Image et contenu de la grille */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        p={2} // Padding global
      >
        <Box
          component='img'
          src={image}
          alt={title}
          sx={{
            width: "100%",
            maxWidth: "300px", // Limite la taille de l'image
            borderRadius: "8px", // Coins légèrement arrondis
            mb: 2, // Espace sous l'image
          }}
        />
        <Typography variant='h6' mt={2}>
          {title}
        </Typography>
        <Box
          mt={1}
          p={2}
          sx={{
            backgroundColor: "#fff", // Fond blanc pour la description
            borderRadius: "8px", // Coins arrondis
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Ombre légère
          }}
        >
          <Typography variant='body2' color='textSecondary'>
            {description}
          </Typography>
        </Box>
        <Box
          mt={2}
          display='flex'
          gap={1}
          flexWrap='wrap'
          justifyContent='center'
          sx={{
            backgroundColor: "#fff", // Fond blanc pour les skills
            borderRadius: "8px", // Coins arrondis
            p: 1, // Padding interne
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Ombre légère
          }}
        >
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} variant='outlined' />
          ))}
        </Box>
      </Box>

      {/* Overlay au survol */}
      <Box
        className='overlay'
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        bgcolor='rgba(0, 0, 0, 0.9)' // Fond légèrement transparent
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        sx={{
          opacity: 0, // Caché par défaut
          transition: "opacity 0.3s ease-in-out", // Transition fluide
          color: "#fff", // Texte blanc
          borderRadius: "8px", // Coins arrondis pour suivre l'image
        }}
      >
        <Typography variant='body1' p={2}>
          {details} {/* Texte détaillant le projet */}
        </Typography>
        <Box mt={2}>
          <a
            href={source}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: "#fff", // Texte blanc
              textDecoration: "underline", // Lien souligné
              fontWeight: "bold", // Texte en gras
            }}
          >
            Voir le code source
          </a>
        </Box>
      </Box>
    </Box>
  );
}
