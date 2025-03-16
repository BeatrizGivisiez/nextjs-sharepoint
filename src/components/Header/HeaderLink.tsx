"use client";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import {
  ArrowRight,
  Browser,
  Buildings,
  ChatTeardropDots,
  Storefront,
  User,
  UserCircle,
} from "@phosphor-icons/react";

import {
  header_extDescription,
  header_external,
  header_externalsWrapper,
  header_extTitle,
  headerlink,
  headerlink_button,
  headerlink_container,
  headerlink_link,
  headerlink_mobile,
  mobileheaderlink_button,
  mobileheaderlink_font,
} from "./styles";

export const HeaderLink = () => {
  return (
    <Box sx={headerlink}>
      <Container sx={headerlink_container}>
        <Button sx={headerlink_button} href="/grupo-eda">
          <Buildings size={18} color={PALETTE.BLACK} />
          <Typography>Grupo EDA</Typography>
        </Button>
        <Button sx={headerlink_button} href="/lojas-e-agentes">
          <Storefront size={18} color={PALETTE.BLACK} />
          <Typography>Lojas e Agentes</Typography>
        </Button>
        <Button sx={{ ...headerlink_button, mr: 5, display: "none" }}>
          <UserCircle size={18} color={PALETTE.BLACK} />
          <Typography>EDAOnline</Typography>
        </Button>
      </Container>
    </Box>
  );
};

export const MobileHeaderLink = () => {
  return (
    <Box sx={headerlink_mobile}>
      <Button sx={mobileheaderlink_button} href="/grupo-eda">
        <Buildings size={18} color={PALETTE.BLACK} />
        <Typography sx={mobileheaderlink_font}>Grupo EDA</Typography>
      </Button>
      <Button sx={mobileheaderlink_button} href="/lojas-e-agentes">
        <Storefront size={18} color={PALETTE.BLACK} />
        <Typography sx={mobileheaderlink_font}>Lojas e agentes</Typography>
      </Button>
      <Button sx={mobileheaderlink_button}>
        <Browser size={18} color={PALETTE.BLACK} href="/grupo-eda" />
        <Typography sx={mobileheaderlink_font}>EDAOnline</Typography>
      </Button>
    </Box>
  );
};

export const EDAHeaderLink = () => {
  return (
    <Box sx={headerlink_mobile}>
      <Box sx={header_externalsWrapper}>
        <Box sx={header_external}>
          <UserCircle size={30} color={PALETTE.SECONDARY_MAIN} weight="bold" />
          <Typography sx={header_extTitle}>Conheça a EDAOnline</Typography>
          <Typography sx={header_extDescription}>
            Lorem Ipsum lorem lorem ipsum lorem ipsum yeah
          </Typography>
          <Link href="#" sx={headerlink_link}>
            Saber mais
            <ArrowRight size={12} color={PALETTE.BLACK} weight="bold" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export const ClientesHeaderLink = () => {
  return (
    <Box sx={headerlink_mobile}>
      <Box sx={header_externalsWrapper}>
        <Box sx={header_external}>
          <ChatTeardropDots
            size={30}
            color={PALETTE.SECONDARY_MAIN}
            weight="bold"
          />
          <Typography sx={header_extTitle}>Apoio ao Cliente</Typography>
          <Typography sx={header_extDescription}>
            Toda a informação que precisa para contactar a EDA.
          </Typography>
          <Link href="/apoio-ao-cliente" sx={headerlink_link}>
            Saber mais
            <ArrowRight size={12} color={PALETTE.BLACK} weight="bold" />
          </Link>
        </Box>
        <Box sx={header_external}>
          <User size={30} color={PALETTE.SECONDARY_MAIN} weight="bold" />
          <Typography sx={header_extTitle}>Provedor do Cliente</Typography>
          <Typography sx={header_extDescription}>
            Defende direitos, entende necessidades e resolve queixas.
          </Typography>
          <Link href="/provedor-do-cliente" sx={headerlink_link}>
            Saber mais
            <ArrowRight size={12} color={PALETTE.BLACK} weight="bold" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
