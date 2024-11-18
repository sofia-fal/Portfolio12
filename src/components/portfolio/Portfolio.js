import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import Masonry from "react-masonry-css";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import "./Portfolio.scss";


export default function Portfolio({ innerRef }) {
  const breakpointColumnsObj = {
    default: 3, // Nombre de colonnes par défaut
    1100: 2, // Pour les écrans <= 1100px
    700: 1, // Pour les écrans <= 700px
  };

  return (
    <Box id={"portfolio"} ref={innerRef}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid' // Classe pour styliser Masonry
        columnClassName='masonry-grid_column' // Classe pour les colonnes
      >
        {info.portfolio.map((project, index) => (
          <PortfolioBlock
            key={index}
            image={project.image}
            live={project.live}
            source={project.source}
            title={project.title}
          />
        ))}
      </Masonry>
    </Box>
  );
}
