import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import Masonry from "react-masonry-css";
import { Box } from "@mui/material";
import portfolio from "../../info/portfolio.json";
import "./Portfolio.scss";

export default function Portfolio({ innerRef }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Box id={"portfolio"} ref={innerRef}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'
      >
        {portfolio.portfolio.map((project, index) => (
          <PortfolioBlock
            key={project.id}
            image={project.image}
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
