import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Link, Typography } from "@mui/material";

import { ButtonActionIcon } from "../ButtonActionIcon/ButtonActionIcon";
import {
  containeraboutaction,
  containeraboutaction_description,
  containeraboutaction_email,
  containeraboutaction_font,
  containeraboutaction_title,
} from "./styles";
import { ContainerAboutActionProps } from "./types";

export const ContainerAboutAction = ({
  title,
  button,
  buttonHref,
  icon,
  isBackground,
  contacto,
  mailto,
  children,
  isDefault,
  downloadUrl,
}: ContainerAboutActionProps) => {
  return (
    <Box
      sx={{
        ...containeraboutaction,
        backgroundColor: isBackground ? PALETTE.GRAY_300 : PALETTE.WHITE,
      }}
    >
      <Typography sx={containeraboutaction_title}>{title}</Typography>
      <>
        {isDefault == false ? (
          <>
            <Box sx={containeraboutaction_description}>{children}</Box>
          </>
        ) : (
          <>
            <Box sx={containeraboutaction_description}>
              <Typography sx={containeraboutaction_font}>
                Contacte o nosso Call Center e esclareça as suas dúvidas.
              </Typography>
              <Typography sx={containeraboutaction_font}>
                Ligue para o <strong>{contacto}</strong> (chamada gratuita), ou
                envie um e-mail para{" "}
                <Link href={`mailto:${mailto}`} sx={containeraboutaction_email}>
                  {mailto}
                </Link>
                .
              </Typography>
            </Box>
          </>
        )}
        <ButtonActionIcon
          label={button}
          iconEnd={icon}
          href={buttonHref}
          downloadUrl={downloadUrl}
        ></ButtonActionIcon>
      </>
    </Box>
  );
};
