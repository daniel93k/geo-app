import {worldData} from "./worlddata/worlddata.tsx"
import {worldRegions, worldTableColumns} from "./worlddata/misc.tsx"

export interface worldDataInterface {
  name: string;
  capital: string[];
  domain: string;
  region: string[];
  flag: marker;
  coatOfArms?: string;
  sovereignTo?: string;
  onGoogleMaps: boolean;
  drivingSide: "right" | "left" | null;
  languages?: string[];
  links?: {
    location?: string;
    wikipedia: string;
    plonkit?: string;
    road_signs?: string;
  }

  bollard?: marker[];
  snowPole?: marker[];
  telePole?: marker[];
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
  middleColor?: string;
  middleStyle?: string;
  sideColor?: string;
  sideStyle?: string;
  emblem?: string;
  text?: string;
  border?: string;
  reflector?: string[];
  shape?: string[];
  continous?: boolean;
}
export interface languageFeaturesInterface {
  region: string[];
  alphabet: string[];
  alphabetFeatures?: string[];
  words: {
    road?: string[];
    mountain?: string[];
    river?: string[];
  }
}

export interface worldFormInterface {
  soverign: boolean;
  nonSoverign: boolean;
  onGoogleMaps: boolean;
  notOnGoogleMaps: boolean;
  driveRight: boolean;
  driveLeft: boolean;
  regionList: {[key: string]:boolean};
  languagesToShow: {[key: string]:boolean};
  flagEmblem: boolean;
  noFlagEmblem: boolean;
  flagColorsRestriction: string;
  flagColors: {[key: string]:boolean};
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
  driveRight: true,
  driveLeft: true,
  regionList: initRegionList(),
  languagesToShow: {english: false, spanish: false, french: false},
  coatOfArms: "",
  flagEmblem: true,
  noFlagEmblem: true,
  flagColorsRestriction: "contains",
  flagColors: {
    black: true,
    blue: true,
    brown: true,
    green: true,
    maroon: true,
    orange: true,
    red: true,
    white: true,
    yellow: true,
  }
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
