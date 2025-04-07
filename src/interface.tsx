export interface worldDataInterface {
  name: string;
  domain: string;
  region: string[];
  flag: marker;

  sovereignTo?: string;
  onGoogleMaps: boolean;
  drivingSide: "right" | "left";
  languages?: string[];
  commonWords?: commonWords;

  bollard?: marker[];
  poleSnow?: marker[];
  poleTele?: marker[];
  roadMarkings?: marker[];
  regPlate?: marker[];
  signStop?: marker[];
  signSpeed?: marker[];
  signYield?: marker[];
  signPedestrianCrossing?: marker[];
  signChevron?: marker[];
  signRailway?: marker[];
  signRoad?: marker[];
};

interface marker {
  pic: string;
  colors?: string[];
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
  googleMapsCoverage: boolean;
  nonGoogleMapsCoverage: boolean;
}