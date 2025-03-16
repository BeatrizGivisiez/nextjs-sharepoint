import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const galleryleaflets_image_box: SxProps = {
  width: { xs: "220px", lg: "25%" },
  pt: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};
export const galleryleaflets_bgimage: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 180,
  height: 230,
  borderRadius: 10,
  rotate: "20deg",
  img: {
    position: "relative",
    maxWidth: "100%",
    objectFit: "fill",
    rotate: "-20deg",
    width: "180px",
    height: "220px",
  },
};
export const galleryleaflets_image_title: SxProps = {
  mt: 2,
  fontSize: "1rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  textAlign: "center",
};
export const galleryleaflets_image_description: SxProps = {
  fontSize: "0.875rem",
  fontWeight: FONTWEIGHT.NORMAL,
  textAlign: "center",
  fontFamily: "Noto Sans",
  color: PALETTE.GRAY_700,
};

export const galleryImageButton_stacker: SxProps = {
  display: "flex",
  flexFlow: "column",
  mb: "16px",
};
export const galleryImageButton_card: SxProps = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  width: { xs: "100%", sm: "48%" },

  img: {
    width: "100%",
    height: "200px",
    borderRadius: "20px",
    objectFit: "cover",
  },

  "&:nth-child(-n+2)": {
    width: { xs: "100%", sm: "48%" },
  },
};
export const galleryImageButton_containedCard: SxProps = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  width: { xs: "100%", sm: "48%" },

  img: {
    width: "100%",
    height: "200px",
    borderRadius: "20px",
    objectFit: "contain",
  },

  "&:nth-child(-n+2)": {
    width: { xs: "100%", sm: "48%" },
  },
};
export const galleryImageButton_title: SxProps = {
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  fontSize: "1.125rem",
  textAlign: "left",
  mt: "15px",
  mb: "15px",
};
export const galleryImageButton_description: SxProps = {
  color: PALETTE.GRAY_700,
  fontWeight: FONTWEIGHT.NORMAL,
  fontSize: "1rem",
  textAlign: "left",
};
export const galleryImageButton_button: SxProps = {
  padding: 0,
  justifyContent: "flex-start",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.MEDIUM,
  fontSize: "1rem",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "transparent",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};
export const galleryleaflets_post: SxProps = {
  width: { xs: "90%", sm: "45%", md: "20%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  mb: "30px",
};
