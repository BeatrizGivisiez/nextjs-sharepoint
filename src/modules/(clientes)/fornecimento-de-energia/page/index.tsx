"use client";

import { Box, Container, useTheme } from "@mui/material";
import {
  Accordion,
  Breadcrumbs,
  CardIconDescription,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import { PALETTE } from "@/app/theme/styles/constantes";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import { TabPanel } from "@mui/lab";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import {
  CARDICONDESCRIPTION,
  TITLEDESCRIPTION_CARDICONDESCRIPTION,
  TITLEDESCRIPTION_GALLERYLEAFLETS,
} from "../constants";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
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
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

export const FornecimentoDeEnergiaPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

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
  }, []);

  return (
    <>
      <Breadcrumbs category={"Clientes"} mainPage={"Fornecimento de Energia"} />

      <Box sx={{ mt: 8 }}>
        <TitleDescription title="Fornecimento de Energia" />
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
        <TitleDescription
          title={"Documentação"}
          description={"Consulte os documentos relacionados com este tema."}
        />
        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>

      <Box sx={{ pt: "50px", pb: "50px" }}>
        {TITLEDESCRIPTION_GALLERYLEAFLETS.map((item, index) => (
          <TitleDescription key={index} title={item.title} />
        ))}

        <GalleryLeaflets_Global
          leaflets={leaflets}
          hasTabs={hasTabs}
          loading={loading}
        />
      </Box>

      <Box sx={{ ...cardicondescription, backgroundColor: PALETTE.GRAY_300 }}>
        {TITLEDESCRIPTION_CARDICONDESCRIPTION.map((item, index) => (
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
