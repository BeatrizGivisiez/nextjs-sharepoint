"use client";

import { Box } from "@mui/material";
import { Breadcrumbs, TitleDescription } from "@/components";
import { TITLEDESCRIPTION } from "../constants";
import { useEffect, useState } from "react";
import { IFile } from "@/components/Paper/types";
import getDocumentLibrary from "../services/getDocumentLibrary";
import PaperAnexoDownload_Global from "@/components/Paper/PaperAnexoDownload_Global";

export const RelatoriosAnterioresPage = () => {
  const [documentLibrary, setDocumentLibrary] = useState<IFile[]>([]);
  const [hasTabsPAD, setHasTabsPAD] = useState<boolean>(false);

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
  }, []);

  return (
    <Box>
      <Breadcrumbs
        category="Regulação"
        mainPage="Regulamentos"
        URLmainPage="/regulacao/regulamentos"
        subPage="Regulamentos Da Qualidade De Serviço"
      />

      <Box sx={{ pt: "80px", pb: "50px" }}>
        {TITLEDESCRIPTION.map((item, index) => (
          <TitleDescription
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}

        <PaperAnexoDownload_Global
          hasTabsPAD={hasTabsPAD}
          documentLibrary={documentLibrary}
        />
      </Box>
    </Box>
  );
};
