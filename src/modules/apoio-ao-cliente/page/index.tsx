"use client";

import {
  Breadcrumbs,
  TitleDescription,
  InfoImageActionButton,
} from "@/components";
import { Box } from "@mui/material";
import { INFOIMAGEACTIONBUTTON, PAGE_APOIO_AO_CLIENTE } from "../constants";

export const ApoioAoClientePage = () => {
  return (
    <>
      <Breadcrumbs category={"Apoio ao Cliente"} />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={PAGE_APOIO_AO_CLIENTE.title}
          description={PAGE_APOIO_AO_CLIENTE.description}
        />
      </Box>

      {INFOIMAGEACTIONBUTTON.map((item, index) => (
        <InfoImageActionButton
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          buttonPrimary={item.buttonPrimary}
          buttonPrimaryHref={item.buttonPrimaryHref}
          iconButtonPrimary={item.iconButtonPrimary}
          imageAlt={item.imageAlt}
          imageSrc={item.imageSrc}
          grayBackground={item.grayBackground}
          reverse={item.reverse}
        />
      ))}
    </>
  );
};
