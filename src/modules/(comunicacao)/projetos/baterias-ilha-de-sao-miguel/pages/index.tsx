"use client";
import { Breadcrumbs } from "@/components";
import Image from "next/image";
import SaoMiguel from "@/../public/img/comunicacao/acores2020-sao-miguel.jpg";
import { Box } from "@mui/material";
import { box, container } from "./styles";

export const BateriasIlhaDeSaoMiguelPage = () => {
  return (
    <>
      <Breadcrumbs
        category={"Projetos"}
        URLcategory="/comunicacao/projetos"
        mainPage="Açores 2020"
        subPage="BESS São Miguel"
      />

      <Box sx={box}>
        <Box sx={container}>
          <Image
            src={SaoMiguel}
            alt="Ilha de São Miguel"
            width={900}
            layout="responsive"
          />
        </Box>
      </Box>
    </>
  );
};
