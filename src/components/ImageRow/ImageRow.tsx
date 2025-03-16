import Image from "next/image";

import { Box } from "@mui/material";

import {
  imagerow,
  imagerow_multipleImages,
  imagerow_singleImage,
  imagerow_wrapper,
} from "./styles";
import { ImageRowProps } from "./type";

export const ImageRow = ({
  imageSrc,
  imageAlt,
  optionalImageSrc,
  optionalImageAlt,
}: ImageRowProps) => {
  return (
    <Box sx={imagerow}>
      <Box sx={imagerow_wrapper}>
        {optionalImageSrc != undefined ? (
          <Box sx={imagerow_multipleImages}>
            <Image src={imageSrc} alt={imageAlt} />
            <Image src={optionalImageSrc} alt={optionalImageAlt!} />
          </Box>
        ) : (
          <Box sx={imagerow_singleImage}>
            <Image src={imageSrc} alt={imageAlt} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
