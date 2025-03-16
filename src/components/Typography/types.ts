import { SxProps } from "@mui/material";

export interface TitleDescriptionProps {
  title: string;
  description?: string;
}

export interface TextDescriptionProps {
  title: string;
  description: string;
  linkHref?: string;
}

export interface TextParagraphProps {
  children: React.ReactNode;
}
export interface ParagraphProps {
  text: string;
}

export interface RichTextProps {
  richText: string;
  bgcolor?: string;
  children?: React.ReactNode;
  insideAccordion?: boolean;
  displayBlock?: boolean;
}
