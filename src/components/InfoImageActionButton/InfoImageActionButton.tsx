"use client";

import Image from "next/image";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Container, Typography } from "@mui/material";

import {
  infoimageactionbutton,
  infoimageactionbutton_box,
  infoimageactionbutton_box_button,
  infoimageactionbutton_button,
  infoimageactionbutton_buttonMessage,
  infoimageactionbutton_container,
  infoimageactionbutton_image,
  infoimageactionbutton_imageContained,
  infoimageactionbutton_optionalButton,
  infoimageactionbutton_subtitle,
  infoimageactionbutton_title,
} from "./styles";
import { InfoImageActionButtonProps } from "./types";

export const InfoImageActionButton = ({
  title,
  subtitle,
  buttonPrimary,
  iconButtonPrimary: IconOne,
  buttonSecondary,
  iconButtonSecondary: IconTwo,
  buttonMessage,
  imageAlt,
  imageSrc,
  grayBackground,
  reverse,
  buttonPrimaryHref,
  buttonSecondaryHref,
  downloadUrl,
  containImg,
}: InfoImageActionButtonProps) => {
  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para aplicar negrito aos padrões desejados
  const formatSubtitle = (text: any) => {
    // Expressões regulares para encontrar os padrões
    const numberPattern = /\b800 20 25 25\b/g;
    const emailPattern = /\bcomercial@eda.pt\b/g;
    // Dividindo o texto pelos padrões e mapeando para aplicar o estilo em negrito
    const parts = text.split(
      new RegExp(`(${numberPattern.source}|${emailPattern.source})`, "g")
    );
    return parts.map((part: string, index: number) => {
      if (part.match(numberPattern) || part.match(emailPattern)) {
        return (
          <span key={index} style={{ fontWeight: 700 }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Box
      sx={{
        ...infoimageactionbutton,
        backgroundColor: grayBackground ? PALETTE.GRAY_300 : PALETTE.WHITE,
      }}
    >
      <Container
        sx={{
          ...infoimageactionbutton_container,
          flexDirection: reverse
            ? { xs: "column-reverse", md: "row" }
            : { xs: "column-reverse", md: "row-reverse" },
        }}
      >
        <Box sx={infoimageactionbutton_box}>
          <Typography sx={infoimageactionbutton_title}>{title}</Typography>
          <Typography sx={infoimageactionbutton_subtitle}>
            {formatSubtitle(subtitle)}
          </Typography>
          <Box sx={infoimageactionbutton_box_button}>
            <Button
              sx={infoimageactionbutton_button}
              variant="contained"
              href={buttonPrimaryHref}
              endIcon={
                IconOne && (
                  <IconOne weight="regular" size={22} color={PALETTE.BLACK} />
                )
              }
            >
              {buttonPrimary}
            </Button>
            {buttonSecondary == undefined || buttonSecondary == "" ? (
              <></>
            ) : (
              <Button
                sx={infoimageactionbutton_optionalButton}
                variant="contained"
                onClick={() =>
                  downloadUrl ? handleDownload(downloadUrl) : null
                }
                href={buttonSecondaryHref || (downloadUrl ? undefined : "")}
                endIcon={
                  IconTwo && (
                    <IconTwo weight="regular" size={22} color={PALETTE.BLACK} />
                  )
                }
              >
                {buttonSecondary}
              </Button>
            )}
          </Box>
          <Typography sx={infoimageactionbutton_buttonMessage}>
            {buttonMessage}
          </Typography>
        </Box>
        <Container
          sx={
            containImg
              ? infoimageactionbutton_imageContained
              : infoimageactionbutton_image
          }
        >
          <Image src={imageSrc} alt={imageAlt} />
        </Container>
      </Container>
    </Box>
  );
};
