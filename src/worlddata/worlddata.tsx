// const base = "https://danikaru.se/geodata/"
const base = "worldpics/"
import worldInterface from "../interface.tsx"


export const worldData: worldInterface[] = [
  {
    flag: base + "ax/ax_flag.svg",
    name: "Åland",
    sovereign: false,
    domain: ["ax"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      speed: [
        {
          pic: base + "fi/fi_sign-speed.svg",
          colors: ["black","yellow", "red"],
          border: "yellow",
        },
      ],
      stop: [
        {
          pic: base + "fi/fi_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "stop",
        },
      ],
      yield: [
        {
          pic: base + "fi/fi_sign-yield.svg",
          colors: ["yellow", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "fi/fi_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "fi/fi_sign-chevron.jpg",
          colors: ["yellow", "black"],
        },
      ],
    },
  },
  {
    flag: base + "dk/dk_flag.svg",
    name: "Denmark",
    sovereign: true,
    domain: ["dk"],
    region: ["Europe", "Nordic"],
    bollard: [base + "dk_bollard.jpg"],
    signs: {
      speed: [
        {
          pic: base + "dk/dk_sign-speed.svg",
          colors: ["black","white", "red"],
          text: "Number",
        },
      ],
      stop: [
        {
          pic: base + "dk/dk_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "STOP",
        },
      ],
      yield: [
        {
          pic: base + "dk/dk_sign-yield.svg",
          colors: ["white", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "dk/dk_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "dk/dk.svg",
          colors: ["yellow", "black"],
        },
      ],
      railway: [
        {
          pic: base + "dk/dk_sign-railway.webp",
          colors: ["red", "white"],
        }
      ],
    },
  },
  {
    flag: base + "fi/fi_flag.svg",
    name: "Finland",
    sovereign: true,
    domain: ["fi"],
    region: ["Europe", "Nordic"],
    bollard: [base + "fi_bollard.jpg"],
    signs: {
      speed: [
        {
          pic: base + "fi/fi_sign-speed.svg",
          colors: ["black","yellow", "red"],
          border: "yellow",
        },
      ],
      stop: [
        {
          pic: base + "fi/fi_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "stop",
        },
      ],
      yield: [
        {
          pic: base + "fi/fi_sign-yield.svg",
          colors: ["yellow", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "fi/fi_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "fi/fi_sign-chevron.jpg",
          colors: ["yellow", "black"],
        },
      ],
      railway: [
        {
          pic: base + "fi/fi_sign-railway.svg",
          colors: ["yellow"],
          border: "red"
        }
      ],
    },
  },
  {
    flag: base + "fo/fo_flag.svg",
    name: "Faroe Islands",
    sovereign: false,
    domain: ["fo"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      speed: [
        {
          pic: base + "dk/dk_sign-speed.svg",
          colors: ["black","white", "red"],
          text: "Number",
        },
      ],
      stop: [
        {
          pic: base + "dk/dk_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "STOP",
        },
      ],
      yield: [
        {
          pic: base + "dk/dk_sign-yield.svg",
          colors: ["white", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "dk/dk_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_chevron.svg",
          colors: ["yellow", "black"],
        },
      ],
    },
  },
  {
    flag: base + "gl/gl_flag.svg",
    name: "Greenland",
    sovereign: false,
    domain: ["gl"],
    region: ["Europe", "Nordic"],
    bollard: [base + "gl/gl.jpg"],
    signs: {
      speed: [
        {
          pic: base + "dk/dk_sign-speed.svg",
          colors: ["black","white", "red"],
          text: "Number",
        },
      ],
      stop: [
        {
          pic: base + "dk/dk_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "STOP",
        },
      ],
      yield: [
        {
          pic: base + "dk/dk_sign-yield.svg",
          colors: ["white", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "dk/dk_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "gl/gl-chevron.svg",
          colors: ["yellow", "black"],
        },
      ],
    },
  },
  {
    flag: base + "is/is_flag.svg",
    name: "Iceland",
    sovereign: true,
    domain: ["is"],
    region: ["Europe", "Nordic"],
    bollard: [base + "is_bollard.jpg"],
    signs: {
      speed: [
        {
          pic: base + "is/is_sign-speed.svg",
          colors: ["black","yellow", "red"],
          text: "Number",
        },
      ],
      stop: [
        {
          pic: base + "is/is_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "STOP",
        },
      ],
      yield: [
        {
          pic: base + "is/is_sign-yield.svg",
          colors: ["yellow", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "is/is_sign-crossing.svg",
          colors: ["black", "yellow", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "is/is_chevron.svg",
          colors: ["yellow", "black"],
        },
      ],
    },
  },
  {
    flag: base + "no/no_flag.svg",
    name: "Norway",
    sovereign: true,
    domain: ["no"],
    region: ["Europe", "Nordic"],
    bollard: [base + "no/no_bollard.jpg"],
    signs: {
      speed: [
        {
          pic: base + "no/no_sign-speed.svg",
          colors: ["black","white", "red"],
          text: "Number",
        }
      ],
      stop: [
        {
          pic: base + "no/no_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
          text: "STOP",
        },
      ],
      yield: [
        {
          pic: base + "no/no_sign-yield.svg",
          colors: ["white", "red"],
          border: "white",
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "no/no_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_sign-chevron.svg",
          colors: ["yellow", "black"],
        },
      ],
      railway: [
        {
          pic: base + "no/no_sign-railway.png",
          colors: ["white", "red"],
        }
      ],
    },
  },
  {
    flag: base + "se/se_flag.svg",
    name: "Sweden",
    sovereign: true,
    domain: ["se"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se/se_bollard.png"],
    signs: {
      speed: [
        {
          pic: base + "se/se_sign-speed.svg",
          colors: ["black","yellow", "red"],
          text: "Number",
        }
      ],
      stop: [
        {
        pic: base + "se/se_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "STOP",
        },
      ],
      yield: [
        {
          pic: base + "se/se_sign-yield.svg",
          colors: ["yellow", "red"],
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "se/se_sign-crossing.svg",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "se/se_sign-chevron.svg",
          colors: ["yellow", "blue"],
        },
      ],
      railway: [
        {
          pic: base + "se/se_sign-railway.svg",
          colors: ["yellow", "red"],
        }
      ],
    },
  },
]
