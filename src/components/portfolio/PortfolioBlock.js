import React from "react";
import { Box, Typography, Chip } from "@mui/material";

export default function PortfolioBlock({
  image,
  source,
  title,
  description,
  skills,
}) {
  return (
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
      <Typography variant='body2' color='textSecondary' mt={1}>
        {description}
      </Typography>
      <Box
        mt={2}
        display='flex'
        gap={1}
        flexWrap='wrap'
        justifyContent='center'
      >
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} variant='outlined' />
        ))}
      </Box>
      <Box mt={2}>
        <a href={source} target='_blank' rel='noopener noreferrer'>
          Voir le code source
        </a>
      </Box>
    </Box>
  );
}
