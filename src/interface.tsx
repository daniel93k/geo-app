export interface worldDataInterface {
  name: string;
  capital: string[];
  domain: string;
  region: string[];
  flag: marker;

  sovereignTo?: string;
  onGoogleMaps: boolean;
  drivingSide: "right" | "left" | null;
  languages?: string[];
  commonWords?: commonWords;

  bollard?: marker[];
  poleSnow?: marker[];
  poleTele?: marker[];
  roadMarkings?: marker[];
  regPlate?: marker[];
  signSpeed?: marker[];
  signStop?: marker[];
  signYield?: marker[];
  signPedestrianCrossing?: marker[];
  signChevron?: marker[];
  signRailway?: marker[];
};

interface marker {
  pic: string;
  proportions?: string; // x:y
  colors?: string[];
  emblem?: string;
  text?: string;
  border?: string;
  reflector?: string[];
  shape?: string[];
  continous?: boolean;
}
interface commonWords {
  "road"?: string;
  "mountain"?: string;
  "river"?: string;
}

export interface worldFormInterface {
  soverign: boolean;
  nonSoverign: boolean;
  onGoogleMaps: boolean;
  notOnGoogleMaps: boolean;
}

export const worldFormInit = {
  soverign: true,
  nonSoverign: true,
  onGoogleMaps: true,
  notOnGoogleMaps: false,
}