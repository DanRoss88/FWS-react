import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const AboutUs = () => {
  return (
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
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            About Us
          </Typography> 
    </Box>
  );
};

export default AboutUs;
