"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  BannerTitle,
  TitleDescription,
  IconInformative,
  TimelinePagination,
  Breadcrumbs,
  ContainerAboutAction,
  CardIconDescription,
  RichText,
} from "@/components";
import SobrenosBanner from "@/../public/img/eda/sobrenos-banner.jpg";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import {
  TIMELINE_TITLE,
  TIMELINE_TITLE_DESCRIPTION,
  CARDICONDESCRIPTION,
  CONTAINERABOUTACTION,
  objTitleDescriptionSobreNosTemas,
} from "../constants";
import getTimelinePaginationService from "../services/getTimelinePagination";
import { TimelineDataItem } from "@/components/Timeline/type";
import getRichText from "../services/getRichText";
import { RichTextProps } from "@/components/Typography/types";
import { IconInformativeProps } from "@/components/Informative/types";
import getIconInformative from "../services/getIconInformative";
import { Download } from "@phosphor-icons/react";

export const SobreNosPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [itemsTimeline, setItemsTimeline] = useState<TimelineDataItem[]>([]);
  const [iconInformative, setIconInformative] = useState<
    IconInformativeProps[]
  >([]);

  useEffect(() => {
    getTimelinePaginationService().then((response) =>
      setItemsTimeline(response as TimelineDataItem[])
    );
    getRichText().then((response) => setRichText(response as []));
    getIconInformative().then((response) => {
      setIconInformative(response as []);
    });
  }, []);

  return (
    <>
      <BannerTitle src={SobrenosBanner} title="Sobre Nós" />
      <Breadcrumbs category="EDA" mainPage="Sobre Nós" />

      <Box sx={{ my: 6 }}>
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

      {iconInformative.map((item, index) => (
        <IconInformative
          key={index}
          employees={item.employees}
          years={item.years}
          clientEnergy={item.clientEnergy}
        />
      ))}

      <Box sx={{ pt: "48px" }}>
        <TitleDescription
          title={TIMELINE_TITLE}
          description={TIMELINE_TITLE_DESCRIPTION}
        />
        {itemsTimeline.length !== 0 && (
          <TimelinePagination timelineData={itemsTimeline} />
        )}
      </Box>

      <Box>
        <TitleDescription title="Ficha da Empresa" />
        <RichText richText={richText.length > 0 ? richText[1].richText : ""} />
      </Box>

      {CONTAINERABOUTACTION.map((item, index) => (
        <ContainerAboutAction
          key={index}
          title={item.title}
          button={item.button}
          icon={Download}
          isBackground={true}
          isDefault={false}
          downloadUrl={item.downloadUrl}
        />
      ))}

      <Box sx={{ ...cardicondescription }}>
        {objTitleDescriptionSobreNosTemas.map((item, index) => (
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
