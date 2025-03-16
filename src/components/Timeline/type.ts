export interface TimelinePaginationProps {
  timelineData: TimelineDataItem[];
}

export interface TimelineDataItem {
  id: number;
  description: string;
  year: string;
}

export interface TimelinePaginationItemProps {
  description: string;
}
