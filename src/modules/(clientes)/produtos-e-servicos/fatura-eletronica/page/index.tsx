"use client";

import {
  Breadcrumbs,
  CardIconDescription,
  ModalHTML,
  PaperLinks,
  RichText,
  TitleDescription,
} from "@/components";
import { Box } from "@mui/material";
import {
  CARDICONDESCRIPTION,
  PAPERLINKS,
  TITLEDESCRIPTION_PAPERLINKS,
  TITLEDESCRIPTION,
} from "../constants";
import { useEffect, useState } from "react";
import getRichText from "../services/getRichText";
import { RichTextProps } from "@/components/Typography/types";
import { paperlinks, paperlinks_box } from "./styles";
import {
  cardicondescription,
  cardicondescription_box,
} from "@/styles/CardIconDescription";
import { baseURLAzure } from "@/util/baseURL";

export const FaturaEletronicaPage = () => {
  const [richText, setRichText] = useState<RichTextProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", fileSrc: "" });

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
  }, []);

  return (
    <>
      <Breadcrumbs
        category={"Clientes"}
        mainPage="Produtos e serviços"
        URLmainPage="/clientes/produtos-e-servicos"
        subPage="Fatura Eletrónica"
      />

      <Box sx={{ pt: "80px" }}>
        <TitleDescription title={"Fatura Eletrónica"} description="" />
        <RichText richText={richText.length > 0 ? richText[0].richText : ""} />
      </Box>

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

      <Box sx={cardicondescription}>
        {TITLEDESCRIPTION.map((item, index) => (
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
