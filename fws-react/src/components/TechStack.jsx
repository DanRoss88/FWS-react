import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const TechStack = ({ techStackRef }) => {
  return (
    <div ref={techStackRef} id="TechStack">
      <Box
        sx={{
          width: "100%",
          height: "120vh",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#AboutUs"
          textAlign="center"
          sx={{
            mr: 2,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Tech Stack
        </Typography>
      </Box>
    </div>
  );
};

export default TechStack;
