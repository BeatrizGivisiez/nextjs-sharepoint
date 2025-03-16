"use client";

import { Box } from "@mui/material";
import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  InfoImageActionButton,
  TitleDescription,
} from "@/components";
import Banner from "@/../public/img/eda/oquefazemos-banner.jpg";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import {
  DESCRIPTION,
  TITLE,
  INFOIMAGEACTIONBUTTON,
  CARDICONDESCRIPTION,
  CARDICONDESCRIPTION_TITLE,
} from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";

export const OQueFazemosPage = () => {
  return (
    <>
      <BannerTitle src={Banner} title="O que fazemos" />
      <Breadcrumbs category="EDA" mainPage="O que fazemos" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
      </Box>

      {INFOIMAGEACTIONBUTTON.map((item, index) => (
        <InfoImageActionButton
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          buttonPrimary={item.buttonPrimary}
          iconButtonPrimary={item.iconButtonPrimary}
          buttonPrimaryHref={item.buttonPrimaryHref}
          imageAlt={item.imageAlt}
          imageSrc={item.imageSrc}
          grayBackground={item.grayBackground}
          reverse={item.reverse}
        />
      ))}

      <Box sx={{...cardicondescription, backgroundColor: PALETTE.GRAY_300,}}>
        <TitleDescription title={CARDICONDESCRIPTION_TITLE} />
        <Box sx={cardicondescription_box}>
          {CARDICONDESCRIPTION.map((item, index) => (
            <CardIconDescription
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
