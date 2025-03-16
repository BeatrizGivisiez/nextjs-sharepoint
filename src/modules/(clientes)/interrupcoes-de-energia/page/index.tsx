"use client";

import {
  Breadcrumbs,
  ContainerAboutAction,
  InterruptionView,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import {
  CONTAINERABOUTACTION,
  CONTAINERABOUTACTION2,
  TITLEDESCRIPTION,
} from "../constants";
import { InterruptionProvider } from "@/contexts/InterruptionContext";

export const InterrupcoesDeEnergiaPage = () => {
  return (
    <Box>
      <Breadcrumbs category="Clientes" mainPage="Interrupções de Energia" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>

      <Box sx={{ pb: "80px" }}>
        <InterruptionProvider>
          <InterruptionView />
        </InterruptionProvider>
      </Box>

      {CONTAINERABOUTACTION2.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={ArrowRight}
          isBackground={true}
          buttonHref={item.buttonHref}
          isDefault={false}
        >
          {
            "Preencha o nosso formulário e fique subscrito à nossa rede de alertas que irá notificá-lo sempre que existam interrupções na sua localidade."
          }
        </ContainerAboutAction>
      ))}

      {CONTAINERABOUTACTION.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={ArrowRight}
          isBackground={false}
          buttonHref={item.buttonHref}
          mailto={item.mailto}
          contacto={item.contacto}
        />
      ))}
    </Box>
  );
};
