import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const tabgallerydownload: SxProps = {
  my: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
export const tabgallerydownload_box: SxProps = {
  maxWidth: "1100px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
export const tabgallerydownload_container: SxProps = {
  width: "1000px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 3,
};

export const paperanexodownload: SxProps = {
  my: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};
export const paperanexodownload_box: SxProps = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
};
export const paperanexodownload_container: SxProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "3%",
};

export const paperpathfile_container: SxProps = {
  width: "1000px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 3,
};

export const grupoeda: SxProps = {
  marginTop: 5,
  marginBottom: 5,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const grupoeda_box: SxProps = {
  width: "1150px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
export const grupoeda_title: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  fontSize: { sx: "1rem", lg: "1.1rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.BLACK,
  mb: 2,
};
export const grupoeda_description: SxProps = {
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: FONTWEIGHT.NORMAL,
  mb: 1,
  whiteSpace: "pre-line",
  color: PALETTE.GRAY_700,
  fontSize: "1rem",
};

export const galleryImageButton: SxProps = {
  display: "block",
  width: "100%",
};
export const galleryImageButton_wrapper: SxProps = {
  display: "flex",
  width: "100%",
  height: "fit-content",
  flexFlow: "row",
  flexWrap: "wrap",
  justifyContent: { xs: "center", lg: "flex-start" },
  alignItems: "stretch",
  gap: "40px 40px",
};
