"use client";

import {
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  PowerBI,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import Banner from "@/../public/img/investidores/acionistas-banner.jpg";
import Grafico from "@/../public/img/investidores/acionistas-grafico.png";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PowerBIProps } from "@/components/PowerBI/types";
import { useEffect, useState } from "react";
import getPowerBI from "../services/getPowerBI";
import { CARDICONDESCRIPTION } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
import Image from "next/image";
import { box, container } from "./styles";

export const AcionistasPage = () => {
  const [powerbi, setPowerbi] = useState<PowerBIProps[]>([]);

  useEffect(() => {
    getPowerBI().then((response) => {
      setPowerbi(response as PowerBIProps[]);
    });
  }, []);

  return (
    <>
      <BannerTitle src={Banner} title="Estrutura de Acionistas" />
      <Breadcrumbs category="Investidores" mainPage="Acionistas" />

      <Box sx={{ mt: "80px", mb: "40px" }}>
        <TitleDescription title="Estrutura de Acionistas" description="" />
        {/* {powerbi.map((item, index) => (
          <PowerBI key={index} src={item.src} />
        ))} */}
        <Box sx={box}>
          <Box sx={container}>
            <Image
              src={Grafico}
              alt="Grafico"
              width={900}
              layout="responsive"
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title="Explore outros temas" />
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
