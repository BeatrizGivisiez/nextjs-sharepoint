"use client";

import { Box, Typography } from "@mui/material";
import {
  Breadcrumbs,
  ContainerAboutAction,
  TitleDescription,
} from "@/components";
import { ArrowRight } from "@phosphor-icons/react";
import { CONTAINERABOUTACTION, TITLEDESCRIPTION } from "../constants";

export const ConhecaAEDAOnlinePage = () => {
  return (
    <Box>
      <Breadcrumbs category="EDAOnline" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>

      <Box
        sx={{
          my: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "gray",
          fontSize: 24,
        }}
      >
        Falta terminar!
      </Box>

      <>
        {CONTAINERABOUTACTION.map((item, index) => (
          <ContainerAboutAction
            key={index}
            title={item.title}
            button={item.button}
            icon={ArrowRight}
            isBackground={true}
            buttonHref={item.buttonHref}
            mailto={item.mailto}
            contacto={item.contacto}
          />
        ))}
      </>
    </Box>
  );
};
