import * as React from "react";
import Stack from "@mui/material/Stack";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import TechStack from "./components/TechStack";
import WhyChooseFWS from "./components/WhyChooseFWS";
import ContactUs from "./components/ContactUs";
import QuoteButton from "./components/QuoteButton";

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
