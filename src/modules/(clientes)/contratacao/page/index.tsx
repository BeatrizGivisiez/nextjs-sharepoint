"use client";

import { useEffect, useState } from "react";

import Banner from "@/../public/img/clientes/contratacao-banner.jpg";
import { PALETTE } from "@/app/theme/styles/constantes";
import {
  Accordion,
  BannerTitle,
  Breadcrumbs,
  ContainerAboutAction,
  InfoImageActionButton,
  Tabs,
  TitleDescription,
} from "@/components";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";
import { IFile } from "@/components/Paper/types";
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

import {
  CONTAINERABOUTACTION,
  DESCRIPTION,
  DOC_TITLE,
  INFOIMAGEACTIONBUTTON,
  LEAFLETS_DESCRIPTION,
  LEAFLETS_TITLE,
  TITLE,
} from "../constants";
import getAccordion from "../services/getAccordion";
import getDocumentLibrary from "../services/getDocumentLibrary";
import getGalleryleaflets from "../services/getGalleryLeaflets";

export const ContratacaoPage = () => {
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDocumentLibrary().then((response) => {
      const documentLibraryResponse = response as IFile[];
      setDocumentLibrary(documentLibraryResponse);
      if (documentLibraryResponse[0].tabsLabel != "") {
        setHasTabsPAD(true);
      } else {
        setHasTabsPAD(false);
      }
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
      <BannerTitle title="Contratação" src={Banner} />
      <Breadcrumbs category="Clientes" mainPage="Contratação" />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={TITLE} description={DESCRIPTION} />
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

      <Box sx={{ py: "80px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title={DOC_TITLE} />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
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
          imageAlt={item.imageAlt}
          imageSrc={item.imageSrc}
          grayBackground={false}
          reverse={true}
        />
      ))}

      <Box sx={{ pt: "50px", pb: "50px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription
          title={LEAFLETS_TITLE}
          description={LEAFLETS_DESCRIPTION}
        />
        <GalleryLeaflets_Global
          leaflets={leaflets}
          hasTabs={hasTabs}
          loading={loading}
        />
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
