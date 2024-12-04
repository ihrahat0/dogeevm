import React from "react";
import { Box } from "../Box";
import { Image } from "../Image";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 220 }) => {
  return (
    <Box width={size} height={size * 0.9} position="relative">
      <Image
        width={size}
        height={size * 0.9} 
        src="images/spinner-doge.gif"
        alt="pancake-3d-spinner"
        style={{ borderRadius: "20px" }}
      />
    </Box>
  );
};

export default Spinner;
