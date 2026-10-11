export type UserRegion = 'CENTRE' | 'LITTORAL' | 'OUEST' | 'SUD_OUEST';

export interface RegionOption {
  value: UserRegion;
  labelKey: string;
  citiesKey: string;
}

export const USER_REGION_OPTIONS: RegionOption[] = [
  {
    value: 'CENTRE',
    labelKey: 'REGION_PICKER.CENTRE',
    citiesKey: 'REGION_PICKER.CENTRE_CITIES',
  },
  {
    value: 'LITTORAL',
    labelKey: 'REGION_PICKER.LITTORAL',
    citiesKey: 'REGION_PICKER.LITTORAL_CITIES',
  },
  {
    value: 'OUEST',
    labelKey: 'REGION_PICKER.OUEST',
    citiesKey: 'REGION_PICKER.OUEST_CITIES',
  },
  {
    value: 'SUD_OUEST',
    labelKey: 'REGION_PICKER.SUD_OUEST',
    citiesKey: 'REGION_PICKER.SUD_OUEST_CITIES',
  },
];