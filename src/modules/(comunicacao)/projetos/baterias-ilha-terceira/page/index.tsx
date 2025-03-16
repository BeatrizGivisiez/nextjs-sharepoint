"use client";
import { Breadcrumbs } from "@/components";
import Image from "next/image";
import IlhaTerceira from "@/../public/img/comunicacao/acores2020-ilha-terceira.png";
import { Box } from "@mui/material";
import { box, container } from "./styles";

export const BateriasIlhaTerceiraPage = () => {
  return (
    <>
      <Breadcrumbs
        category={"Projetos"}
        URLcategory="/comunicacao/projetos"
        mainPage="Açores 2020"
        subPage="BESS Terceira"
      />

      <Box sx={box}>
        <Box sx={container}>
          <Image
            src={IlhaTerceira}
            alt="Ilha Terceira"
            width={900}
            layout="responsive"
          />
        </Box>
      </Box>
    </>
  );
};
