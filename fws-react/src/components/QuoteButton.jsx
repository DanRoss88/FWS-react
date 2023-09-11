import React from "react";
import Button from "@mui/material/Button";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { Link } from "@mui/material";

const QuoteButton = () => {
  return (
    <div>
      <Link href="#ContactUs" underline="none">
        <Button
          variant="contained"
          startIcon={<WaterDropIcon />}
          endIcon={<WaterDropIcon />}
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "10px",
            backgroundColor: "var(--primary-color)",
            color: "white",
            "&:hover": {
              backgroundColor: "var(--quinary-color)",
              color: "var(--quaternary-color)",
            },
          }}
        >
          Request a Quote
        </Button>
      </Link>
    </div>
  );
};

export default QuoteButton;
