import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import Masonry from "react-masonry-css";
import { Box, Typography } from "@mui/material";
import portfolio from "../../info/portfolio.json";
import "./Portfolio.scss";

export default function Portfolio({ innerRef }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Box id='portfolio' ref={innerRef}>
      {/* Titre principal de la section */}
      <Typography
        variant='h2'
        component='h2'
        textAlign='center'
        mt={4}
        mb={4}
        sx={{ fontWeight: "bold", color: "#333" }}
      >
      </Typography>

      {/* Grille Masonry */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'
      >
        {portfolio.portfolio.map((project) => (
          <PortfolioBlock
            key={project.id}
            image={project.image}
            altText={project.altText}
            source={project.source}
            title={project.title}
            description={project.description}
            skills={project.skills}
            details={project.details}
          />
        ))}
      </Masonry>
    </Box>
  );
}
