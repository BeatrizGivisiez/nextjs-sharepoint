import { Box } from "@mui/material";

import {
  richtext,
  richtext_accordion,
  richtext_box,
  richtext_box_accordion,
} from "./styles";
import { RichTextProps } from "./types";

export const RichText = ({
  richText,
  bgcolor,
  children,
  insideAccordion,
  displayBlock,
}: RichTextProps) => {
  return (
    <Box
      sx={{
        ...(insideAccordion ? richtext_accordion : richtext),
        backgroundColor: { bgcolor },
        ...(displayBlock && { display: "block" }),
      }}
    >
      <Box sx={insideAccordion ? richtext_box_accordion : richtext_box}>
        <Box
          component="div"
          sx={{
            flexDirection: "column",
            fontFamily: "Noto Sans, sans-serif",
            width: "100%",
            display: "flex",
            span: {
              fontFamily: "Noto Sans, sans-serif",
              fontSize: {
                xs: "14px !important",
                sm: "16px !important",
                md: "18px !important",
              },
              width: "100%",
              textDecoration: "none !important",
            },
            a: {
              color: "blue !important",
              textDecoration: "underline !important",
              textDecorationColor: "blue !important",
            },
            th: {
              fontSize: {
                xs: "14px !important",
                sm: "16px !important",
                md: "18px !important",
              },
            },
            td: {
              fontSize: {
                xs: "14px !important",
                sm: "16px !important",
                md: "18px !important",
              },
            },
            ul: {
              listStylePosition: "inside",
            },
          }}
          dangerouslySetInnerHTML={{ __html: richText as string }}
        />
        {children}
      </Box>
    </Box>
  );
};
