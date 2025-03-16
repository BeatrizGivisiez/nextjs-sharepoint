interface LocationDto {
  id: string;
  name: string;
  childTerms: string[];
}

interface PowerInterruptionDto {
  title: string;
  locations: LocationDto[];
  place: string;
  beginDate: string; // pode usar Date se fizer a conversão
  endDate: string; // pode usar Date se fizer a conversão
  interruptionTimes: string;
  latitude: string;
  longitude: string;
  interruptionReason: string;
  processed: boolean;
  street: string;
  interruptionType: string;
}
