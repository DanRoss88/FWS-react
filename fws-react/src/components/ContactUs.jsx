import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";

const ContactUs = ({ contactUsRef }) => {
  return (
    <div ref={contactUsRef} id="ContactUs">
      <Box
        sx={{
          width: "100%",
          height: "120vh",
          backgroundColor: "primary.dark",
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
              Contact Us
            </Typography>
          </motion.div>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div >
            <TextField
              id="outlined-email-input"
              label="Email"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-name-input"
              label="Name"
              type="password"
              autoComplete="current-password"
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-input"
              label="Message"
              multiline
              rows={10}
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
