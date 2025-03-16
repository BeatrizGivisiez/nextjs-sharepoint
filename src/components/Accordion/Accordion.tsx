"use client";

import { useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Minus, Plus } from "@phosphor-icons/react";

import { RichText } from "../Typography/RichText";
import {
  accordion_box,
  accordion_description,
  accordion_title,
} from "./styles";
import { AccordionProps } from "./types";

export const Accordion = ({
  id,
  title,
  description,
  outsideAccordion,
  borderBottom,
}: AccordionProps) => {
  const panel = "panel" + id;
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const panelHeader = panel + "-header";
  const ariaControls = panel + "-content";

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {outsideAccordion ? (
        <>
          <RichText richText={description} insideAccordion={false} />
        </>
      ) : (
        <MuiAccordion
          sx={{
            ...accordion_box,
            borderBottom: borderBottom
              ? `2px solid ${PALETTE.GRAY_400}`
              : "none",
          }}
          expanded={expanded === panel}
          onChange={handleChange(panel)}
        >
          <AccordionSummary
            expandIcon={
              expanded === panel ? (
                <Minus size={24} color={PALETTE.BLACK} />
              ) : (
                <Plus size={24} color={PALETTE.BLACK} />
              )
            }
            aria-controls={ariaControls}
            id={panelHeader}
          >
            <Box sx={accordion_title}>{title}</Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={accordion_description}>
              <RichText
                richText={description}
                insideAccordion={true}
                displayBlock={true}
              />
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      )}
    </Box>
  );
};
