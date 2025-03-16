"use client";
import {
  Breadcrumbs,
  CardIconDescription,
  ContainerAboutAction,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import { CARDICONDESCRIPTION, CONTAINERABOUTACTION, TITLE } from "../constants";
import { useState, useEffect } from "react";
import getRichText from "../services/getRichText";
import { RichTextProps } from "@/components/Typography/types";
import { PALETTE } from "@/app/theme/styles/constantes";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { Download } from "@phosphor-icons/react";

export const EconomiaCircularPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);

  useEffect(() => {
    getRichText().then((response) => setRichText(response as []));
  }, []);

  return (
    <>
      <Breadcrumbs category="Sustentabilidade" mainPage="Economia Circular" />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={"Economia Circular"} />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
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

      <Box sx={cardicondescription}>
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
