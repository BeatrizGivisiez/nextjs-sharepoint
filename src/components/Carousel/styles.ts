import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const carouselitem_box: SxProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
};
export const carouselItemWrapper: SxProps = {
  width: "inherit",
  position: "relative",
  height: { xs: "500px", md: "500px" },
  overflow: "hidden",
  background:
    "transparent linear-gradient(202deg, #20202045 30%, #202020 100%) 0% 0% no-repeat padding-box",
  img: {
    position: "relative",
    zIndex: "-1",
    width: "100vw",
    height: "100%",
    objectFit: "cover",
  },
};

export const carouselItemContainer: SxProps = {
  position: "absolute",
  top: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: { xs: "90%", md: "70%", lg: "60%" },
  mt: { xs: "80px", lg: "120px" },
  mb: { xs: "80px", lg: "120px" },
  ml: { xs: "30px", md: "80px", lg: "160px" },
};
export const carouselItem_title: SxProps = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1.25rem", sm: "2rem" },
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  color: PALETTE.WHITE,
  marginBottom: "20px",
};
export const carouselItem_text: SxProps = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: { xs: "1rem", sm: "1.125rem" },
  color: PALETTE.GRAY_400,
  fontWeight: FONTWEIGHT.NORMAL,
  marginBottom: "30px",
};
export const carouselItem_buttonSeeMore: SxProps = {
  textTransform: "none",
  textUnderline: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: { xs: "space-between", lg: "center" },
  color: PALETTE.BLACK,
  fontSize: "1rem",
  lineHeight: "1",
  fontFamily: "Noto Sans",
  borderRadius: "23px",
  padding: "13px 30px",
  minWidth: "unset",
};
export const carouselPaginationWrapper: SxProps = {
  position: "absolute",
  right: { xs: "24px", lg: "220px" },
  bottom: 24,
  display: "flex",
  alignItems: "center",
  gap: 1,
};
export const carouselPaginationContainer: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
};
export const carouselPaginationItem: SxProps = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  border: "2px solid",
  borderColor: PALETTE.WHITE,
};
export const carouselPaginationItemSelected: SxProps = {
  width: "24px",
  height: "8px",
  borderRadius: "2px",
  backgroundColor: PALETTE.WHITE,
};
