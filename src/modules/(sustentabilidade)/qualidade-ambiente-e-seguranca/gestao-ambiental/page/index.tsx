"use client";

import { useEffect, useState } from "react";

import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Accordion,
  Breadcrumbs,
  ContainerAboutAction,
  Tabs,
  TitleDescription,
} from "@/components";
import { TabsRichText_Global } from "@/components/Tabs/TabsRichText_Global";
import { AccordionDto } from "@/dtos/AccordionDto";
import { TabsRichTextDto } from "@/dtos/TabsRichTextDto";
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
import getTabsRichText from "../services/getTabsRichText";

export const GestaoAmbientalPage = () => {
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [tabsRichText, setTabsRichText] = useState<TabsRichTextDto[]>([]);
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
    getTabsRichText().then((response) => {
      setTabsRichText(response as TabsRichTextDto[]);
    });
  }, []);
  return (
    <>
      <Breadcrumbs
        category={"Sustentabilidade"}
        mainPage={"Qualidade, ambiente e segurança"}
        URLmainPage="/sustentabilidade/qualidade-ambiente-e-seguranca"
        subPage={"Gestão Ambiental"}
      />
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title={"Gestão Ambiental"}
          description={
            "É um grande desígnio da EDA o fornecimento de eletricidade aos seus clientes, alicerçado em modelos de produção e distribuição que reduzam continuamente o seu impacte no ambiente, no sentido de garantir a qualidade de vida desta e das gerações futuras. \n\nA EDA implementou um Sistema de Gestão Ambiental (SGA), em conformidade com o referencial normativo NP EN ISO 14001:2015, desde 2012, na Central Termoelétrica do Caldeirão (ilha de São Miguel). E em 2018 certificou-se a Central Termoelétrica do Belo Jardim (ilha Terceira), em 2019 estendeu-se a certificação ambiental às centrais Termoelétricas de Santa Bárbara (ilha do Faial), São Roque do Pico (ilha do Pico) e da Graciosa (ilha Graciosa). \n\nA implementação e o respetivo reconhecimento de sistemas de gestão ambiental são um dos propósitos internos da EDA garantindo uma monitorização permanente e um elevado padrão de excelência nos serviços prestados."
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
      <Box sx={{ backgroundColor: PALETTE.GRAY_300, py: "80px" }}>
        <TitleDescription title="Ações e projetos ambiente" description="" />
        <TabsRichText_Global tabsRichText={tabsRichText} />
      </Box>
      {CONTAINERABOUTACTION.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={ArrowRight}
          isBackground={false}
          buttonHref={item.buttonHref}
          mailto={item.mailto}
          contacto={item.contacto}
        />
      ))}
    </>
  );
};
