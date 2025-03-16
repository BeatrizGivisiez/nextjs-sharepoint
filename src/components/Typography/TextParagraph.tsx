import { Box, Container } from "@mui/material";

import {
  textParagraph,
  textParagraph_list,
  textParagraph_text,
} from "./styles";
import { ParagraphProps, TextParagraphProps } from "./types";

export const TextParagraph = ({ children }: TextParagraphProps) => {
  return (
    <Box sx={textParagraph}>
      <Box sx={textParagraph_list}>{children}</Box>
    </Box>
  );
};

export const Paragraph = ({ text }: ParagraphProps) => {
  return <Box sx={textParagraph_text}>{text}</Box>;
};
