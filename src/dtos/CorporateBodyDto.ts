export interface CorporateBodyDto {
  corporateCategories: CorporateCategory[];
}

export interface CorporateCategory {
  value: string;
  tabsLabel: string;
  members: Member[];
}

export interface Member {
  id: number;
  jobTitle: string;
  name: string;
  photo: string;
  cv: string | undefined;
}
