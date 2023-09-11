import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const OurServices = ({ ourServicesRef }) => {
  return (
    <div ref={ourServicesRef} id="OurServices">
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
          Our Services
        </Typography>
        </motion.div>
        </div>
      </Box>
    </div>
  );
};

export default OurServices;
