const base = "worldpics/"
import {worldDataInterface} from "../interface.tsx"

export const worldData: worldDataInterface[] = [

  {
    name: "Åland",
    domain: ".ax",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "ax/ax_flag.svg",
      proportions: "17:26",
      colors: ["blue", "yellow", "red"],
    },
    sovereignTo: "fi",
    onGoogleMaps: true,
    languages: ["finnish", "swedish"],
    drivingSide: "right",
    bollard: [
      {
        pic: base + "fi/fi_bollard.png",
        colors: ["white","black"],
        reflector: ["white"],
      }
    ],
    signSpeed: [
      {
        pic: base + "fi/fi_sign-speed.svg",
        colors: ["black","yellow", "red"],
        border: "yellow",
      },
    ],
    signStop: [
      {
        pic: base + "fi/fi_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "stop",
      },
    ],
    signYield: [
      {
        pic: base + "fi/fi_sign-yield.svg",
        colors: ["yellow", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "fi/fi_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "fi/fi_sign-chevron.jpg",
        colors: ["yellow", "black"],
      },
    ],
  },
  {
    name: "Denmark",
    domain: ".dk",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "dk/dk_flag.svg",
      proportions: "28:37",
      colors: ["red", "white"],
    },
    onGoogleMaps: true,
    languages: ["finnish", "swedish"],
    drivingSide: "right",
    bollard: [
      {
        pic: base + "dk/dk_bollard.png",
        colors: ["white","red"],
        reflector: ["yellow","silver"],
      }
    ],
    signSpeed: [
      {
        pic: base + "dk/dk_sign-speed.svg",
        colors: ["black","white", "red"],
        text: "Number",
      },
    ],
    signStop: [
      {
        pic: base + "dk/dk_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "STOP",
      },
    ],
    signYield: [
      {
        pic: base + "dk/dk_sign-yield.svg",
        colors: ["white", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "dk/dk_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "dk/dk_sign-chevron.png",
        colors: ["yellow", "black"],
      },
    ],
    signRailway: [
      {
        pic: base + "dk/dk_sign-railway.webp",
        colors: ["red", "white"],
      }
    ],
    },
  {
    name: "Finland",
    domain: ".fi",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "fi/fi_flag.svg",
      proportions: "11:18",
      colors: ["blue, white"],
    },
    onGoogleMaps: true,
    languages: ["finnish", "swedish"],
    drivingSide: "right",
    bollard: [
      {
        pic: base + "fi/fi_bollard.png",
        colors: ["white","black"],
        reflector: ["white"],
      }
    ],
    signSpeed: [
      {
        pic: base + "fi/fi_sign-speed.svg",
        colors: ["black","yellow", "red"],
        border: "yellow",
      },
    ],
    signStop: [
      {
        pic: base + "fi/fi_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "stop",
      },
    ],
    signYield: [
      {
        pic: base + "fi/fi_sign-yield.svg",
        colors: ["yellow", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "fi/fi_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "fi/fi_sign-chevron.jpg",
        colors: ["yellow", "black"],
      },
    ],
    signRailway: [
      {
        pic: base + "fi/fi_sign-railway.svg",
        colors: ["yellow"],
        border: "red"
      }
    ],
  },
  {
    name: "Faroe Islands",
    domain: ".fo",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "fo/fo_flag.svg",
      proportions: "8:11",
      colors: ["white", "blue", "red"],
    },
    sovereignTo: "dk",
    onGoogleMaps: true,
    drivingSide: "right",
    bollard: [
      {
        pic: base + "fo/fo_bollard.png",
        colors: ["yellow","red"],
        reflector: ["yellow", "white"],
      }
    ],
    signSpeed: [
      {
        pic: base + "dk/dk_sign-speed.svg",
        colors: ["black","white", "red"],
        text: "Number 'km'",
      },
    ],
    signStop: [
      {
        pic: base + "dk/dk_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "STOP",
      },
    ],
    signYield: [
      {
        pic: base + "dk/dk_sign-yield.svg",
        colors: ["white", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "dk/dk_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "dk/dk_sign-chevron.png",
        colors: ["yellow", "black"],
      },
    ],
  },
  {
    name: "Greenland",
    domain: ".gl",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "gl/gl_flag.svg",
      proportions: "2:3",
      colors: ["white", "red"],
    },
    sovereignTo: "dk",
    onGoogleMaps: true,
    drivingSide: "right",
    signSpeed: [
      {
        pic: base + "dk/dk_sign-speed.svg",
        colors: ["black","white", "red"],
        text: "Number",
      },
    ],
    signStop: [
      {
        pic: base + "dk/dk_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "STOP",
      },
    ],
    signYield: [
      {
        pic: base + "dk/dk_sign-yield.svg",
        colors: ["white", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "dk/dk_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "dk/dk_sign-chevron.png",
        colors: ["red", "white"],
      },
    ],
  },
  {
    name: "Iceland",
    domain: ".is",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "is/is_flag.svg",
      proportions: "18:25",
      colors: ["blue", "white", "red"],
    },
    onGoogleMaps: true,
    languages: ["icelandic"],
    drivingSide: "right",
    bollard: [
      {
        pic: base + "is/is_bollard.png",
        colors: ["yellow"],
        reflector: ["silver"],
      }
    ],
    signSpeed: [
      {
        pic: base + "is/is_sign-speed.svg",
        colors: ["black","yellow", "red"],
        text: "Number",
      },
    ],
    signStop: [
      {
        pic: base + "is/is_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "STOP",
      },
    ],
    signYield: [
      {
        pic: base + "is/is_sign-yield.svg",
        colors: ["yellow", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "is/is_sign-crossing.svg",
        colors: ["black", "yellow", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "no/no_sign-chevron.svg",
        colors: ["yellow", "black"],
      },
    ],
  },
  {
    name: "North Korea",
    domain: ".kp",
    region: ["Asia"],
    flag: {
      pic: base + "kp/kp_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "white"],
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Korean"],
    commonWords: {
      "road": "",
      "mountain": "",
      "river": "",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["",""],
        reflector: [""],
      }
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["",""],
        border: "",
      },
    ],
    signStop: [
      {
        pic: base + "",
        colors: [""],
        border: "",
        text: "",
      },
    ],
    signYield: [
      {
        pic: base + "",
        colors: [""],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "",
        colors: [""],
        border: "",
      },
    ],
    signChevron: [
      {
        pic: base + "",
        colors: [""],
      },
    ],
    signRailway: [
      {
        pic: base + "",
        colors: [""],
      },
    ],
  },
  {
    name: "Norway",
    domain: ".no",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "no/no_flag.svg",
      proportions: "8:11",
      colors: ["red", "white", "blue"],
    },
    onGoogleMaps: true,
    drivingSide: "right",
    bollard: [
      {
        pic: base + "no/no_bollard.png",
        colors: ["white","black"],
        reflector: ["white"]
      }
    ],
    signSpeed: [
      {
        pic: base + "no/no_sign-speed.svg",
        colors: ["black","white", "red"],
        text: "Number",
      }
    ],
    signStop: [
      {
        pic: base + "no/no_sign-stop.svg",
        colors: ["white", "red"],
        border: "white",
        text: "STOP",
      },
    ],
    signYield: [
      {
        pic: base + "no/no_sign-yield.svg",
        colors: ["white", "red"],
        border: "white",
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "no/no_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "no/no_sign-chevron.svg",
        colors: ["yellow", "black"],
      },
    ],
    signRailway: [
      {
        pic: base + "no/no_sign-railway.png",
        colors: ["white", "red"],
      }
    ],
  },
  {
    name: "Sweden",
    domain: ".se",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "se/se_flag.svg",
      proportions: "5:8",
      colors: ["blue", "yellow"],
    },
    onGoogleMaps: true,
    languages: ["swedish"],
    drivingSide: "right",
    bollard: [
      {
        pic: base + "se/se_bollard.png",
        colors: ["white","black"],
        reflector: ["white"]
      }
    ],
    signSpeed: [
      {
        pic: base + "se/se_sign-speed.svg",
        colors: ["black","yellow", "red"],
        text: "Number",
      }
    ],
    signStop: [
      {
      pic: base + "se/se_sign-stop.svg",
      colors: ["white", "red"],
      border: "white",
      text: "STOP",
      },
    ],
    signYield: [
      {
        pic: base + "se/se_sign-yield.svg",
        colors: ["yellow", "red"],
      },
    ],
    signPedestrianCrossing: [
      {
        pic: base + "se/se_sign-crossing.svg",
        colors: ["black", "white", "blue"],
        border: "white",
      },
    ],
    signChevron: [
      {
        pic: base + "se/se_sign-chevron.svg",
        colors: ["yellow", "blue"],
      },
    ],
    signRailway: [
      {
        pic: base + "se/se_sign-railway.svg",
        colors: ["yellow", "red"],
      }
    ],
  },
]

