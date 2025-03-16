import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const topicImage: SxProps = {
  padding: "50px 0px 80px 0px",
};
export const topicImage_containerDesktop: SxProps = {
  display: { xs: "none", lg: "block" },
  position: "relative",
  textAlign: "center",
  height: { xs: "unset", lg: "560px" },
};
export const topicImage_center: SxProps = {
  position: "absolute",
  display: "flex",
  width: "calc(100% - 48px)",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  img: {
    zIndex: "1",
    position: "relative",
    width: { xs: "200px", lg: "340px" },
    height: "auto",
  },
};
export const topicImage_bigEllipsis: SxProps = {
  position: "absolute",
  zIndex: "0",
  width: { xs: "250px", lg: "488px" },
  height: { xs: "250px", lg: "488px" },
  borderRadius: "50%" /* This creates a perfect circle */,
  border: `3px solid ${PALETTE.GRAY_300}`,
};
export const topicImage_smallEllipsis: SxProps = {
  position: "absolute",
  zIndex: "0",
  width: { xs: "200px", lg: "388px" },
  height: { xs: "200px", lg: "388px" },
  borderRadius: "50%" /* This creates a perfect circle */,
  border: `3px solid ${PALETTE.GRAY_300}`,
};

export const topicImage_wrapper: SxProps = {
  zIndex: "2",
  position: "relative",
  display: "flex",
  flexFlow: "row",
  flexWrap: "wrap",
  alignContent: "space-around",
  justifyContent: { xs: "flex-start", sm: "center", lg: "unset" },
  height: "100%",
  width: "100%",
  gap: { xs: "20px", lg: "0px" },
};
export const topicImage_topic: SxProps = {
  display: "flex",
  flexFlow: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: { xs: "100%", lg: "50%" },
  height: "fit-content",
  "&:nth-child(even)": {
    justifyContent: { xs: "flex-start", lg: "flex-end" },
  },
};
export const topicImage_icon: SxProps = {
  svg: {
    width: "30px",
    height: "30px",
  },
};
export const topicImage_topicTextStacker: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "flex-start",
  justifyContet: "flex-start",
  textAlign: "left",
  width: { xs: "fit-content", lg: "280px" },
  ml: { xs: "16px", lg: "18px" },
};
export const topicImage_title: SxProps = {
  fontSize: "1rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.BOLD,
  color: PALETTE.BLACK,
};
export const topicImage_description: SxProps = {
  fontSize: "0.875rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.BOLD,
  color: PALETTE.GRAY_700,
};

export const topicImage_containerMobile: SxProps = {
  display: { xs: "flex", lg: "none" },
  flexDirection: "column",
};
export const topicImage_phoneBox: SxProps = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "350px",
  mb: "40px",
  img: {
    zIndex: "1",
    position: "relative",
    width: { xs: "200px", lg: "340px" },
    height: "auto",
  },
};
