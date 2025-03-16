"use client";

import { useEffect, useState } from "react";

import {
  Breadcrumbs,
  ContainerAboutAction,
  IconInfor,
  InfoImageActionButton,
  StepVerticalInformative,
  TitleDescription,
} from "@/components";
import { StepVerticalInformativeProps } from "@/components/Step/types";
import { Box, Grid } from "@mui/material";
import { Download } from "@phosphor-icons/react";

import {
  CONTAINERABOUTACTION,
  CONTAINERABOUTACTION_TEXT,
  DESCRIPTION,
  IFONINFOR,
  INFOIMAGEACTIONBUTTON,
  STEPVERTICALINFORMATIVE_DESCRIPTION,
  STEPVERTICALINFORMATIVE_TITLE,
  TITLE,
} from "../constants";
import getStepVerticalInformative from "../services/getStepVerticalInformative";
import { iconinfor, iconinfor_grid } from "./styles";

export const FaltaDeEnergiaPage = () => {
  const [stepVerticalInfo, setStepVerticalInfo] = useState<
    StepVerticalInformativeProps[]
  >([]);

  useEffect(() => {
    getStepVerticalInformative().then((response) =>
      setStepVerticalInfo(response as StepVerticalInformativeProps[])
    );
  }, []);

  return (
    <>
      <Breadcrumbs category="Clientes" mainPage="Falta de Energia" />

      <Box sx={{ mt: 8, mb: 6 }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
      </Box>

      <Box sx={iconinfor}>
        <Grid sx={iconinfor_grid}>
          {IFONINFOR.map((item, index) => (
            <IconInfor key={index} icon={item.icon} title={item.title} />
          ))}
        </Grid>
      </Box>

      <>
        <TitleDescription
          title={STEPVERTICALINFORMATIVE_TITLE}
          description={STEPVERTICALINFORMATIVE_DESCRIPTION}
        />
        <Box sx={{ my: 5 }}>
          {stepVerticalInfo.map((item, index) => {
            return (
              <StepVerticalInformative
                key={index}
                stepIndex={item.stepIndex}
                stepTitle={item.stepTitle}
                stepDescription={item.stepDescription}
                grayBackground={index % 2 == 0 ? true : false}
              />
            );
          })}
        </Box>
      </>

      <>
        {CONTAINERABOUTACTION.map((item, index) => (
          <ContainerAboutAction
            key={index}
            title={item.title}
            button={item.button}
            icon={Download}
            isBackground={true}
            isDefault={false}
            downloadUrl={item.downloadUrl}
          >
            {CONTAINERABOUTACTION_TEXT}
          </ContainerAboutAction>
        ))}

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
            grayBackground={false}
            reverse={false}
          />
        ))}
      </>
    </>
  );
};