//  {
//    name: "",
//    domain: "",
//    region: [""],
//    flag: {
//      pic: base + "ax/ax_flag.svg",
//      colors: [""],
//    },
//    sovereignTo: ,
//    onGoogleMaps: ,
//    driningSide: "",
//    languages: [""],
//    commonWords: {
//      "road": "",
//      "mountain": "",
//      "river": "",
//    },
//    bollard: [
//      {
//        pic: base + "",
//        colors: ["",""],
//        reflector: [""],
//      }
//    ],
//    poleSnow: {},
//    poleTele: {},
//    roadMarkings: {},
//    regPlate: {},
//    signSpeed: [
//      {
//        pic: base + "",
//        colors: ["",""],
//        border: "",
//      },
//    ],
//    signStop: [
//      {
//        pic: base + "",
//        colors: [""],
//        border: "",
//        text: "",
//      },
//    ],
//    signYield: [
//      {
//        pic: base + "",
//        colors: [""],
//      },
//    ],
//    signPedestrianCrossing: [
//      {
//        pic: base + "",
//        colors: [""],
//        border: "",
//      },
//    ],
//    signChevron: [
//      {
//        pic: base + "",
//        colors: [""],
//      },
//    ],
//    signRailway: [
//      {
//        pic: base + "",
//        colors: [""],
//      },
//    ],
//  },