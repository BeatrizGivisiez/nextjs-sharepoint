"use client";

import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import {
  Links,
  CardOffers,
  Carousel,
  InfoImageActionButton,
  CardIconDescription,
  TitleDescription,
  ButtonActionIcon,
} from "@/components";
import { LinksProps } from "@/components/Links/types";
import { CardOffersProps } from "@/components/Card/types";
import getLinks from "../services/getLinks";
import getCardOffers from "../services/getCardOffers";
import getCarousel from "../services/getCarousel";
import {
  CARDICONDESCRIPTION,
  CARD_ICON_DESCRIPTIONS,
  CARD_OFFERS,
  INFOIMAGEACTIONBUTTON,
  PAGE_HOME,
} from "../constants";
import {
  cardoffers_grid,
  cardoffers_box,
  cardoffers_box_button,
  cardoffers_button,
  cardoffers_item,
  links_box,
  links_grid,
} from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { PALETTE } from "@/app/theme/styles/constantes";

export const HomePage = () => {
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [cardoffers, setCardoffers] = useState<CardOffersProps[]>([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    getLinks().then((response) => setLinks(response));
    getCardOffers().then((response) =>
      setCardoffers(response as CardOffersProps[])
    );
    getCarousel().then((carousel) => setCarouselItems(carousel as []));
  }, []);

  return (
    <>
      <Carousel
        items={carouselItems}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <Box sx={links_box}>
        <Grid sx={links_grid}>
          {links.map((item, index) => (
            <Links
              key={index}
              name={item.name}
              icon={item.icon}
              idLink={index + 1}
              link={item.link}
            />
          ))}
        </Grid>
      </Box>

      <Box sx={cardoffers_grid}>
        <TitleDescription
          title={PAGE_HOME.title}
          description={PAGE_HOME.description}
        />
        <Box sx={cardoffers_box}>
          {cardoffers.map((item, index) => (
            <Box sx={cardoffers_item} key={index}>
              <CardOffers
                link={item.link}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Box>
          ))}
        </Box>
        <Box sx={cardoffers_box_button}>
          {CARD_OFFERS.map((item, index) => (
            <ButtonActionIcon
              key={index}
              sx={cardoffers_button}
              label={item.label}
              href={item.href}
            />
          ))}
        </Box>
      </Box>

      {INFOIMAGEACTIONBUTTON.map((item, index) => (
        <InfoImageActionButton
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          buttonPrimary={item.buttonPrimary}
          iconButtonPrimary={item.iconButtonPrimary}
          imageAlt={item.imageAlt}
          imageSrc={item.imageSrc}
          grayBackground={item.grayBackground}
          reverse={item.reverse}
          buttonPrimaryHref={item.primaryHref}
        />
      ))}

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        {CARD_ICON_DESCRIPTIONS.map((item, index) => (
          <TitleDescription key={index} title={item.title} />
        ))}
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

export default HomePage;
