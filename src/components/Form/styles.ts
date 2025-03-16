import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/material";

export const form: SxProps = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  gap: "50px",
};
export const form_wrapper: SxProps = {
  display: "flex",
  flexFlow: "column",
  gap: { sx: "0px", sm: "15px", md: "30px" },

  "& .MuiOutlinedInput-root": {
    borderRadius: "24px",
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: PALETTE.PRIMARY_MAIN,
  },
};
export const form_sectionTitle: SxProps = {
  color: PALETTE.BLACK,
  fontSize: "1.25rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.BOLD,
  pt: "40px",
  my: "40px",
  borderTop: `2px solid ${PALETTE.GRAY_400}`,
};
export const form_textStacker: SxProps = {
  display: "flex",
  flexFlow: "column",
  width: "-webkit-fill-available",
};
export const form_recaptch: SxProps = {
  display: "flex",
  flexFlow: "column",
  width: "-webkit-fill-available",
};
export const form_responsiveRow: SxProps = {
  display: "flex",
  flexFlow: { xs: "column", md: "row" },
  alignItems: "flex-start",
  gap: "40px",
  "& > *": {
    width: { xs: "100% !important", md: "50% !important" },
  },
  "& > .MuiFormControl-root": {
    width: { xs: "100% !important", md: "50% !important" },
  },
};
export const form_row: SxProps = {
  display: "flex",
  flexFlow: { xs: "column", md: "row" },
  alignItems: "flex-start",
  gap: { xs: "20px", md: "40px" },
  pb:"20px",
  "& > *": {
    width: { xs: "100% !important", md: "50% !important" },
  },
  "& > .MuiFormControl-root": {
    width: { xs: "100% !important", md: "50% !important" },
  },
};
export const form_textRow: SxProps = {
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  gap: "8px",
};
export const form_text: SxProps = {
  color: PALETTE.BLACK,
  fontSize: "0.875rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  ml: "12px",
  mb: "12px",
};
export const form_mandatoryLabel: SxProps = {
  color: PALETTE.GRAY_500,
  fontSize: "0.75rem",
  fontFamily: "Noto Sans",
  fontWeight: "400",
  mb: "12px",
};
export const form_mandatoryText: SxProps = {
  color: PALETTE.GRAY_500,
  fontSize: "0.75rem",
  fontFamily: "Noto Sans",
  fontWeight: FONTWEIGHT.NORMAL,
  mb: "12px",
  ml: "12px",
  my: "8px",
};
export const form_validationMsg: SxProps = {
  color: PALETTE.ERROR_MAIN,
  fontSize: "0.75rem",
  fontFamily: "Noto Sans",
  fontWeight: "600",
  ml: "12px",
  my: "8px",
};
export const form_button: SxProps = {
  textTransform: "math-auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  color: PALETTE.BLACK,
  borderRadius: "25px",
  height: "48px",
  width: "fit-content",
  px: 4,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
};
export const form_collapseList: SxProps = {
  pl: "30px",
};
export const form_datePicker: SxProps = {
  "&.MuiStack-root>.MuiTextField-root": {
    width: "100%",
  },
  "&.MuiStack-root>.MuiTextField-root>.MuiOutlinedInput-root>.MuiOutlinedInput-notchedOutline": {
    borderColor:PALETTE.GRAY_500,
  },
};
export const form_datePicker_error: SxProps = {
  "&.MuiStack-root>.MuiTextField-root": {
    width: "100%",
  },
  "&.MuiStack-root>.MuiTextField-root>.MuiOutlinedInput-root>.MuiOutlinedInput-notchedOutline": {
    borderColor:PALETTE.ERROR_MAIN,
  },
};
export const form_uploadFilesBox: SxProps = {
  width:"fit-content",
  mb: "20px",
};
export const form_anexoBtn: SxProps = {
  textTransform: "math-auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: `2px solid ${PALETTE.GRAY_400}`,
  borderRadius: "25px",
  height: "48px",
  width: "fit-content",
  px: 4,
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: PALETTE.WHITE,
  },
  ".MuiTypography-root": {
    color: PALETTE.BLACK,
  },
};
export const formAlert_display: SxProps = {
  position: "fixed",
  top: 0,
  maxWidth: "100% !important",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mt: "200px",
};
export const formAlert_wrapper: SxProps = {
  width: { xs: "100%", sm: "80%", md: "50%", lg: "33%" },
  ".MuiAlert-root": {
    borderRadius: "20px",
    padding: "25px",
  },
};
export const formAllLocations_select: SxProps = {};
export const form_TimePicker: SxProps = {
".MuiTextField-root>.MuiInputBase-root>.MuiOutlinedInput-notchedOutline": {
    borderColor:PALETTE.GRAY_500,
  },
};
export const form_TimePicker_error: SxProps = {
  ".MuiTextField-root>.MuiInputBase-root>.MuiOutlinedInput-notchedOutline": {
      borderColor:PALETTE.ERROR_MAIN,
    },
  };
