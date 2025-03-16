"use client";

import Image from "next/image";

import LogoEDA from "@/../public/img/LogoEDA.svg";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FacebookLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";

import { FOOTERCONTACTOS, FOOTERCOPYRIGHT, FOOTERLINKS } from "./constants";
import { FooterEmail } from "./FooterEmail";
import { FooterIcon } from "./FooterIcon";
import {
  footer,
  footer_accordion,
  footer_accordionContainer,
  footer_accordionSummary,
  footer_accordionTitle,
  footer_copyrights,
  footer_desktopContainer,
  footer_link,
  footer_link_content,
  footer_links_column,
  footer_logo,
  footer_mobileContainer,
  footer_redes,
  footer_subtitle,
  footer_title,
} from "./styles";

interface FooterProps {
  openNewTab?: boolean;
}

export const Footer = ({ openNewTab }: FooterProps) => {
  return (
    <footer>
      <Box sx={footer}>
        <Container sx={footer_desktopContainer}>
          <Link href="/">
            <Image src={LogoEDA} alt="logo EDA" width={140} height={69} />
          </Link>

          {FOOTERLINKS.map((section, index) => (
            <Grid item xs={12} key={index} sx={footer_links_column}>
              <Typography sx={footer_title}>{section.title}</Typography>
              {section.links.map((link, linkIndex) => (
                <Typography variant="subtitle1" key={linkIndex}>
                  <Link
                    href={link.url}
                    sx={footer_link}
                    target={link.openNewTab ? "_blank" : ""}
                  >
                    {link.text}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}

          {FOOTERCONTACTOS.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Typography sx={footer_title}>{section.title}</Typography>

              {/* Morada */}
              {section.adress.map((link, linkIndex) => (
                <Grid container direction="row" key={linkIndex}>
                  <Typography
                    sx={footer_subtitle}
                    variant="subtitle1"
                    key={linkIndex}
                  >
                    {link.name}
                    <Typography sx={footer_link_content}>
                      {link.content}
                    </Typography>
                  </Typography>
                </Grid>
              ))}

              {/* Telefone */}
              {section.phone.map((link, linkIndex) => (
                <Grid container direction="row" key={linkIndex}>
                  <Typography
                    sx={footer_subtitle}
                    variant="subtitle1"
                    key={linkIndex}
                  >
                    {link.name}
                    <Typography sx={footer_link_content}>
                      {link.content}
                    </Typography>
                  </Typography>
                </Grid>
              ))}

              {/* E-mail */}
              {section.email.map((link, linkIndex) => (
                <Grid container direction="row" key={linkIndex}>
                  <Typography
                    sx={footer_subtitle}
                    variant="subtitle1"
                    key={linkIndex}
                  >
                    {link.name}{" "}
                    <FooterEmail
                      label={link.content}
                      mailto={`mailto:${link.content}`}
                    />
                  </Typography>
                </Grid>
              ))}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography sx={footer_title}>Redes Sociais</Typography>
            <Typography sx={footer_redes}>
              <LinkedinLogo
                size={24}
                color={PALETTE.WHITE}
                weight="fill"
                onClick={() =>
                  window.open(
                    "https://pt.linkedin.com/company/eda-acores",
                    "_blank"
                  )
                }
              />
              <FacebookLogo
                size={24}
                color={PALETTE.WHITE}
                weight="fill"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/eda.electricidadedosacores/",
                    "_blank"
                  )
                }
              />
              <YoutubeLogo
                size={24}
                color={PALETTE.WHITE}
                weight="fill"
                onClick={() =>
                  window.open("https://www.youtube.com/@EDA-Acores", "_blank")
                }
              />
            </Typography>
          </Grid>
        </Container>

        <Container sx={footer_mobileContainer}>
          <Link href="/">
            <Box sx={footer_logo}>
              <Image src={LogoEDA} alt="logo EDA" width={140} height={69} />
            </Box>
          </Link>

          <Container sx={footer_accordionContainer}>
            {FOOTERLINKS.map((section, index) => (
              <Accordion key={index} sx={footer_accordion}>
                <AccordionSummary
                  sx={footer_accordionSummary}
                  expandIcon={<FooterIcon />}
                >
                  <Typography sx={footer_accordionTitle}>
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {section.links.map((link, linkIndex) => (
                    <Typography variant="subtitle1" key={linkIndex}>
                      <Link href={link.url} sx={footer_link}>
                        {link.text}
                      </Link>
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}

            {FOOTERCONTACTOS.map((section, index) => (
              <Accordion key={index} sx={footer_accordion}>
                <AccordionSummary
                  sx={footer_accordionSummary}
                  expandIcon={<FooterIcon />}
                >
                  <Typography sx={footer_accordionTitle}>
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Morada */}
                  {section.adress.map((link, linkIndex) => (
                    <Typography
                      sx={footer_subtitle}
                      variant="subtitle1"
                      key={linkIndex}
                    >
                      {link.name}
                      <Typography sx={footer_link_content}>
                        {link.content}
                      </Typography>
                    </Typography>
                  ))}
                  {/* Telefone */}
                  {section.phone.map((link, linkIndex) => (
                    <Grid container direction="row" key={linkIndex}>
                      <Typography
                        sx={footer_subtitle}
                        variant="subtitle1"
                        key={linkIndex}
                      >
                        {link.name}
                        <Typography sx={footer_link_content}>
                          {link.content}
                        </Typography>
                      </Typography>
                    </Grid>
                  ))}
                  {/* E-mail */}
                  {section.email.map((link, linkIndex) => (
                    <Grid container direction="row" key={linkIndex}>
                      <Typography
                        sx={footer_subtitle}
                        variant="subtitle1"
                        key={linkIndex}
                      >
                        {link.name}{" "}
                        <FooterEmail
                          label={link.content}
                          mailto={`mailto:${link.content}`}
                        />
                      </Typography>
                    </Grid>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>

          <Grid item xs={12}>
            <Typography sx={footer_redes}>
              <LinkedinLogo
                size={24}
                color={PALETTE.WHITE}
                weight="fill"
                onClick={() =>
                  window.open(
                    "https://pt.linkedin.com/company/eda-acores",
                    "_blank"
                  )
                }
              />
              <FacebookLogo
                size={24}
                color={PALETTE.WHITE}
                weight="fill"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/eda.electricidadedosacores/",
                    "_blank"
                  )
                }
              />
              <YoutubeLogo
                size={24}
                color={PALETTE.WHITE}
                weight="fill"
                onClick={() =>
                  window.open("https://www.youtube.com/@EDA-Acores", "_blank")
                }
              />
            </Typography>
          </Grid>
        </Container>

        <Container sx={footer_copyrights}>
          <Typography variant="subtitle1" sx={footer_link}>
            {FOOTERCOPYRIGHT.message}
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};
