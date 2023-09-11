import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import axios from "axios";

const ContactUs = ({ contactUsRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/contact", formData);
      console.log("success");
    } catch (err) {
      console.log("Error submitting form", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div ref={contactUsRef} id="ContactUs">
      <Box
        sx={{
          width: "100%",
          height: "60vh",
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
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              id="outlined-name-input"
              label="Name"
              name="name"
              value={formData.name}
              required
              type="name"
              autoComplete="current-password"
              onChange={handleChange}
              backgroundColor="#1565C0"
              
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              name="email"
              value={formData.email}
              required
              type="email"
              autoComplete="current-password"
              onChange={handleChange}
              backgroundColor="#1565C0"
            />
          </div>
          <div>
            <Typography
              sx={{
                fontFamily: "roboto",
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
              }}
            >
              What can we help you with?
            </Typography>

            <TextField
              id="outlined-multiline-input"
              name="message"
              label="Message"
              multiline
              rows={10}
              value={formData.message}
              required
              onChange={handleChange}
              backgroundColor="#1565C0"
            />
          </div>
          <Button variant="contained" endIcon={<SendIcon />}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
