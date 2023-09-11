import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { motion } from "framer-motion";

const itemData = [
  {
    img: "/images/axios.jpg",
    title: "axios",
  },
  {
    img: "/images/bootstrap.jpg",
    title: "bootstrap",
  },
  {
    img: "/images/chai.jpg",
    title: "chai",
  },
  {
    img: "/images/cypress.jpg",
    title: "cypress",
  },
  {
    img: "/images/css.jpg",
    title: "css",
  },
  {
    img: "/images/express.jpg",
    title: "express",
  },
  {
    img: "/images/git.jpg",
    title: "git",
  },
  {
    img: "/images/fetch.jpg",
    title: "fetch",
  },
  {
    img: "/images/jest.jpg",
    title: "jest",
  },
  {
    img: '/images/html5.jpg',
    title: 'html5'
  },
  {
    img: '/images/js.jpg',
    title: 'javascript'
  },
  {
    img: '/images/mocha.jpg',
    title: 'mocha'
  },
  {
    img: '/images/mongodb.jpg',
    title: 'mongodb'
  },
  {
    img: "/images/next-logo.png",
    title: "nextJS",
  },
  {
    img: "/images/nodemon.jpg",
    title: "nodemon",
  },
  {
    img: "/images/postman.jpg",
    title: "postman",
  },
  {
    img: '/images/psql.jpg',
    title: 'psql'
  },
  {
    img: '/images/react-native-logo.webp',
    title: 'react-native'
  },
  {
    img: '/images/react.jpg',
    title: 'react'
  }
];

const TechStack = ({ techStackRef }) => {
  return (
    <div ref={techStackRef} id="TechStack">
      <Box
        sx={{
          width: "100%",
          height: "45vh",
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
          Tech Stack
        </Typography>
        </motion.div>
        </div>
        <ImageList sx={{ width: '100%', height: '40vh' }} cols={6} rowHeight={220}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default TechStack;
