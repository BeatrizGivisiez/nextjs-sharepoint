import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const multimedia_card: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  img: {
    borderRadius: "20px",
    border: `1px solid ${PALETTE.GRAY_400}`,
    width: "300px",
    height: "280px",
    objectFit: "contain",
    objectPosition: "center",
  },
};
export const multimedia_card_video: SxProps = {
  position: "relative",
  width: "320px",
  height: "240px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  video: {
    backgroundColor: "black",
  },
};
export const multimedia_card_video_poster: SxProps = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  padding: "10px",
};

export const multimedia_textStacker: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
};
export const multimedia_cardTitle: SxProps = {
  mt: 1,
  fontFamily: "Noto Sans",
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.BLACK,
};
export const multimedia_button: SxProps = {
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
