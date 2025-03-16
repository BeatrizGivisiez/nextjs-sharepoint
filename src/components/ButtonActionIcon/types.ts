import { SxProps } from "@mui/material";

export interface ButtonActionIconProps {
  id?: number;
  label: string;
  iconEnd?: React.ElementType;
  iconStart?: React.ElementType;
  href?: string;
  sx?: SxProps;
  downloadUrl?: string | null;
}
