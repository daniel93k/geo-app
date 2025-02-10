export default interface worldData {
  flag: string;
  name: string;
  sovereign: boolean;
  domain: string[];
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
