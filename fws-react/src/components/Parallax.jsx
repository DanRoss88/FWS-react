import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParallaxLayout = () => {
  return (
    <div>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ backgroundImage: `url(/images/Dune-bottom.png)`,
          backgroundSize: "cover" }
        }
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ backgroundColor: `url(/images/Dune-full.png)`,
          backgroundSize: "cover"
        }}
        ></ParallaxLayer>
      </Parallax>
      
    </div>
  );
};

export default ParallaxLayout;
