"use client";

import {
  Accordion,
  Breadcrumbs,
  CardIconDescription,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import { Box, Container } from "@mui/material";
import { PALETTE } from "@/app/theme/styles/constantes";
import { useEffect, useState } from "react";
import { PowerBIProps } from "@/components/PowerBI/types";
import getPowerBI from "../services/getPowerBI";
import getRichText from "../services/getRichText";
import { RichTextProps } from "@/components/Typography/types";
import { CARDICONDESCRIPTION } from "../constants";
import { AccordionDto } from "@/dtos/AccordionDto";
import getAccordion from "../services/getAccordion";
import { TabPanel } from "@mui/lab";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import {
  Accordion_NoTabs_box,
  Accordion_NoTabs_content,
  Accordion_NoTabs_grid,
  Accordion_NoTabs_item,
  Accordion_Tabs_box,
  Accordion_Tabs_content,
  Accordion_Tabs_grid,
  Accordion_Tabs_item,
} from "@/styles/Accordion";
import Image from "next/image";
import EvolucaoMixEnergetico from "@/../public/img/sustentabilidade/EvolucaoMixEnergetico.png";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

export const RotulagemEnergeticaPage = () => {
  const [powerbi, setPowerbi] = useState<PowerBIProps[]>([]);
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPowerBI().then((response) => {
      setPowerbi(response as PowerBIProps[]);
    });
    getRichText().then((response) => setRichText(response as []));
    getAccordion().then((response) => {
      const accordionResponse = response as AccordionDto[];
      setAccordion(accordionResponse);
      const hasTabsAccordionValue = accordionResponse.some(
        (item) => item.tabsLabel !== null
      );
      setHasTabsAccordion(hasTabsAccordionValue);
    });
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
    <>
      <Breadcrumbs
        category="Sustentabilidade"
        mainPage="Rotulagem Energética"
      />

      <Box sx={{ py: "80px" }}>
        <TitleDescription title={"Rotulagem Energética"} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />

        {hasTabsAccordion ? (
          <Box sx={Accordion_Tabs_box}>
            <Container sx={Accordion_Tabs_grid}>
              {accordion.length != 0 && (
                <Tabs idTabs={accordion} isId={false} tabOpen={0}>
                  <Box sx={Accordion_Tabs_content}>
                    {accordion.map((tab, index) => (
                      <Box sx={Accordion_Tabs_item} key={index}>
                        <TabPanel value={tab.value}>
                          {tab.accordions.map((item, itemIndex) => {
                            const isOutsideAccordionNext =
                              tab.accordions[itemIndex + 1]?.outsideAccordion;

                            return (
                              <Accordion
                                key={itemIndex}
                                title={item.title}
                                description={item.description}
                                outsideAccordion={item.outsideAccordion}
                                borderBottom={isOutsideAccordionNext}
                              />
                            );
                          })}
                        </TabPanel>
                      </Box>
                    ))}
                  </Box>
                </Tabs>
              )}
            </Container>
          </Box>
        ) : (
          <Box sx={Accordion_NoTabs_box}>
            <Container sx={Accordion_NoTabs_grid}>
              {accordion.length != 0 && (
                <Box sx={Accordion_NoTabs_content}>
                  {accordion.map((tab, index) => (
                    <Box sx={Accordion_NoTabs_item} key={index}>
                      {tab.accordions.map((item, itemIndex) => {
                        const isOutsideAccordionNext =
                          tab.accordions[itemIndex + 1]?.outsideAccordion;

                        return (
                          <Accordion
                            key={itemIndex}
                            title={item.title}
                            description={item.description}
                            outsideAccordion={item.outsideAccordion}
                            borderBottom={isOutsideAccordionNext}
                          />
                        );
                      })}
                    </Box>
                  ))}
                </Box>
              )}
            </Container>
          </Box>
        )}
      </Box>

      <Box sx={{ py: "80px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title="Evolução do Mix Energético" description="" />
        <Container sx={{ pt: "24px" }}>
          <Image
            src={EvolucaoMixEnergetico}
            alt="EDA Renováveis"
            width={900}
            layout="responsive"
          />
        </Container>
      </Box>

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title="Folhetos da Rotulagem" />
        <GalleryLeaflets_Global
          leaflets={leaflets}
          hasTabs={hasTabs}
          loading={loading}
        />
      </Box>

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title="Explore outros temas" />
        <Box sx={cardicondescription_box}>
          {CARDICONDESCRIPTION.map((item, index) => (
            <CardIconDescription
              key={index}
              title={item.title}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
