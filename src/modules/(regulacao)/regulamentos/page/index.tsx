"use client";

import { Box } from "@mui/material";
import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  PaperLinks,
  TitleDescription,
} from "@/components";
import Banner from "@/../public/img/regulacao/regulamentos-banner.jpg";
import {
  CARDICONDESCRIPTION,
  CARDICONDESCRIPTION_TITLE,
  PAPERLINKS,
  PAGE_REGULAMENTOS,
} from "../constants";
import { paperlinks, paperlinks_box } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";

export const RegulamentosPage = () => {
  return (
    <>
      <BannerTitle src={Banner} title="Regulamentos" />
      <Breadcrumbs category="Regulação" mainPage="Regulamentos" />

      <Box sx={paperlinks_box}>
        <TitleDescription
          title={PAGE_REGULAMENTOS.title}
          description={PAGE_REGULAMENTOS.description}
        />
        <Box sx={paperlinks}>
          {PAPERLINKS.map((item, index) => (
            <PaperLinks key={index} title={item.title} url={item.url} />
          ))}
        </Box>
      </Box>

      <Box sx={{...cardicondescription, backgroundColor: PALETTE.GRAY_300,}}>
        <TitleDescription title={CARDICONDESCRIPTION_TITLE[0].value} />
        <Box sx={cardicondescription_box}>
          {CARDICONDESCRIPTION.map((item, index) => (
            <CardIconDescription
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
