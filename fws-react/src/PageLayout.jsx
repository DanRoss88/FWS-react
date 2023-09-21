import * as React from "react";
import Stack from "@mui/material/Stack";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import TechStack from "./components/TechStack";
import WhyChooseFWS from "./components/WhyChooseFWS";
import ContactUs from "./components/ContactUs";
import QuoteButton from "./components/QuoteButton";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const PageLayout = () => {
  const aboutUsRef = React.createRef();
  const ourServicesRef = React.createRef();
  const techStackRef = React.createRef();
  const whyChooseFWSRef = React.createRef();
  const contactUsRef = React.createRef();

  return (
    <div>
      <Stack
        spacing={0}
        sx={{
          backgroundColor: "var(--tertiary-color)",
        }}
      >
        <Parallax pages={2} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              backgroundImage: `url(/images/Dune-bottom.png)`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              backgroundColor: `url(/images/Dune-full.png)`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
        </Parallax>
        <AboutUs aboutUsRef={aboutUsRef} />
        <OurServices ourServicesRef={ourServicesRef} />
        <QuoteButton contactUsRef={contactUsRef} />
        <TechStack techStackRef={techStackRef} />
        <WhyChooseFWS whyChooseFWSRef={whyChooseFWSRef} />
        <ContactUs contactUsRef={contactUsRef} />
      </Stack>
    </div>
  );
};

export default PageLayout;
