"use client";

import { Box } from "@mui/material";
import {
  BannerTitle,
  Breadcrumbs,
  ContainerAboutAction,
  PowerBI,
  TitleDescription,
} from "@/components";
import Banner from "@/../public/img/clientes/osnossosclientes-banner.jpg";
import { ArrowRight } from "@phosphor-icons/react";
import { PowerBIProps } from "@/components/PowerBI/types";
import { useEffect, useState } from "react";
import getPowerBI from "../services/getPowerBI";
import { CONTAINERABOUTACTION, TITLEDESCRIPTION } from "../constants";

export const OsNossosClientesPage = () => {
  const [powerbi, setPowerbi] = useState<PowerBIProps[]>([]);

  useEffect(() => {
    getPowerBI().then((response) => {
      setPowerbi(response as PowerBIProps[]);
    });
  }, []);

  return (
    <Box>
      <BannerTitle src={Banner} title="Os Nossos Clientes" />
      <Breadcrumbs category="Clientes" mainPage="Os Nossos Clientes" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}

        {powerbi.map((item, index) => (
          <PowerBI key={index} src={item.src} />
        ))}
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
