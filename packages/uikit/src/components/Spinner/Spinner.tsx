import React from "react";
import { Box } from "../Box";
import { Image } from "../Image";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
        src="https://raw.githubusercontent.com/ihrahat0/dogeevm/refs/heads/main/apps/web/public/images/spinner-doge.gif"
        alt="doge-spinner"
        style={{ borderRadius: "20px" }}
      />
    </Box>
  );
};

export default Spinner;
