import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const banner: SxProps = {
  display: "flex",
  width: "100vw",
  height: "fit-content",
  backgroundColor: PALETTE.GRAY_300,
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 24px",
};
export const banner_wrapper: SxProps = {
  position: "relative",
  maxWidth: "1200px",
  width: "100%",
  height: { xs: "400px", sm: "328px" },
  background:
    "transparent linear-gradient(202deg, #20202045 0%, #202020 100%) 0% 0% no-repeat padding-box",
  borderRadius: "20px",
  overflow: "hidden",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  },
};

export const banner_stacker: SxProps = {
  position: "absolute",
  top: "0",
  display: "flex",
  justifyContent: "center",
  height: "100%",
  flexFlow: "column",
  margin: { xs: "0px 24px", md: "0px 80px" },
  padding: "20px 0px",
};
export const banner_title: SxProps = {
  width: { xs: "80%", sm: "70%", md: "50%" },
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1.125rem", sm: "1.5rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  lineHeight: "32px",
  color: PALETTE.WHITE,
  mb: { xs: "10px", sm: "20px" },
};
export const banner_description: SxProps = {
  width: { xs: "100%", sm: "90%", md: "75%" },
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1rem", sm: "1.125rem" },
  fontWeight: FONTWEIGHT.EXTRA_LIGHT,
  lineHeight: "24px",
  color: PALETTE.WHITE,
  mb: { xs: "15px", sm: "30px" },
};
export const banner_button: SxProps = {
  textTransform: "none",
  textUnderline: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "space-between", lg: "center" },
  color: PALETTE.BLACK,
  fontSize: "1rem",
  lineHeight: "1",
  fontFamily: "Noto sans",
  borderRadius: "23px",
  padding: "13px 30px",
  minWidth: "unset",
  width: "fit-content",
};

export const bannertitle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: { xs: "120px", lg: "180px" },
  width: "100%",
  position: "relative",
};
export const bannertitle_title: SxProps = {
  fontFamily: "Montserrat, sans-serif",
  zIndex: "2",
  fontSize: { xs: "1.5rem", md: "2rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  textAlign: "center",
  color: PALETTE.WHITE,
  textShadow: "1px 2px 4px #20202082",
  opacity: 1,
};
