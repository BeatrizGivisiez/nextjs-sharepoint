import { SxProps } from "@mui/material";

export interface BreadcrumbsProps {
  category?: string;
  URLcategory?: string;
  mainPage?: string | undefined;
  URLmainPage?: string;
  subPage?: string | undefined;
  sx?: SxProps;
}
