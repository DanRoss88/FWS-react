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
          backgroundColor: "var(--tertiary-color)",
        }}
      >
        <div style={{ marginTop: "10px", backgroundColor: "primary.dark" }}>
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
        <div style={{ marginTop: "10px", backgroundColor: "primary.dark" }}>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              textAlign: "center",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Web Design & Development: Our expert team creates tailor-made
            websites that perfectly match your business needs. Whether it's a
            stunning portfolio site or a powerful e-commerce platform, we
            deliver websites that make an impact. 2. eCommerce Development: We
            specialize in crafting seamless and secure online shopping
            experiences. From user-friendly interfaces to robust payment
            systems, we ensure your e-commerce platform stands out. 3. Digital
            Marketing: Are you looking to boost your online visibility, generate
            leads, and maximize ROI? Our result-oriented digital marketing
            services, including SEO, PPC, and social media, will help you
            achieve just that. 4. Mobile Apps: Stay ahead of the game with
            cutting-edge mobile apps that cater to the ever-growing mobile user
            base. Our mobile app development solutions are designed to engage
            and delight your audience.
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default OurServices;
