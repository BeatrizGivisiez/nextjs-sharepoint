import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import { SxProps } from "@mui/system";

export const paperpathfile: SxProps = {
  width: { xs: "100%", sm: "313px" },
  maxWidth: "313px",
  height: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: 2,
  padding: 3,
  borderRadius: "20px",
  backgroundColor: PALETTE.GRAY_400,
};
export const paperpathfile_path: SxProps = {
  color: PALETTE.GRAY_700,
  textAlign: "left",
  opacity: 1,
};
export const paperpathfile_title: SxProps = {
  color: PALETTE.BLACK,
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  textAlign: "left",
  opacity: 1,
};
export const paperpathfile_box: SxProps = {
  height: "50%",
};
export const paperpathfile_icon: SxProps = {
  height: "50%",
  width: "100%",
  display: "flex",
  alignItems: "end",
  justifyContent: "flex-end",
};
export const paperanexodownload: SxProps = {
  width: { xs: "100%", sm: "313px" },
  minWidth: { xs: "100%", sm: "30%" },
  height: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: 2,
  padding: 3,
  borderRadius: "20px",
  border: `2px solid ${PALETTE.GRAY_400}`,
};
export const paperanexodownload_data: SxProps = {
  color: PALETTE.GRAY_700,
  textAlign: "left",
  opacity: 1,
};
export const paperanexodownload_box: SxProps = {
  height: "70%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 1,
  justifyContent: "flex-start",
};
export const paperanexodownload_title: SxProps = {
  width: "90%",
  textAlign: "left",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  fontSize: "1rem",
  wordWrap: "break-word",
};
export const paperanexodownload_action: SxProps = {
  height: "30%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 1,
  justifyContent: "flex-start",
  textTransform: "capitalize",
};
export const paperanexodownload_button: SxProps = {
  color: PALETTE.SECONDARY_MAIN,
  fontSize: "1.125rem",
  fontWeight: FONTWEIGHT.SEMI_BOLD,
  textAlign: "left",
  opacity: 1,
  textDecoration: "underline",
};

export const paperlinks: SxProps = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 20px 10px 25px",
  backgroundColor: PALETTE.WHITE,
  borderRadius: "20px",
  width: "310px",
  height: "70px",
};
export const paperlinks_title: SxProps = {
  fontSize: "1rem",
  color: PALETTE.BLACK,
  fontWeight: FONTWEIGHT.SEMI_BOLD,
};
export const paperpathfile_container: SxProps = {
  width: "1000px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 3,
};
export const pesquisar_paper: SxProps = {
  border: `2px solid ${PALETTE.GRAY_400}`,
  padding: 2,
  display: "flex",
  flexDirection: "column",
  gap: { xs: 1, md: 2 },
  width: { xs: "350px", sm: "550px", md: "850px", lg: "1000px" },
  "&:hover": {
    cursor: "pointer",
    border: `2px solid ${PALETTE.PRIMARY_MAIN}`,
  },
};

export const pesquisar_title: SxProps = {
  fontWeight: 600,
  wordBreak: "break-word",
  fontSize: { xs: "0.875em", sm: "1rem", md: "1.125rem" },
};
export const pesquisa_description: SxProps = {
  wordBreak: "break-word",
  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
};

export const pesquisar_url: SxProps = {
  color: PALETTE.GRAY_500,
  fontStyle: "italic",
  fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
  wordBreak: "break-word",
};
