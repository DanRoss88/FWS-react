import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const AboutUs = ({ aboutUsRef }) => {
  return (
    <div ref={aboutUsRef} id="AboutUs">
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          marginTop: "20vh",
        }}
      >
        <div style={{ marginTop: "10px", backgroundColor: "--tertiary-color" }}>
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
              About Us
            </Typography>
          </motion.div>
        </div>
        <motion.div
          style={{ originX: 0.5 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "white",
              textAlign: "center",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Welcome to our Vancouver-based web development company, founded in
            2023. We are passionate about crafting exceptional digital
            experiences and helping businesses succeed in the online world.
            Fremen Web Solutions is your trusted partner for all things digital,
            bringing you top-notch web development services in the vibrant city
            of Vancouver. With a relentless commitment to creativity and
            excellence, we offer a range of digital solutions designed to
            elevate your online presence and drive business success.
          </Typography>
        </motion.div>
      </Box>
    </div>
  );
};

export default AboutUs;
