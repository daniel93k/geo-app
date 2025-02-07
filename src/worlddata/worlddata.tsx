// const base = "https://danikaru.se/geodata/"
const base = "worldpics/"
import worldInterface from "../interface.tsx"

export const signWords = ["stop","yield","pedestrianCrossong","chevron","railway"]
export const signLength = signWords.length

export const worldData: worldInterface[] = [
  {
    flag: base + "ax/ax_flag.svg",
    name: "Åland",
    wiki: "https://en.wikipedia.org/wiki/%C3%85land",
    domain: ["ax"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      outerBorder: false,
      stop: [
        {
          pic: `${base}+ "se/se_sign-stop.png"`,
          colors: ["white", "red"],
          border: "white",
        },
      ],
      yield: [
        {
          pic: `${base} + "se/se_sign-yield.png"`,
          colors: ["yellow", "red"],
          border: "",
        },
      ],
      pedestrianCrossing: [
        {
          pic: `${base} + "se/se_sign-crossing.png"`,
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_chevron.svg",
          colors: ["yellow", "black"],
          border: null,
        },
      ],
      railway: [
        {
          pic: `${base} + "se/se_sign-railway.png"`,
          colors: ["yellow", "red"],
          border: "",
        }
      ],
    },
  },
  {
    flag: base + "dk/dk_flag.svg",
    name: "Denmark",
    wiki: "https://en.wikipedia.org/wiki/Denmark",
    domain: ["dk"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      outerBorder: false,
      stop: [
        {
          pic: `${base}+ "se/se_sign-stop.png"`,
          colors: ["white", "red"],
          border: "white",
        },
      ],
      yield: [
        {
          pic: `${base} + "se/se_sign-yield.png"`,
          colors: ["yellow", "red"],
          border: "",
        },
      ],
      pedestrianCrossing: [
        {
          pic: `${base} + "se/se_sign-crossing.png"`,
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_chevron.svg",
          colors: ["yellow", "black"],
          border: null,
        },
      ],
      railway: [
        {
          pic: `${base} + "se/se_sign-railway.png"`,
          colors: ["yellow", "red"],
          border: "",
        }
      ],
    },
  },
  {
    flag: base + "fi/fi_flag.svg",
    name: "Finland",
    wiki: "https://en.wikipedia.org/wiki/Finland",
    domain: ["fi"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      outerBorder: false,
      stop: [
        {
          pic: `${base}+ "se/se_sign-stop.png"`,
          colors: ["white", "red"],
          border: "white",
        },
      ],
      yield: [
        {
          pic: `${base} + "se/se_sign-yield.png"`,
          colors: ["yellow", "red"],
          border: "",
        },
      ],
      pedestrianCrossing: [
        {
          pic: `${base} + "se/se_sign-crossing.png"`,
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_chevron.svg",
          colors: ["yellow", "black"],
          border: null,
        },
      ],
      railway: [
        {
          pic: `${base} + "se/se_sign-railway.png"`,
          colors: ["yellow", "red"],
          border: "",
        }
      ],
    },
  },
  {
    flag: base + "fo/fo_flag.svg",
    name: "Faroe Islands",
    wiki: "https://en.wikipedia.org/wiki/Faroe_Islands",
    domain: ["fo"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      outerBorder: false,
      stop: [
        {
          pic: `${base}+ "se/se_sign-stop.png"`,
          colors: ["white", "red"],
          border: "white",
        },
      ],
      yield: [
        {
          pic: `${base} + "se/se_sign-yield.png"`,
          colors: ["yellow", "red"],
          border: "",
        },
      ],
      pedestrianCrossing: [
        {
          pic: `${base} + "se/se_sign-crossing.png"`,
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_chevron.svg",
          colors: ["yellow", "black"],
          border: null,
        },
      ],
      railway: [
        {
          pic: `${base} + "se/se_sign-railway.png"`,
          colors: ["yellow", "red"],
          border: "",
        }
      ],
    },
  },
  {
    flag: base + "is/is_flag.svg",
    name: "Iceland",
    wiki: "https://en.wikipedia.org/wiki/Iceland",
    domain: ["is"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se_bollard.jpg"],
    signs: {
      outerBorder: false,
      stop: [
        {
          pic: `${base}+ "se/se_sign-stop.png"`,
          colors: ["white", "red"],
          border: "white",
        },
      ],
      yield: [
        {
          pic: `${base} + "se/se_sign-yield.png"`,
          colors: ["yellow", "red"],
          border: "",
        },
      ],
      pedestrianCrossing: [
        {
          pic: `${base} + "se/se_sign-crossing.png"`,
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "no/no_chevron.svg",
          colors: ["yellow", "black"],
          border: null,
        },
      ],
      railway: [
        {
          pic: `${base} + "se/se_sign-railway.png"`,
          colors: ["yellow", "red"],
          border: "",
        }
      ],
    },
  },
  {
    flag: base + "no/no_flag.svg",
    name: "Norway",
    wiki: "https://en.wikipedia.org/wiki/Norway",
    domain: ["no"],
    region: ["Europe", "Nordic"],
    bollard: [base + "no/no_bollard.jpg"],
    signs: {
      outerBorder: false,
      stop: [
        {
          pic: base + "no/no_sign-stop.svg",
          colors: ["white", "red"],
          border: "white",
        },
      ],
      yield: [
        {
          pic: base + "no/no_sign-yield.svg",
          colors: ["yellow", "red"],
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
          border: null,
        },
      ],
      railway: [
        {
          pic: base + "no/no_sign-railway.png",
          colors: ["white", "red"],
          border: "",
        }
      ],
    },
  },
  {
    flag: base + "se/se_flag.svg",
    name: "Sweden",
    wiki: "https://en.wikipedia.org/wiki/Sweden",
    domain: ["se"],
    region: ["Europe", "Nordic"],
    bollard: [base + "se/se_bollard.png"],
    signs: {
      outerBorder: false,
      stop: [
        {
        pic: base + "se/se_sign-stop.png",
        colors: ["white", "red"],
        border: "white",
        },
      ],
      yield: [
        {
          pic: base + "se/se_sign-yield.png",
          colors: ["yellow", "red"],
          border: null,
        },
      ],
      pedestrianCrossing: [
        {
          pic: base + "se/se_sign-crossing.png",
          colors: ["black", "white", "blue"],
          border: "white",
        },
      ],
      chevron: [
        {
          pic: base + "se/se_sign-chevron.png",
          colors: ["yellow", "blue"],
          border: null,
        },
      ],
      railway: [
        {
          pic: base + "se/se_sign-railway.png",
          colors: ["yellow", "red"],
          border: null,
        }
      ],
    },
  },
]
