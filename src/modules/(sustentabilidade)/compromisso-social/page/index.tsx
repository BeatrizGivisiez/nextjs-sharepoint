"use client";

import { Box, Container } from "@mui/material";
import {
  Accordion,
  Breadcrumbs,
  CardIconDescription,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import getRichText from "../services/getRichText";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import { CARDICONDESCRIPTION, TITLE } from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
import getAccordion from "../services/getAccordion";
import { AccordionDto } from "@/dtos/AccordionDto";
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
import { TabPanel } from "@mui/lab";

export const CompromissoSocialPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    getAccordion().then((response) => {
      const accordionResponse = response as AccordionDto[];
      setAccordion(accordionResponse);
      const hasTabsAccordionValue = accordionResponse.some(
        (item) => item.tabsLabel !== null
      );
      setHasTabsAccordion(hasTabsAccordionValue);
    });
  }, []);
  return (
    <>
      <Breadcrumbs category="Sustentabilidade" mainPage="Compromisso Social" />

      <Box sx={{ mt: 10 }}>
        <TitleDescription title="Compromisso Social" />
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

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title={TITLE} />
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
