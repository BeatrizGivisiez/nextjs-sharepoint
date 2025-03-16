import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const timelinePagination: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

export const timelinePagination_wrapper: SxProps = {
  position: "relative",
  width: { xs: "100%", lg: "1200px" },
  height: { xs: 150, sm: 110 },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  mt: 4,
};

export const timelinePagination_timeline: SxProps = {
  transform: "rotate(90deg)",
  position: "absolute",
  flexFlow: "column-reverse",
  transition: "all 0.5s ease",
  width: "300px",
};
export const timelinePagination_contentContainer: SxProps = {
  width: 40,
};
export const timelinePagination_content: SxProps = {
  display: "inline-block",
  transform: "rotate(-90deg)",
  textAlign: "center",
  minWidth: 50,
};
export const timelinePagination_year: SxProps = {
  fontSize: "20px",
  fontWeight: FONTWEIGHT.NORMAL,
  color: PALETTE.BLACK,
};
export const timelinePagination_item: SxProps = {
  height: "120px",
};
export const timelinePagination_separator: SxProps = {
  position: "relative",
  top: "12px",
};
export const timelinePagination_dot: SxProps = {
  margin: 0,
};
export const timelinePagination_connector: SxProps = {
  display: "block",
  height: "2px",
  border: "0",
  borderTop: `2px solid ${PALETTE.GRAY_400}`,
  margin: 0,
  padding: 0,
};

export const timelinePagination_carousel: SxProps = {
  height: { xs: "100%", sm: "340px", md: "280px", lg: "230px" },
  width: "100%",
  maxWidth: { xs: "unset", lg: "1200px" },
  position: "relative",
  bottom: "65px",
};
export const timelinePagination_carouselWrapper: SxProps = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexFlow: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
};
export const timelinePagination_carouselItem: SxProps = {
  display: "flex",
  alignItems: "center",
  minHeight: { xs: "300px", sm: "250px" },
  width: "70%",
  boxShadow: "unset",
};

export const timelinePagination_carouselText: SxProps = {
  textAlign: "left",
  fontFamily: "Noto Sans",
  fontSize: "0.875rem",
  color: PALETTE.BLACK,
};
