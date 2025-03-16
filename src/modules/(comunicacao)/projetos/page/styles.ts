import { SxProps } from "@mui/system";

export const galleryImageButton: SxProps = {
  display: "block",
  width: "100%",
  py: 8,
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
  mt: 5,
};
