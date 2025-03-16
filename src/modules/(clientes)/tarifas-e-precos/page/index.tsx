"use client";

import { Box, Container } from "@mui/material";
import {
  Accordion,
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  InfoImageActionButton,
  Tabs,
  TitleDescription,
} from "@/components";
import Banner from "@/../public/img/clientes/tarifaseprecos-banner.jpg";
import { useEffect, useState } from "react";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import { TabPanel } from "@mui/lab";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import getAccordion from "../services/getAccordion";
import { AccordionDto } from "@/dtos/AccordionDto";
import { stacker } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import {
  CARDICONDESCRIPTION,
  INFOIMAGEACTIONBUTTON,
  TITLEDESCRIPTION_EDA,
  TITLEDESCRIPTION_GALLERYLEAFLETS,
} from "../constants";
import { PALETTE } from "@/app/theme/styles/constantes";
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
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

const TarifasEPrecosPage = () => {
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
    <Box>
      <BannerTitle src={Banner} title="Tarifas e Preços" />
      <Breadcrumbs category="Clientes" mainPage="Tarifas e Preços" />

      <Box sx={{ pt: "50px", pb: "50px" }}>
        <TitleDescription
          title="Soluções feitas à sua medida"
          description="O sistema tarifário de venda de energia elétrica é o conjunto de regras e de preços utilizados pelo comercializador de último recurso para faturação dos fornecimentos de energia elétrica ao cliente. Sendo designado comercializador de último recurso a entidade titular de licença de comercialização que, no exercício da sua atividade, está sujeita à obrigação de prestação do serviço de fornecimento de energia elétrica, nos termos legalmente definidos, e por cliente a pessoa singular ou coletiva que compra energia elétrica para consumo próprio, incluindo a fase pré-contratual."
        />

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
          buttonSecondary={item.buttonSecondary}
          downloadUrl={item.downloadUrl}
          iconButtonSecondary={item.iconButtonSecondary}
          buttonMessage={item.buttonMessage}
          grayBackground={item.grayBackground}
          reverse={item.reverse}
        />
      ))}

      <Box sx={{ pt: "50px", pb: "50px" }}>
        {TITLEDESCRIPTION_GALLERYLEAFLETS.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
        <Box sx={stacker}>
          <GalleryLeaflets_Global
            leaflets={leaflets}
            hasTabs={hasTabs}
            loading={loading}
          />
        </Box>
      </Box>

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        {TITLEDESCRIPTION_EDA.map((item, index) => (
          <TitleDescription key={index} title={item.title} />
        ))}
        <Box sx={cardicondescription_box}>
          {CARDICONDESCRIPTION.map((item, index) => (
            <CardIconDescription
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default TarifasEPrecosPage;
