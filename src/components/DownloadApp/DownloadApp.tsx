import Image from "next/image";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Container } from "@mui/material";

import {
  downloadApp,
  downloadApp_button,
  downloadApp_buttonsRow,
  downloadApp_description,
  downloadApp_image,
  downloadApp_stacker,
  downloadApp_title,
  downloadApp_wrapper,
} from "./styles";
import { DownloadAppProps } from "./types";

export const DownloadApp = ({
  title,
  description,
  buttonGooglePlay,
  buttonAppStore,
  imageAlt,
  imageSrc,
  grayBackground,
  buttonAppStoreHref,
  buttonGooglePlayHref,
}: DownloadAppProps) => {
  return (
    <Box
      sx={{
        ...downloadApp,
        backgroundColor: grayBackground ? PALETTE.GRAY_300 : PALETTE.WHITE,
      }}
    >
      <Container sx={downloadApp_wrapper}>
        <Box sx={downloadApp_stacker}>
          <Box sx={downloadApp_title}>{title}</Box>
          <Box sx={downloadApp_description}>{description}</Box>
          <Box sx={downloadApp_buttonsRow}>
            {buttonGooglePlay && (
              <Button
                sx={downloadApp_button}
                onClick={() => window.open(buttonGooglePlayHref, "_blank")}
              >
                <Image src={buttonGooglePlay} alt="Google Play" />
              </Button>
            )}
            {buttonAppStore && (
              <Button
                sx={downloadApp_button}
                onClick={() => window.open(buttonAppStoreHref, "_blank")}
              >
                <Image src={buttonAppStore} alt="Apple Store" />
              </Button>
            )}
          </Box>
        </Box>

        <Box sx={downloadApp_image}>
          <Image src={imageSrc} alt={imageAlt} />
        </Box>
      </Container>
    </Box>
  );
};
