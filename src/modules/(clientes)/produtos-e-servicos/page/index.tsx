"use client";
import { Box } from "@mui/material";
import {
  Banner,
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  InfoImageActionButton,
  TitleDescription,
} from "@/components";
import BannerTitleImg from "@/../public/img/clientes/produtoseservicos-banner.jpg";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import {
  CARDICONDESCRIPTION,
  CARDICONDESCRIPTION_TITLE,
  DESCRIPTION,
  INFOIMAGEACTIONBUTTON,
  TITLE,
} from "../constants";
import { useEffect, useState } from "react";
import getBanner from "../services/getBanner";
import { BannerProps } from "@/components/Banner/types";

const ProdutosEServicosPage = () => {
  const [banner, setBanner] = useState<BannerProps[]>([]);

  useEffect(() => {
    getBanner().then((response) => setBanner(response as BannerProps[]));
  }, []);

  return (
    <Box>
      <BannerTitle src={BannerTitleImg} title="Produtos e Serviços" />
      <Breadcrumbs category="Clientes" mainPage="Produtos e Serviços" />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
      </Box>

      {INFOIMAGEACTIONBUTTON.map((item, index) => (
        <InfoImageActionButton
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          buttonPrimary={item.buttonPrimary}
          buttonPrimaryHref={item.buttonHref}
          iconButtonPrimary={item.iconButtonPrimary}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          grayBackground={item.grayBackground}
          reverse={item.reverse}
        />
      ))}

      {banner.map((item, index) => (
        <Banner
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
          imageSrc={item.imageSrc}
        />
      ))}

      <Box sx={cardicondescription}>
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
    </Box>
  );
};
export default ProdutosEServicosPage;
