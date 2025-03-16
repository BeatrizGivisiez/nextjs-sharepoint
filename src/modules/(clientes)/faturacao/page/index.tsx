"use client";
import {
  Accordion,
  BannerTitle,
  Breadcrumbs,
  CardIconDescription,
  InfoImageActionButton,
  ModalHTML,
  PaperLinks,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import { Box, Container } from "@mui/material";
import infoimgactionbutton from "@/../public/img/clientes/faturacao-infoimgactionbutton.jpg";
import Banner from "@/../public/img/clientes/faturacao-banner.jpg";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { TabPanel } from "@mui/lab";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import {
  CARDICONDESCRIPTION,
  PAPERLINKS,
  TITLEDESCRIPTION_CARDICONDESCRIPTION,
  TITLEDESCRIPTION_PAPERLINKS,
} from "../constants";
import getAccordion from "../services/getAccordion";
import { AccordionDto } from "@/dtos/AccordionDto";
import { baseURLAzure } from "@/util/baseURL";
import { paperlinks, paperlinks_box } from "./styles";
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
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";

export const FaturacaoPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [accordion, setAccordion] = useState<AccordionDto[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", fileSrc: "" });
  const [hasTabsAccordion, setHasTabsAccordion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  const handleOpen = (title: string) => {
    let fileSrc = "";
    switch (title) {
      case "Fatura Baixa Tensão":
        fileSrc = `${baseURLAzure}/ler-fatura/BTN.html`;
        break;
      case "Fatura Baixa Tensão Especial":
        fileSrc = `${baseURLAzure}/ler-fatura/BTE.html`;
        break;
      case "Fatura Média Tensão":
        fileSrc = `${baseURLAzure}/ler-fatura/MT.html`;
        break;
      default:
        break;
    }
    setModalContent({ title, fileSrc });
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
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
      <BannerTitle src={Banner} title="Faturação" />
      <Breadcrumbs category={"Clientes"} mainPage="Faturação" />

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

      <Box sx={paperlinks_box}>
        {TITLEDESCRIPTION_PAPERLINKS.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
        <Box sx={paperlinks}>
          {PAPERLINKS.map((item, index) => (
            <PaperLinks
              key={index}
              title={item.title}
              url={item.url}
              whiteColor={true}
              onClick={() => handleOpen(item.title)}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ pt: "50px", pb: "50px" }}>
        <TitleDescription title="Consulte os nossos folhetos" description="" />
        <GalleryLeaflets_Global
          leaflets={leaflets}
          hasTabs={hasTabs}
          loading={loading}
        />
      </Box>

      <InfoImageActionButton
        title={"Tarifas e Preços"}
        subtitle={
          "Mantenha-se informado sobre os preços em vigor na Região Autónoma dos Açores."
        }
        buttonPrimary={"Saber mais"}
        iconButtonPrimary={ArrowRight}
        imageAlt={"Tarifas e preços"}
        imageSrc={infoimgactionbutton}
        grayBackground={true}
        reverse={true}
        buttonPrimaryHref={"/clientes/tarifas-e-precos"}
      />

      <Box sx={cardicondescription}>
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

      <ModalHTML
        open={openModal}
        onClose={handleClose}
        title={modalContent.title}
        fileSrc={modalContent.fileSrc}
      />
    </>
  );
};
