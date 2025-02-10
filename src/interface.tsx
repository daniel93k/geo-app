export default interface worldData {
  flag: string;
  name: string;
  sovereign: boolean;
  domain: string[];
  region: string[];
  bollard: string[];
  signs: {
    stop: sign[];
    speed: sign[];
    yield: sign[];
    pedestrianCrossing: sign[];
    chevron: sign[];
    railway?: sign[];
  };
};

interface sign {
  pic: string;
  colors: string[];
  text?: string;
  border?: string;
};
