"use client";

import { useEffect, useState } from "react";

import {
  Accordion,
  Breadcrumbs,
  ContainerAboutAction,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import { RichTextProps } from "@/components/Typography/types";
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
import { Box, Container } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";

import { CONTAINERABOUTACTION } from "../constants";
import getAccordion from "../services/getAccordion";
import getRichText from "../services/getRichText";

export const RegulamentoDeRelacoesComerciaisPage = () => {
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
      <Breadcrumbs
        category="Regulação"
        mainPage="Regulamentos"
        URLmainPage="/regulacao/regulamentos"
        subPage="Regulamento de Relações Comerciais"
      />

      <Box sx={{ py: "80px" }}>
        <TitleDescription title={"Regulamento de Relações Comerciais"} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

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
    </>
  );
};
