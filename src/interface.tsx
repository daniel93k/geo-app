export interface worldDataInterface {
  flag: string;
  name: string;
  googleMaps: boolean;
  domain: string;
  region: string[];
  sovereignTo?: string;
  bollard?: bollard[];
  snowPole?: snowPole[];
  signs?: {
    stop: sign[];
    speed: sign[];
    yield: sign[];
    pedestrianCrossing: sign[];
    chevron: sign[];
    railway?: sign[];
  };
};

interface snowPole {
  pic: string;
  colors?: string[];
}
interface bollard {
  pic: string;
  colors: string[];
  reflector: string[];
}

interface sign {
  pic: string;
  colors: string[];
  text?: string;
  border?: string;
};
export interface worldFormInterface {
  soverign: boolean;
  nonSoverign: boolean;
  googleMapsCoverage: boolean;
  nonGoogleMapsCoverage: boolean;
}