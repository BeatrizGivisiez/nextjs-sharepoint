"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  RichText,
  Tabs,
  TitleDescription,
} from "@/components";
import { Box, useTheme } from "@mui/material";
import { PALETTE } from "@/app/theme/styles/constantes";
import { useEffect, useState } from "react";
import { TabPanel } from "@mui/lab";
import { CARDICONDESCRIPTION, TITLE } from "../constants";
import { RichTextProps } from "@/components/Typography/types";
import getRichText from "../services/getRichText";
import { GalleryLeafletsResponse } from "@/components/Gallery/types";
import getGalleryleaflets from "../services/getGalleryLeaflets";
import { TabsRichTextDto } from "@/dtos/TabsRichTextDto";
import getTabsRichText from "../services/getTabsRichText";
import { stacker, tabs, tabsBox, tabsContent } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { GalleryLeaflets_Global } from "@/components/Gallery/GalleryLeaflets_Global";
import { TabsRichText_Global } from "@/components/Tabs/TabsRichText_Global";

export const EficienciaDeEnergiaEletricaPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [leaflets, setLeaflets] = useState<GalleryLeafletsResponse[]>([]);
  const [tabsRichText, setTabsRichText] = useState<TabsRichTextDto[]>([]);
  const [hasTabs, setHasTabs] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
    getTabsRichText().then((response) => {
      setTabsRichText(response as TabsRichTextDto[]);
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
      <Breadcrumbs
        category="Sustentabilidade"
        mainPage="Eficiência de Energia Elétrica"
      />

      <Box sx={{ py: "80px" }}>
        <TitleDescription title="Eficiência de Energia Elétrica" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>
      <Box sx={{ py: "80px", backgroundColor: PALETTE.GRAY_300 }}>
        <TitleDescription title="Utilização Racional de Energia" />
        <RichText richText={richText.length > 0 ? richText[1].richText : ""} />
      </Box>
      <Box sx={{ py: "80px" }}>
        <TitleDescription
          title="Explore alguns dos nossos folhetos"
          description=""
        />
        <Box sx={stacker}>
          <GalleryLeaflets_Global
            leaflets={leaflets}
            hasTabs={hasTabs}
            loading={loading}
          />
        </Box>
      </Box>

      {/*<Box sx={{ backgroundColor: PALETTE.WHITE }}>
            <Box sx={{ pt: 6 }}>
              <TitleDescription title="Ações e Projetos" description="" />
            </Box>

           /<TabsRichText_Global tabsRichText={tabsRichText} />
      </Box>*/}

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
