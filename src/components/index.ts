"use client";

import dynamic from "next/dynamic";

export { Banner } from "./Banner/Banner";
export { BannerTitle } from "./Banner/BannerTitle";
export { Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";
export { ButtonActionIcon } from "./ButtonActionIcon/ButtonActionIcon";
export { CardIconDescription } from "./Card/CardIconDescription";
export { CardNews } from "./Card/CardNews";
export { CardOffers } from "./Card/CardOffers";
export { Carousel } from "./Carousel/Carousel";
export { ContainerAboutAction } from "./Container/ContainerAboutAction";
export { DescriptionNews } from "./DescriptionNews/DescriptionNews";
export { DownloadApp } from "./DownloadApp/DownloadApp";
export { Footer } from "./Footer/Footer";
export { GalleryImageButton } from "./Gallery/GalleryImageButton";
export { Header } from "./Header/Header";
export { IconInformative } from "./Informative/IconInformative";
export { IconInfor } from "./Informative/IconInfor";
export { ImageRow } from "./ImageRow/ImageRow";
export { InfoImageActionButton } from "./InfoImageActionButton/InfoImageActionButton";
export { Loading } from "./Loading/Loading";
export { Links } from "./Links/Links";
export { Organograma } from "./Organograma/Organograma";
export { PaperAnexoDownload } from "./Paper/PaperAnexoDownload";
export { PaperLinks } from "./Paper/PaperLinks";
export { PaperPathFile } from "./Paper/PaperPathFile";
export { RecommendedNews } from "./RecommendedNews/RecommendedNews";
export { StepVerticalInformative } from "./Step/StepVerticalInformative";
export { Tabs } from "./Tabs/Tabs";
export { TabsGalleryDownload } from "./Tabs/TabsGalleryDownload";
export { TextDescription } from "./Typography/TextDescription";
export { TextParagraph } from "./Typography/TextParagraph";
export { TimelinePagination } from "./Timeline/TimelinePagination";
export { TitleDescription } from "./Typography/TitleDescription";
export { TopicImage } from "./TopicImage/TopicImage";
export { FormPedidosESugestoes } from "./Form/FormPedidosESugestoes";
export { FormVisitasDeEstudo } from "./Form/FormVisitasDeEstudo";
export { PowerBI } from "./PowerBI/PowerBI";
export { RichText } from "./Typography/RichText";
export { TreeFiles } from "./Paper/TreeFiles";
export { Accordion } from "./Accordion/Accordion";
export { AccordionText } from "./Accordion/AccordionText";
export { FormTextField } from "./Form/FormTextField";
export { FormTextField_Email } from "./Form/FormTextField";
export { FormTextField_Multiline } from "./Form/FormTextField";
export { FormTextField_Number } from "./Form/FormTextField";
export { FormTextField_CodigoPostal } from "./Form/FormTextField";
export { Multimedia } from "./Multimedia/Multimedia";
export { GoogleAnalytics } from "./GoogleAnalytics/GoogleAnalytics";
export { ButtonMaps } from "./Maps/ButtonMaps";
export { PaperPesquisa } from "./Paper/PaperPesquisa";
export { ModalHTML } from "./Modal/ModalHTML";

export { InterruptionForm } from "./Maps/Interruption/InterruptionForm";
export { InterruptionList } from "./Maps/Interruption/InterruptionList";
export { InterruptionItem } from "./Maps/Interruption/InterruptionItem";
export { InterruptionView } from "./Maps/Interruption/InterruptionView";

export { DistributionForm } from "./Maps/Distribution/DistributionForm";
export { DistributionList } from "./Maps/Distribution/DistributionList";
export { DistributionView } from "./Maps/Distribution/DistributionView";

export { ProductionForm } from "./Maps/Production/ProductionForm";
export { ProductionList } from "./Maps/Production/ProductionList";
export { ProductionView } from "./Maps/Production/ProductionView";

export { CommercializationForm } from "./Maps/Commercialization/CommercializationForm";
export { CommercializationList } from "./Maps/Commercialization/CommercializationList";
export { CommercializationView } from "./Maps/Commercialization/CommercializationView";

export const GalleryLeaflets = dynamic(
  () => import("./Gallery/GalleryLeaflets"),
  { ssr: false }
);

export const InterruptionLeaflet = dynamic(
  () => import("./Maps/Interruption/InterruptionLeaflet"),
  { ssr: false }
);
export const CommercializationLeaflet = dynamic(
  () => import("./Maps/Commercialization/CommercializationLeaflet"),
  { ssr: false }
);
export const ProductionLeaflet = dynamic(
  () => import("./Maps/Production/ProductionLeaflet"),
  { ssr: false }
);
export const DistributionLeaflet = dynamic(
  () => import("./Maps/Distribution/DistributionLeaflet"),
  { ssr: false }
);

export const InterruptionPopup = dynamic(
  () => import("./Maps/Interruption/InterruptionPopup"),
  { ssr: false }
);
export const CommercializationPopup = dynamic(
  () => import("./Maps/Commercialization/CommercializationPopup"),
  { ssr: false }
);
export const ProductionPopup = dynamic(
  () => import("./Maps/Production/ProductionPopup"),
  { ssr: false }
);
export const DistributionPopup = dynamic(
  () => import("./Maps/Distribution/DistributionPopup"),
  { ssr: false }
);
