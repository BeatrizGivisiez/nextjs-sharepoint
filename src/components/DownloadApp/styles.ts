import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const downloadApp: SxProps = {
  width: "100%",
  height: "fit-content",
  backgroundColor: PALETTE.GRAY_300,
};
export const downloadApp_wrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: {
    xs: "center",
    md: "space-between",
  },
  flexFlow: { xs: "column-reverse", md: "row" },
  py: { xs: "60px", md: "80px" },
};
export const downloadApp_stacker: SxProps = {
  width: { xs: "100%", md: "50%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
export const downloadApp_title: SxProps = {
  color: PALETTE.BLACK,
  fontFamily: "Montserrat, sans-serif",
  fontWeight: FONTWEIGHT.BOLD,
  textAlign: "left",
  mt: { xs: "30px", md: "0px" },
  mb: { xs: "20px", md: "24px" },
  width: "80%",
  fontSize: { xs: "1.25rem", sm: "1.56rem", lg: "1.875rem" },
};
export const downloadApp_description: SxProps = {
  color: PALETTE.BLACK,
  fontFamily: "Noto Sans",
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.LIGHT,
  textAlign: "left",
};
export const downloadApp_buttonsRow: SxProps = {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  gap: { xs: "15px", md: "20px" },
  justifyContent: "flex-start",
  mt: "30px",
};
export const downloadApp_button: SxProps = {
  padding: 0,
  img: {
    height: { xs: "50px", md: "60px" },
    width: "auto",
  },
};
export const downloadApp_image: SxProps = {
  width: { xs: "100%", md: "50%" },
  display: "flex",
  justifyContent: { xs: "center", md: "flex-end" },
  img: {
    borderRadius: "20px",
    height: "auto",
    width: { xs: "50%", md: "50%" },
    objectFit: "contain",
  },
};
