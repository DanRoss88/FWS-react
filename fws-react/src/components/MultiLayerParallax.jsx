import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0, 1],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "grid",
        placeItems: "center",
      }}
    >
      <motion.h1
        style={{
          fontFamily: "roboto",
          fontWeight: "bold",
          color: "white",
          zIndex: 10,
          y: textY,
        }}
      >
        Parallax
      </motion.h1>
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(/images/Dune-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          backgroundImage: `url(/images/Dune-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default MultiLayerParallax;
