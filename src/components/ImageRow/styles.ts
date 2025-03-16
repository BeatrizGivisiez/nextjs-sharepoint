import { SxProps } from "@mui/system";

export const imagerow: SxProps = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

export const imagerow_wrapper: SxProps = {
  maxWidth: { xs: "100%", lg: "1200px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0px 24px",
};

export const imagerow_singleImage: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  img: {
    aspectRatio: "2.5",
    width: { xs: "100%", lg: "800px" },
    maxWidth: { xs: "350px", sm: "800px" },
    height: "auto",
    maxHeight: "320px",
    objectFit: "cover",
    borderRadius: "20px",
  },
};

export const imagerow_multipleImages: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  img: {
    width: { xs: "75%", sm: "50%", md: "35%" },
    height: "auto",
    objectFit: "cover",
    borderRadius: "20px",
  },
};
