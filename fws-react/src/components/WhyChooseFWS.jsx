import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
const WhyChooseFWS = ({ whyChooseFWSRef }) => {
  return (
    <div ref={whyChooseFWSRef} id="WhyChooseFWS">
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundColor: "primary.dark",
        }}
      >
        <div style={{marginTop: "10px", backgroundColor: "primary.dark"}}>
        <motion.div
          style={{ originX: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#AboutUs"
          textAlign="center"
          sx={{
            mr: 2,
            fontFamily: "roboto",
            fontWeight: 700,
            fontSize: "2rem",
            color: "white",
            textDecoration: "underline",
          }}
        >
          Why Choose FWS?
        </Typography>
        </motion.div>
        </div>
      </Box>
    </div>
  );
};

export default WhyChooseFWS;
