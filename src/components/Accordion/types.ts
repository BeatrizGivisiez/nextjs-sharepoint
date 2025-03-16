export interface AccordionResponse {
  value: string;
  tabsLabel: string;
  accordions: AccordionProps[];
}
export interface AccordionProps {
  id?: string;
  title: string;
  description: string;
  outsideAccordion?: boolean;
  borderBottom?: boolean;
}

export interface AccordionTextProps {
  title?: string;
  description: string;
}
