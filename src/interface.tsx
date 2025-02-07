export default interface worldData {
  domain: string;
  name: string;
  region: string[];
  flag: string;
  chevron: string[];
  bollard: string[];
  sign: {
      stop: string[];
      yield: string[];
      pedestrianCrossing: string[];
      railway: string[];
  }
}

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