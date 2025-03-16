import { PALETTE } from "@/app/theme/styles/constantes";
import { tabsPosts_button } from "@/styles/GalleryLeaflets";
import { Box, Button, Typography } from "@mui/material";
import { ArrowDown } from "@phosphor-icons/react";

import {
  buttonactionicon_box_button,
  buttonactionicon_button,
  buttonactionicon_label,
} from "./styles";
import { ButtonActionIconProps } from "./types";

export const ButtonActionIcon = ({
  label,
  iconEnd: IconEnd,
  iconStart: IconStart,
  href,
  downloadUrl,
}: ButtonActionIconProps) => {
  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={buttonactionicon_box_button}>
      <Button
        sx={buttonactionicon_button}
        variant="contained"
        href={href || (downloadUrl ? undefined : "")}
        onClick={() => (downloadUrl ? handleDownload(downloadUrl) : null)}
        startIcon={
          IconStart && (
            <IconStart weight="regular" size={24} color={PALETTE.BLACK} />
          )
        }
        endIcon={
          IconEnd && (
            <IconEnd weight="regular" size={24} color={PALETTE.BLACK} />
          )
        }
      >
        <Typography sx={buttonactionicon_label}>{label}</Typography>
      </Button>
    </Box>
  );
};

export const SeeMoreButton = ({
  onClick,
  isLargeScreen,
}: {
  onClick: () => void;
  isLargeScreen: boolean;
}) => (
  <Box
    sx={{
      width: "100%",
      marginTop: "24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Button
      sx={{
        ...tabsPosts_button,
        marginTop: { xs: "0px", lg: "0px" },
      }}
      onClick={onClick}
      variant="contained"
      endIcon={
        isLargeScreen ? (
          <ArrowDown weight="regular" size={22} color={PALETTE.BLACK} />
        ) : (
          <ArrowDown weight="regular" size={22} color={PALETTE.BLACK} />
        )
      }
    >
      Carregar mais
    </Button>
  </Box>
);
