"use client";

import {
  Breadcrumbs,
  DownloadApp,
  InfoImageActionButton,
  TitleDescription,
  TopicImage,
} from "@/components";
import { Topic } from "@/components/TopicImage/TopicImage";
import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import {
  DOWNLOADAPP,
  INFOIMAGEACTIONBUTTON,
  TOPICIMAGE,
  TITLEDESCRIPTION,
} from "../constants";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

export const LeiturasPage = () => {
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLeaflets = async () => {
      try {
        const response = await getGalleryleaflets();
        const leafletsResponse =
          response as unknown as GalleryLeafletsResponse[];
        setLeaflets(leafletsResponse);
        if (
          leafletsResponse.length > 0 &&
          leafletsResponse[0]?.tabsLabel != null
        ) {
          setHasTabs(true);
        } else {
          setHasTabs(false);
        }
      } catch (error) {
        console.error("Error fetching leaflets:", error);
        setLeaflets([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaflets();
  }, []);

  return (
    <Box>
      <Breadcrumbs
        category="Clientes"
        mainPage="Produtos e Serviços"
        URLmainPage="/clientes/produtos-e-servicos"
        subPage="Leituras"
      />

      <Box sx={{ pt: "80px" }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>

      {TOPICIMAGE.map((item, index) => (
        <TopicImage
          key={index}
          backgroundImg={item.backgroundImg}
          backgroundImgAlt={item.backgroundImgAlt}
        >
          {item.topics.map((topic, id) => (
            <Topic
              key={id}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
            />
          ))}
        </TopicImage>
      ))}

      {DOWNLOADAPP.map((item, index) => (
        <DownloadApp
          key={index}
          title={item.title}
          description={item.description}
          buttonAppStore={item.buttonAppStore}
          buttonGooglePlay={item.buttonGooglePlay}
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          grayBackground={item.grayBackground}
          buttonAppStoreHref={item.buttonAppStoreHref}
          buttonGooglePlayHref={item.buttonGooglePlayHref}
        />
      ))}

      <Box sx={{ pt: "80px" }}>
        <TitleDescription
          title={"Consulte os nossos folhetos"}
          description={""}
        />
        <GalleryLeaflets_Global
          leaflets={leaflets}
          hasTabs={hasTabs}
          loading={loading}
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
          imageSrc={item.imageSrc}
          imageAlt={item.imageAlt}
          grayBackground={item.grayBackground}
          reverse={item.reverse}
        />
      ))}
    </Box>
  );
};
