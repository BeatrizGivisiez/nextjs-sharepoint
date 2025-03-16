import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const tabsGalleryDownload: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: "fit-content",
  overflowY: "hidden",
};
export const tabsGalleryDownload_card: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: { xs: "260px", sm: "300px" },
  marginBottom: "24px",
  img: {
    borderRadius: "20px",
    border: `1px solid ${PALETTE.GRAY_400}`,
    width: { xs: "260px", sm: "300px" },
    height: { xs: "200px", sm: "280px" },
    objectFit: "cover",
    objectPosition: "top",
  },
};
export const tabsGalleryDownload_textStacker: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  ml: { xs: "12px", sm: "0px" },
};
export const tabsGalleryDownload_cardTitle: SxProps = {
  mt: "12px",
  fontFamily: "Noto Sans",
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.BLACK,
};
export const tabsGalleryDownload_cardName: SxProps = {
  fontFamily: "Noto Sans",
  fontSize: "1rem",
  color: PALETTE.GRAY_700,
  height: "45px",
};
export const tabsGalleryDownload_button: SxProps = {
  display: "flex",
  flexFlow: "row",
  justifyContent: "flex-start",
  padding: 0,
  backgroundColor: "transparent",
  color: PALETTE.BLACK,
  boxShadow: "none",
  textTransform: "none",
  textDecoration: "underline",
  fontFamily: "Noto Sans",
  fontSize: "1rem",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
    fontWeight: FONTWEIGHT.SEMI_BOLD,
  },
};

export const tabs_title: SxProps = {
  textTransform: "capitalize",
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  "&.Mui-selected": {
    color: PALETTE.BLACK,
  },
};
export const tabsPosts_wrapper: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "space-between",
};
export const tabsPosts_content: SxProps = {
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "6%",
  alignItems: "center",
};
