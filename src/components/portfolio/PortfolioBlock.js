import React from "react";
import { Box, Typography, Chip } from "@mui/material";

export default function PortfolioBlock({
  image,
  altText,
  source,
  title,
  description,
  skills,
  details,
}) {
  return (
    <Box
      position='relative'
      sx={{
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      {/* Contenu principal */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        p={2}
      >
        <Box
          component='img'
          src={image}
          alt={altText}
          sx={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "8px",
            mb: 2,
          }}
        />
        <Typography
          variant='h6' // Style visuel
          component='h3' // Balise HTML utilisée dans le DOM
          mt={2}
        >
          {title}
        </Typography>
        <Box
          mt={1}
          p={2}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
            backgroundColor: "#fff",
            borderRadius: "8px",
            p: 1,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
        bgcolor='rgba(0, 0, 0, 0.9)'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        sx={{
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          color: "#fff",
          borderRadius: "8px",
        }}
      >
        <Typography variant='body1' p={2}>
          {details}
        </Typography>
        <Box mt={2}>
          <a
            href={source}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Voir le code source
          </a>
        </Box>
      </Box>
    </Box>
  );
}
