import {worldData} from "./worlddata/worlddata.tsx"
import {worldRegions, worldTableColumns} from "./worlddata/misc.tsx"

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
  links?: {
    location?: string;
    wikipedia: string;
    road_signs?: string;
  }
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
  signRoads?: marker[];
};

interface marker {
  pic: string;
  proportions?: string; // y:x
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
  regionList: {[key: string]:boolean};
}

export interface domainListInterface {
  [key: string]:boolean;
}

export interface worldColumnInterface {
  [key:string]: boolean;
}

export const initWorldForm = {
  soverign: true,
  nonSoverign: true,
  onGoogleMaps: true,
  notOnGoogleMaps: false,
  regionList: initRegionList(),
}

export function initDomainList() {
  const ret:{[key: string]:boolean} = {}
  for (const element of worldData) {
    ret[element.domain] = false
  }
  const data = worldData.filter((item) => item.onGoogleMaps === true)
  for (const element of data) {
    ret[element.domain] = true
  }
  return ret
}
function initRegionList() {
  const ret:{[key: string]:boolean} = {}
  for(const element of worldRegions) {
    for(const reg of element) {
      if(reg === "Europe" ||
         reg === "Asia" ||
         reg === "Africa" ||
         reg === "South America" ||
         reg === "North America" ||
         reg === "Oceania" ||
         reg === "Antarctica"
      )
        ret[reg] = true
      else ret[reg] = false
    }
  }
  return ret
}
export function initWorldColumns() {
  const ret:{[key: string]:boolean} = {}
  for(const element of worldTableColumns) {
    ret[element] = true
  }
  return ret
}
