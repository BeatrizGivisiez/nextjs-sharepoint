"use client";

import {
  Accordion,
  Breadcrumbs,
  ContainerAboutAction,
  Tabs,
  TitleDescription,
} from "@/components";
import { Box, Container, Typography } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import { CONTAINERABOUTACTION } from "../constants";
import { AccordionDto } from "@/dtos/AccordionDto";
import { useEffect, useState } from "react";
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

export const GestaoDeQualidadePage = () => {
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);
  useEffect(() => {
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
        category={"Sustentabilidade"}
        mainPage={"Qualidade, ambiente e segurança"}
        URLmainPage="/sustentabilidade/qualidade-ambiente-e-seguranca"
        subPage={"Gestão da Qualidade"}
      />

      <Box sx={{ pt: "80px", pb: "40px" }}>
        <TitleDescription
          title={"Gestão da Qualidade"}
          description={
            "O reconhecimento externo e independente dos serviços prestados pela EDA tem sido um dos desígnios da empresa, de forma a garantir que os sistemas de gestão da qualidade implementados se encontram em conformidade com os referenciais internacionais e, em simultâneo, garantam uma gestão mais eficaz das atividades desenvolvidas pela empresa, tendo em consideração o cumprimento legal e as necessidades socioecónomicas, promovendo a criação de valor para todas as partes interessadas. Dessa forma, a EDA demonstra, aos seus futuros e atuais clientes, a capacidade de satisfazer as suas necessidades e requisitos."
          }
        />
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
