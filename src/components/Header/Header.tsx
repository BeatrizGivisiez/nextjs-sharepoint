"use client";

import Image from "next/image";
import { useState } from "react";

import Logo from "@/../public/img/logo.png";
import { FONTWEIGHT, PALETTE } from "@/app/theme/styles/constantes";
import {
  AppBar,
  Box,
  ClickAwayListener,
  Collapse,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import {
  ArrowRight,
  Briefcase,
  CaretLeft,
  CaretRight,
  ChatTeardropDots,
  List as ListIcon,
  MagnifyingGlass,
  User,
  X,
} from "@phosphor-icons/react";

import { HEADER } from "./constants";
import {
  ClientesHeaderLink,
  EDAHeaderLink,
  HeaderLink,
  MobileHeaderLink,
} from "./HeaderLink";
import {
  displayDesktop,
  displayMobile,
  header_appBar,
  header_button,
  header_drawer,
  header_drawerItems,
  header_extDescription,
  header_external,
  header_externalsWrapper,
  header_extLink,
  header_extTitle,
  header_handleHeader,
  header_icon,
  header_iconList,
  header_link,
  header_stacker,
  header_submenu,
  header_submenuColumn,
  header_submenuWrapper,
  header_toolbar,
  headerlink_link,
} from "./styles";

export const Header = () => {
  const trigger = useScrollTrigger();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isDrawerLinkClicked, setIsDrawerLinkClicked] =
    useState<boolean>(false);
  const [isCategoryClicked, setIsCategoryClicked] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubmenu, setIsExpandedSubmenu] = useState<string | null>(null);

  /* MOUSE HOVER FOR CATEGORY BUTTON YELLOW BORDER */
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);
  const handleMouseEnter = (boxIndex: string) => {
    setHoveredBox(boxIndex);
  };
  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  /* FUNCTION FOR CLICK OUTSIDE SUBMENU, HOVER ON LOGO AND CLICK ON A SUBMENU LINK */
  const handleClickAway = () => {
    setIsExpandedSubmenu(null);
    setHoveredBox(null);
  };

  /* FUNCTION FOR OPENING THE CORRECT SUBMENU */
  const handleSubmenu = (category: string) => {
    setIsExpandedSubmenu((prev) => (prev === category ? null : category));
    setHoveredBox(category);
  };

  /*OPENS AND CLOSES MOBILE DRAWER */
  const handleSideBar = () => {
    setIsSidebarOpen((oldValue) => !oldValue);
    if (expandedCategory) {
      setExpandedCategory(null);
    }
    setIsCategoryClicked(false);
    setIsDrawerLinkClicked(false);
  };

  /* FUNCTION THAT CHANGES BETWEEN CATEGORY TITLE (MOBILE) and LOGO */
  const handleHeader = () => {
    setIsDrawerLinkClicked((oldValue) => !oldValue);
    setIsCategoryClicked((oldValue) => !oldValue);
    setCurrentCategory((prev) => (prev ? null : prev));
    setExpandedCategory(null);
  };

  /* FUNCTION THAT CHANGES BETWEEN LOGO and CATEGORY TITLE (MOBILE) (TODO: MERGE HANDLEHEADER AND HANDLETOGGLE) */
  const handleToggle = (category: string) => {
    setIsDrawerLinkClicked((oldValue) => !oldValue);
    setIsCategoryClicked((oldValue) => !oldValue);
    setExpandedCategory((prev) => (prev === category ? null : category));
    setCurrentCategory((prev) => (prev === category ? null : category));
  };

  /* FUNCTION TO CLOSE DRAWER WHEN CLICKING A LINK */
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setIsCategoryClicked(false);
    setExpandedCategory(null);
    console.log("correu");
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Slide appear={false} direction="down" in={!trigger}>
          <Box sx={header_stacker}>
            <HeaderLink />
            <AppBar sx={header_appBar} onMouseLeave={handleClickAway}>
              <Container>
                <Toolbar disableGutters sx={header_toolbar}>
                  <Box sx={{ mr: 2 }}>
                    {isDrawerLinkClicked ? (
                      <Box sx={header_handleHeader}>
                        <IconButton
                          onClick={handleHeader}
                          color="inherit"
                          size="medium"
                        >
                          <CaretLeft size={24} color={PALETTE.BLACK} />
                        </IconButton>
                        <Typography
                          color={PALETTE.BLACK}
                          style={{
                            fontWeight: FONTWEIGHT.SEMI_BOLD,
                            fontSize: "1rem",
                          }}
                        >
                          {currentCategory}
                        </Typography>
                      </Box>
                    ) : (
                      <Link onMouseOver={handleClickAway} href="/">
                        <Image src={Logo} alt="logo EDA" width={60} />
                      </Link>
                    )}
                  </Box>
                  {/* Desktop */}

                  {/* BUTTONS LIST*/}
                  <Box sx={{ flexGrow: 1, ...displayDesktop, gap: 1 }}>
                    {HEADER.filter((i) => !i?.hiddenFromHeader).map((page) => (
                      <Box key={page.category}>
                        <ListItemButton
                          onClick={() => handleSubmenu(page.category)}
                          onMouseOver={() => handleSubmenu(page.category)}
                          onMouseEnter={() => handleMouseEnter(page.category)}
                          onMouseLeave={handleMouseLeave}
                          sx={header_button}
                          style={{
                            borderBottom:
                              hoveredBox === page.category
                                ? `3px solid ${PALETTE.PRIMARY_MAIN}`
                                : `3px solid transparent`,
                          }}
                        >
                          {page.category}
                        </ListItemButton>
                        <Collapse
                          in={expandedSubmenu === page.category}
                          timeout="auto"
                          unmountOnExit
                          onMouseEnter={() => handleMouseEnter(page.category)}
                          onMouseLeave={handleClickAway}
                        >
                          <Box sx={header_submenu}>
                            <Box sx={header_submenuWrapper}>
                              <List
                                component="div"
                                disablePadding
                                sx={header_submenuColumn}
                              >
                                {page.links.map((link) => (
                                  <Link
                                    key={link.text}
                                    href={link.url}
                                    onClick={handleClickAway}
                                    sx={headerlink_link}
                                  >
                                    <Typography
                                      sx={{ color: PALETTE.GRAY_700 }}
                                    >
                                      {link.text}
                                    </Typography>
                                    <ArrowRight
                                      size={20}
                                      color={PALETTE.SECONDARY_MAIN}
                                      weight="bold"
                                    />
                                  </Link>
                                ))}
                              </List>

                              {page.category == "EDA" ? (
                                //TODO: Transformar e um componente
                                <Box sx={header_externalsWrapper}>
                                  <Box sx={header_external}>
                                    <Briefcase
                                      size={36}
                                      color={PALETTE.SECONDARY_MAIN}
                                      weight="bold"
                                    />
                                    <Typography sx={header_extTitle}>
                                      Trabalhe Connosco
                                    </Typography>
                                    <Typography sx={header_extDescription}>
                                      Conheça as nossas vagas e candidate-se a
                                      trabalhar connosco.
                                    </Typography>
                                    <Box sx={header_extLink}>
                                      <Link
                                        href="https://career012.successfactors.eu/career?company=edaelectriP"
                                        target="_blank"
                                        sx={headerlink_link}
                                      >
                                        Saber mais
                                        <ArrowRight
                                          size={12}
                                          color={PALETTE.BLACK}
                                          weight="bold"
                                        />
                                      </Link>
                                    </Box>
                                  </Box>
                                </Box>
                              ) : null}

                              {page.category == "Clientes" ? (
                                <Box sx={header_externalsWrapper}>
                                  <Box sx={header_external}>
                                    <ChatTeardropDots
                                      size={36}
                                      color={PALETTE.SECONDARY_MAIN}
                                      weight="bold"
                                    />
                                    <Typography sx={header_extTitle}>
                                      Apoio ao Cliente
                                    </Typography>
                                    <Typography sx={header_extDescription}>
                                      Toda a informação que precisa para
                                      contactar a EDA.
                                    </Typography>
                                    <Box sx={header_extLink}>
                                      <Link
                                        href="/apoio-ao-cliente"
                                        sx={headerlink_link}
                                      >
                                        Saber mais
                                        <ArrowRight
                                          size={12}
                                          color={PALETTE.BLACK}
                                          weight="bold"
                                        />
                                      </Link>
                                    </Box>
                                  </Box>
                                  <Box sx={header_external}>
                                    <User
                                      size={36}
                                      color={PALETTE.SECONDARY_MAIN}
                                      weight="bold"
                                    />
                                    <Typography sx={header_extTitle}>
                                      Provedor do Cliente
                                    </Typography>
                                    <Typography sx={header_extDescription}>
                                      Defende direitos, entende necessidades e
                                      resolve queixas.
                                    </Typography>
                                    <Box sx={header_extLink}>
                                      <Link
                                        href="/provedor-do-cliente"
                                        sx={headerlink_link}
                                      >
                                        Saber mais
                                        <ArrowRight
                                          size={12}
                                          color={PALETTE.BLACK}
                                          weight="bold"
                                        />
                                      </Link>
                                    </Box>
                                  </Box>
                                </Box>
                              ) : null}
                            </Box>
                          </Box>
                        </Collapse>
                      </Box>
                    ))}
                  </Box>

                  {/* ICON BUTTONS */}
                  <Box sx={header_iconList}>
                    <Box sx={header_icon}>
                      <Link href="/pesquisa">
                        <MagnifyingGlass size={24} color={PALETTE.BLACK} />
                      </Link>
                    </Box>

                    <Box sx={displayMobile}>
                      <IconButton
                        onClick={handleSideBar}
                        color="inherit"
                        size="medium"
                        style={{ padding: "0", marginLeft: "25px" }}
                      >
                        {isSidebarOpen ? (
                          <X size={24} />
                        ) : (
                          <ListIcon size={24} />
                        )}
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Mobile */}
                  <Drawer
                    open={isSidebarOpen}
                    anchor="top"
                    hideBackdrop={true}
                    ModalProps={{ disableScrollLock: true }}
                    variant="persistent"
                    onClose={handleSideBar}
                    sx={header_drawer}
                  >
                    {isCategoryClicked ? (
                      <Box sx={header_drawerItems}>
                        {HEADER.filter((i) => !i?.hiddenFromHeader).map(
                          (page) => (
                            <Box
                              key={page.category}
                              style={{ marginBottom: "0px" }}
                            >
                              <ListItemButton
                                onClick={() => handleToggle(page.category)}
                              ></ListItemButton>

                              <Collapse
                                in={expandedCategory === page.category}
                                timeout="auto"
                                unmountOnExit
                              >
                                <List component="div" disablePadding>
                                  {page.links.map((link) => (
                                    <ListItemButton
                                      key={link.text}
                                      sx={header_link}
                                    >
                                      <Link href={link.url}>
                                        <Typography>{link.text}</Typography>
                                      </Link>
                                    </ListItemButton>
                                  ))}
                                </List>
                              </Collapse>
                            </Box>
                          )
                        )}
                      </Box>
                    ) : (
                      <Box sx={header_drawerItems}>
                        {HEADER.filter((i) => !i?.hiddenFromHeader).map(
                          (page) => (
                            <Box
                              key={page.category}
                              style={{ marginBottom: "15px" }}
                            >
                              <ListItemButton
                                onClick={() => handleToggle(page.category)}
                              >
                                <Typography sx={header_button}>
                                  {page.category}
                                </Typography>
                                <CaretRight size={20} />
                              </ListItemButton>

                              <Collapse
                                in={expandedCategory === page.category}
                                timeout="auto"
                                unmountOnExit
                              >
                                <List component="div" disablePadding>
                                  {page.links.map((link) => (
                                    <ListItemButton
                                      key={link.text}
                                      sx={header_link}
                                    >
                                      <Link
                                        href={link.url}
                                        onClick={handleLinkClick}
                                      >
                                        <Typography>{link.text}</Typography>
                                      </Link>
                                    </ListItemButton>
                                  ))}
                                </List>
                              </Collapse>
                            </Box>
                          )
                        )}
                      </Box>
                    )}
                    {expandedCategory == "EDA" ? <EDAHeaderLink /> : null}
                    {expandedCategory == "Clientes" ? (
                      <ClientesHeaderLink />
                    ) : null}
                    {expandedCategory == null ? <MobileHeaderLink /> : null}
                  </Drawer>
                </Toolbar>
              </Container>
            </AppBar>
          </Box>
        </Slide>
      </ClickAwayListener>
    </>
  );
};
