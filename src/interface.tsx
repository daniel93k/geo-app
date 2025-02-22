export interface worldDataInterface {
  flag: string;
  name: string;
  sovereignTo?: string;
  domain: string;
  region: string[];
  bollard?: bollard[];
  signs: {
    stop: sign[];
    speed: sign[];
    yield: sign[];
    pedestrianCrossing: sign[];
    chevron: sign[];
    railway?: sign[];
  };
};

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
}