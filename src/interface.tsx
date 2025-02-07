export default interface worldData {
  flag: string;
  name: string;
  wiki: string;
  domain: string[];
  region: string[];
  bollard: string[];
  signs: {
    // TOADD: namesigns, rails
    outerBorder: boolean;
    stop: sign[];
    yield: sign[];
    pedestrianCrossing: sign[];
    chevron: sign[];
    railway: sign[];
  };
};

interface sign {
  pic: string;
  colors: string[];
  border: string | null;
};

// mall:
// {
//   domain: "",
//   name: "",
//   region: [],
//   flag: "",
//   chevron: [],
//   bollard: [],
//   sign: {
//       stop: [],
//       yield: [],
//       pedestrianCrossing: [],
//       railway: [],
//   }
// }