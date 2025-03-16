export interface AccordionDto {
  value: string;
  tabsLabel: string;
  accordions: Accordions[];
}

export interface Accordions {
  id: number;
  title: string;
  description: string;
  order: number;
  outsideAccordion: boolean;
}
