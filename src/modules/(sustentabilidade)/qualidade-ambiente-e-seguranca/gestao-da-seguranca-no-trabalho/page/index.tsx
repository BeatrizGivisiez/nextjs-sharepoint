"use client";

import {
  Accordion,
  Breadcrumbs,
  ContainerAboutAction,
  Tabs,
  TitleDescription,
} from "@/components";
import { Box, Container } from "@mui/material";
import { ArrowRight } from "@phosphor-icons/react";
import { CONTAINERABOUTACTION } from "../constants";
import { useEffect, useState } from "react";
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

export const GestaoDaSegurancaNoTrabalhoPage = () => {
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
        subPage={"Gestão da Segurança no Trabalho"}
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Gestão da Segurança no Trabalho"}
          description={
            "A Saúde e Segurança no Trabalho (SST) constitui um pilar estratégico essencial para a EDA, sendo o bem-estar e integridade física e psicológica dos trabalhadores uma prioridade. A preocupação com este tema reflete-se na melhoria contínua das condições de segurança nos locais de trabalho e no estabelecimento de melhores práticas e metodologias que o Grupo tem vindo a implementar ao longo dos anos, garantindo, assim, a diminuição do risco e adotando comportamentos seguros.\n\nNo âmbito da SST, as metas e objetivos da EDA englobam, prioritariamente, a redução do risco nas atividades e instalações, a melhoria das condições de trabalho e promoção do bem-estar interno e a redução dos incidentes de trabalho (acidentes e quase-acidentes) que, tendencialmente, se pretende que atinjam o nível zero, incentivando a comunicação dos quase-acidentes e identificando na sua génese as situações perigosas."
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
  );
};
