// const base = "https://danikaru.se/geodata/"
const base = "worldpics/"
import worldInterface from "../interface.tsx"

export const signLength = 4
export const signWords = ["stop","yield","pedestrianCrossong", "railway"]

export const worldData:worldInterface[] = [
  {
    domain: "ax",
    name: "Åland",
    region: ["Europe", "Nordic"],
    flag: base + "ax_flag.svg",
    chevron: [base + "se_chevron.png"],
    bollard: [base + "se_bollard.jpg"],
    sign: {
      stop: [base + "se_sign-stop.png"],
      yield: [base + "se_sign-yield.png"],
      pedestrianCrossing: [base + "se_sign-crossing.png"],
      railway: [base + "se_sigh-railway.png"],
    },
  },
  {
    domain: "dk",
    name: "Denmark",
    region: ["Europe", "Nordic"],
    flag: base + "dk_flag.svg",
    chevron: [base + "se_chevron.png"],
    bollard: [base + "se_bollard.jpg"],
    sign: {
      stop: [base + "se_sign-stop.png"],
      yield: [base + "se_sign-yield.png"],
      pedestrianCrossing: [base + "se_sign-crossing.png"],
      railway: [base + "se_sigh-railway.png"],
    },
  },
  {
    domain: "fi",
    name: "Finland",
    region: ["Europe", "Nordic"],
    flag: base + "fi_flag.svg",
    chevron: [base + "se/se_chevron.png",base + "se/se_chevron.png"],
    bollard: [base + "se_bollard.jpg"],
    sign: {
      stop: [base + "se_sign-stop.png"],
      yield: [base + "se_sign-yield.png"],
      pedestrianCrossing: [base + "se_sign-crossing.png"],
      railway: [base + "se_sigh-railway.png"],
    },
  },
  {
    domain: "fo",
    name: "Faroe Islands",
    region: ["Europe", "Nordic"],
    flag: base + "fo.svg",
    chevron: [base + "se_chevron.png"],
    bollard: [base + "se_bollard.jpg"],
    sign: {
      stop: [base + "se_sign-stop.png"],
      yield: [base + "se_sign-yield.png"],
      pedestrianCrossing: [base + "se_sign-crossing.png"],
      railway: [base + "se_sigh-railway.png"],
    },
  },
  {
    domain: "is",
    name: "Iceland",
    region: ["Europe", "Nordic"],
    flag: base + "is_flag.svg",
    chevron: [base + "se_chevron.png"],
    bollard: [base + "se_bollard.jpg"],
    sign: {
      stop: [base + "se_sign-stop.png"],
      yield: [base + "se_sign-yield.png"],
      pedestrianCrossing: [base + "se_sign-crossing.png"],
      railway: [base + "se_sigh-railway.png"],
    },
  },
  {
    domain: "no",
    name: "Norway",
    region: ["Europe", "Nordic"],
    flag: base + "no_flag.svg", 
    chevron: [base + "se_chevron.png"],
    bollard: [base + "se_bollard.jpg"],
    sign: {
      stop: [base + "se_sign-stop.png"],
      yield: [base + "se_sign-yield.png"],
      pedestrianCrossing: [base + "se_sign-crossing.png"],
      railway: [base + "se_sigh-railway.png"],
    },
  },
  {
    domain: "se",
    name: "Sweden",
    region: ["Europe", "Nordic"],
    flag: base + "se/se_flag.svg",
    chevron: [base + "se/se_chevron.png"],
    bollard: [base + "se/se_bollard.jpg"],
    sign: {
      stop: [base + "se/se_sign-stop.png"],
      yield: [base + "se/se_sign-yield.png"],
      pedestrianCrossing: [base + "se/se_sign-crossing.png"],
      railway: [base + "se/se_sign-railway.png"],
    },
  },
]
