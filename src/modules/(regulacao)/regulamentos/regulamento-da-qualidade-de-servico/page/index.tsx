"use client";

import {
  Accordion,
  Breadcrumbs,
  InfoImageActionButton,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import { INFOIMAGEACTIONBUTTON } from "../constants";
import { Box, Container } from "@mui/material";
import { Download } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { AccordionDto } from "@/dtos/AccordionDto";
import getAccordion from "../services/getAccordion";
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

export const RegulamentoDaQualidadeDeServicoPage = () => {
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
        subPage="Regulamentos Da Qualidade De Serviço"
      />

      <Box sx={{ mt: { xs: "60px", sm: "80px" } }}>
        <TitleDescription title="Regulamento da Qualidade de Serviço" />

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

    
    </>
  );
};
