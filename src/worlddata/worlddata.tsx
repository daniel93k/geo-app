const base = "worldpics/"
import {worldDataInterface} from "../interface.tsx"

export const worldData: worldDataInterface[] = [
  {
    name: "Ascension Island",
    capital: ["Georgetown"],
    domain: "ac",
    region: ["Africa", "Atlantic"],
    flag: {
      pic: base + "ac/ac_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: base + "ac/ac_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Ascension/@-7.9412317,-14.3993217,13z/data=!4m6!3m5!1s0x5b0f4126dd69e2d:0x40d606a7f1eda1e7!8m2!3d-7.9467166!4d-14.3559158!16zL20vMHpiOA?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Ascension_island",
    },
  },
  {
    name: "Andorra",
    capital: ["Andorra la Vella"],
    domain: "ad",
    region: ["Europe"],
    flag: {
      pic: base + "ad/ad_flag.svg",
      proportions: "7:10",
      colors: ["blue", "yellow", "red"],
      emblem: base + "ad/ad_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Catalan"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Andorra",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "United Arab Emirates",
    capital: ["Abu Dhabi"],
    domain: "ae",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "ae/ae_flag.svg",
      proportions: "1:2",
      colors: ["red", "green", "white", "black"],
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/United_Arab_Emirates",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Afghanistan",
    capital: ["Kabul"],
    domain: "af",
    region: ["Asia"],
    flag: {
      pic: base + "af/af_flag.svg",
      proportions: "1:2",
      colors: ["white", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Pashto", "Dari"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Afghanistan",
    },
  },
  {
    name: "Antigua and Barbuda",
    capital: ["Saint John's"],
    domain: "ag",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "ag/ag_flag.svg",
      proportions: "2:3",
      colors: ["red", "black", "yellow", "blue", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Antiguan and Barbudan Creole"],
    links: {
      location:
        "https://www.google.se/maps/place/Antigua+och+Barbuda/@17.3258296,-62.1753455,11z/data=!4m6!3m5!1s0x8c0d6eb96db8d1c1:0x276a3788e18b7994!8m2!3d17.060816!4d-61.796428!16zL20vMGwzaA?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda",
    },
  },
  {
    name: "Anguilla",
    capital: ["The Valley"],
    domain: "ai",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "ai/ai_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Anguillian Creole"],
    links: {
      location:
        "https://www.google.se/maps/place/Anguilla/@18.3897972,-63.3652954,11z/data=!3m1!4b1!4m6!3m5!1s0x8c0e63748eef01e5:0x3b9d6ad384e0d481!8m2!3d18.220554!4d-63.068615!16zL20vMG4zZw?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Anguilla",
    },
  },
  {
    name: "Albania",
    capital: ["Tirana"],
    domain: "al",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "al/al_flag.svg",
      proportions: "5:7",
      colors: ["red", "black"],
      emblem: "al/al_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Albanian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Albania",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Armenia",
    capital: ["Yerevan"],
    domain: "am",
    region: ["Europe","Asia", "Caucasus"],
    flag: {
      pic: base + "am/am_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "yellow"],
      emblem: "am/am_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Armenian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Armenia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Angola",
    capital: ["Luanda"],
    domain: "ao",
    region: ["Africa"],
    flag: {
      pic: base + "ao/ao_flag.svg",
      proportions: "2:3",
      colors: ["red", "black", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Portuguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Angola",
    },
  },
  {
    name: "Antarctica",
    capital: ["Snow City!"],
    domain: "aq",
    region: ["Antarctica"],
    flag: {
      pic: base + "aq/aq_flag.svg",
      proportions: "9:15",
      colors: ["blue", "white"],
      emblem: "",
    },
    sovereignTo: "many",
    onGoogleMaps: true,
    drivingSide: null,
    languages: [""],
  },
  {
    name: "Argentina",
    capital: ["Buenos Aires"],
    domain: "ar",
    region: ["South America"],
    flag: {
      pic: base + "ar/ar_flag.svg",
      proportions: "5:8",
      colors: ["blue", "white"],
      emblem: "ar/ar_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Argentina",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "American Samoa",
    capital: ["Pago Pago", "Fatatogo", "Tafuna"],
    domain: "as",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "as/as_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    sovereignTo: "us",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Samoan", "English"],
    links: {
      location:
        "https://www.google.se/maps/place/Amerikanska+Samoa%C3%B6arna/@-12.8665439,-172.1113239,8z/data=!3m1!4b1!4m6!3m5!1s0x71a684b79248fdc9:0xf3ee739e2dae4bdd!8m2!3d-14.270972!4d-170.132217!16zL20vMGg4ZA?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/American_Samoa",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Austria",
    capital: ["Vienna"],
    domain: "at",
    region: ["Europe"],
    flag: {
      pic: base + "at/at_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "at/at_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["German"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Austria",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Australia",
    capital: ["Canberra"],
    domain: "au",
    region: ["Oceania"],
    flag: {
      pic: base + "au/au_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: "au/au_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Australia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Aruba",
    capital: ["Oranjestad"],
    domain: "aw",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "aw/aw_flag.svg",
      proportions: "2:3",
      colors: ["blue", "red", "white", "yellow"],
      emblem: "",
    },
    sovereignTo: "nl",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Dutch", "Papiamento"],
    links: {
      location:
        "https://www.google.se/maps/place/Aruba/@12.5183523,-70.0085739,13z/data=!3m1!4b1!4m6!3m5!1s0x8e8538cfe25a77db:0xf16a8a3e89818c2f!8m2!3d12.52111!4d-69.968338!16zL20vMGoxMQ?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Aruba",
    },
  },
  {
    name: "Åland",
    capital: ["Mariehamn"],
    domain: "ax",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "ax/ax_flag.svg",
      proportions: "17:26",
      colors: ["blue", "yellow", "red"],
    },
    sovereignTo: "fi",
    onGoogleMaps: true,
    languages: ["Swedish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Åland",
    },
    drivingSide: "right",
    bollard: [
      {
        pic: base + "fi/fi_bollard.png",
        colors: ["white", "black"],
        reflector: ["white"],
      },
    ],
    signSpeed: [
      {
        pic: base + "fi/fi_sign-speed.svg",
        colors: ["black", "yellow", "red"],
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
    name: "Azerbaijan",
    capital: ["Baku"],
    domain: "az",
    region: ["Europe","Asia", "Caucasus"],
    flag: {
      pic: base + "az/az_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "green", "white"],
      emblem: "az/az_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Azerbaijani"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Azerbaijan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Bosnia and Herzegovina",
    capital: ["Sarajevo"],
    domain: "ba",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "ba/ba_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Bosnian", "Croatian", "Serbian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Barbados",
    capital: ["Bridgetown"],
    domain: "bb",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "bb/bb_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Barbados",
    },
  },
  {
    name: "Bangladesh",
    capital: ["Dhaka"],
    domain: "bd",
    region: ["Asia"],
    flag: {
      pic: base + "bd/bd_flag.svg",
      proportions: "3:5",
      colors: ["green", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Bengali"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bangladesh",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Belgium",
    capital: ["Brussels"],
    domain: "be",
    region: ["Europe"],
    flag: {
      pic: base + "be/be_flag.svg",
      proportions: "13:15",
      colors: ["black", "yelloe", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Dutch", "French", "German"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Belgium",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Burkina Faso",
    capital: ["Ougadougou"],
    domain: "bf",
    region: ["Africa"],
    flag: {
      pic: base + "bf/bf_flag.svg",
      proportions: "2:3",
      colors: ["red", "green", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Burkina_Faso",
    },
  },
  {
    name: "Bulgaria",
    capital: ["Sofia"],
    domain: "bg",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "bg/bg_flag.svg",
      proportions: "3:5",
      colors: ["white", "green", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Bulgarian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bulgaria",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Bahrain",
    capital: ["Manama"],
    domain: "bh",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "bh/bh_flag.svg",
      proportions: "3:5",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bahrain",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Burundi",
    capital: ["Gitega", "Bujumbura"],
    domain: "bi",
    region: ["Africa"],
    flag: {
      pic: base + "bi/bi_flag.svg",
      proportions: "3:5",
      colors: ["red", "green", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Kirundi", "French", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Burundi",
    },
  },
  {
    name: "Benin",
    capital: ["Porto-Novo"],
    domain: "bj",
    region: ["Africa"],
    flag: {
      pic: base + "bj/bj_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Benin",
    },
  },
  {
    name: "Bermuda",
    capital: ["Hamilton"],
    domain: "bm",
    region: ["North America", "Atlantic", "Caribbean"],
    flag: {
      pic: base + "bm/bm_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "white"],
      emblem: "bm/bm_emblem.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bermuda",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Brunei",
    capital: ["Bandar Seri Begawan"],
    domain: "bn",
    region: ["Asia"],
    flag: {
      pic: base + "bn/bn_flag.svg",
      proportions: "1:2",
      colors: ["yellow", "white", "black"],
      emblem: "bn/coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Malay", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Brunei",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Bolivia",
    capital: ["Sucre", "La Paz"],
    domain: "bo",
    region: ["South America"],
    flag: {
      pic: base + "bo/bo_flag.svg",
      proportions: "15:22",
      colors: ["red", "yellow", "green"],
      emblem: "bo/bo_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bolivia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Caribbean Netherlands",
    capital: [""],
    domain: "bq",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "",
      proportions: "",
      colors: [""],
      emblem: "",
    },
    sovereignTo: "nl",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Dutch", "Papiamento", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Caribbean_Netherlands",
    },
  },
  {
    name: "Brazil",
    capital: ["Brasilia"],
    domain: "br",
    region: ["South America"],
    flag: {
      pic: base + "br/br_flag.svg",
      proportions: "7:10",
      colors: ["green", "yellow", "blue", "white"],
      emblem: "br/coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Poruguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Brazil",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Bahamas",
    capital: ["Nassau"],
    domain: "bs",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "bs/bs_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Bahamian Creole"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bahamas",
    },
  },
  {
    name: "Bhutan",
    capital: ["Thimphu"],
    domain: "bt",
    region: ["Asia"],
    flag: {
      pic: base + "bt/bt_flag.svg",
      proportions: "2:3",
      colors: ["yellow", "orange", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Dzongkha"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Bhutan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Botswana",
    capital: ["Gaborone"],
    domain: "bw",
    region: ["Africa"],
    flag: {
      pic: base + "bw/bw_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "black"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Setswana"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Botswana",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Belarus",
    capital: ["Minsk"],
    domain: "by",
    region: ["Europe"],
    flag: {
      pic: base + "by/by_flag.svg",
      proportions: "1:2",
      colors: ["red", "green", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Belarusian", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Belarus",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Belize",
    capital: ["Belmopan"],
    domain: "bz",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "bz/bz_flag.svg",
      proportions: "3:5",
      colors: ["red", "blue"],
      emblem: "bz/bz_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Belize",
    },
  },
  {
    name: "Canada",
    capital: ["Ottawa"],
    domain: "ca",
    region: ["North America"],
    flag: {
      pic: base + "ca/ca_flag.svg",
      proportions: "1:2",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English", "French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Canada",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Cocos Islands",
    capital: [""],
    domain: "cc",
    region: ["Oceania", "Indian Ocean"],
    flag: {
      pic: base + "cc/cc_flag.svg",
      proportions: "1:2",
      colors: ["green", "yellow", "brown"],
      emblem: "",
    },
    sovereignTo: "au",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Cocos Malay"],
    links: {
      location:
        "https://www.google.se/maps/place/Kokos%C3%B6arna/@-12.0157321,96.7904927,53955m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2f0ec5897ee869c1:0xdbd142f010e39fa6!8m2!3d-12.164165!4d96.870956!16zL20vMDFwNmw?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Cocos_Islands",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Democratic Republic of the Congo",
    capital: ["Kinshasa"],
    domain: "cd",
    region: ["Africa"],
    flag: {
      pic: base + "cd/cd_flag.svg",
      proportions: "3:4",
      colors: ["blue", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia:
        "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
    },
  },
  {
    name: "Central African Republic",
    capital: ["Bangui"],
    domain: "cf",
    region: ["Africa"],
    flag: {
      pic: base + "cf/cf_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "green", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French", "Sango"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Central_African_Republic",
    },
  },
  {
    name: "Republic of the Congo",
    capital: ["Brazzaville"],
    domain: "cg",
    region: ["Africa"],
    flag: {
      pic: base + "cg/cg_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Republic_of_the_Congo",
    },
  },
  {
    name: "Switzerland",
    capital: ["Bern"],
    domain: "ch",
    region: ["Europe"],
    flag: {
      pic: base + "ch/ch_flag.svg",
      proportions: "1:1",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["German", "French", "Italian", "Romansh"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Switzerland",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Ivory Coast",
    capital: ["Yamoussoukro"],
    domain: "ci",
    region: ["Africa"],
    flag: {
      pic: base + "ci/ci_flag.svg",
      proportions: "2:3",
      colors: ["orange", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Ivory_Coast",
    },
  },
  {
    name: "Cook Islands",
    capital: ["Avarua"],
    domain: "ck",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "ck/ck_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    sovereignTo: "nz",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Cook Islands Māori"],
    links: {
      location:
        "https://www.google.se/maps/place/Cook%C3%B6arna/@-15.3880718,-171.0291689,3403933m/data=!3m2!1e3!4b1!4m6!3m5!1s0x71548aefb97bdedd:0x24ca50e8808b4d8!8m2!3d-21.236736!4d-159.777671!16zL20vMDIwcDE?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Cook_Islands",
    },
  },
  {
    name: "Chile",
    capital: ["Santiago"],
    domain: "cl",
    region: ["South America"],
    flag: {
      pic: base + "cl/cl_flag.svg",
      proportions: "2:3",
      colors: ["white", "red", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Chile",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Cameroon",
    capital: ["Yaoundé"],
    domain: "cm",
    region: ["Africa"],
    flag: {
      pic: base + "cm/cm_flag.svg",
      proportions: "2:3",
      colors: ["green", "red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Cameroon",
    },
  },
  {
    name: "China",
    capital: ["Beijing"],
    domain: "cn",
    region: ["Asia"],
    flag: {
      pic: base + "cn/cn_flag.svg",
      proportions: "2:3",
      colors: ["red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Mandarin"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/China",
    },
  },
  {
    name: "Colombia",
    capital: ["Bogotá"],
    domain: "co",
    region: ["South America"],
    flag: {
      pic: base + "co/co_flag.svg",
      proportions: "2:3",
      colors: ["yellow", "blue", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Colombia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Costa Rica",
    capital: ["San José"],
    domain: "cr",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "cr/cr_flag.svg",
      proportions: "3:5",
      colors: ["blue", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Costa_Rica",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Cuba",
    capital: [""],
    domain: "cu",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "cu/cu_flag.svg",
      proportions: "1:2",
      colors: ["blue", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Cuba",
    },
  },
  {
    name: "Cape Verde",
    capital: ["Praia"],
    domain: "cv",
    region: ["Africa", "Atlantic"],
    flag: {
      pic: base + "cv/cv_flag.svg",
      proportions: "10:17",
      colors: ["blue", "white", "red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Portuguese"],
    links: {
      location:
        "https://www.google.se/maps/place/Kap+Verde/@16.0234344,-24.64936,424167m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9358f2159115131:0x6b1af236f918ea1f!8m2!3d16.5388!4d-23.0418!16zL20vMDFucWo?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Cape_Verde",
    },
  },
  {
    name: "Curaçao",
    capital: ["Willemstad"],
    domain: "cw",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "cw/cw_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "white"],
      emblem: "",
    },
    sovereignTo: "nl",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Dutch", "Papiamento"],
    links: {
      location:
        "https://www.google.se/maps/place/Cura%C3%A7ao/@12.190652,-69.5602858,215680m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e849dbe62c7fdc7:0xfc7f9228dbc64723!8m2!3d12.16957!4d-68.99002!16zL20vMGhiZ2g?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Curaçao",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Christmas Island",
    capital: ["Flying Fish Cove"],
    domain: "cx",
    region: ["Oceania", "Indian Ocean"],
    flag: {
      pic: base + "cx/cx_flag.svg",
      proportions: "1:2",
      colors: ["green", "blue", "yellow", "white"],
      emblem: "",
    },
    sovereignTo: "au",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Malay", "Mandarin"],
    links: {
      location:
        "https://www.google.se/maps/place/Jul%C3%B6arna/@-10.4924282,105.582435,27121m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2ef59a27e3c0a7cf:0x15e7d6090475ea16!8m2!3d-10.447525!4d105.690449!16zL20vMDFwNWw?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Christmas_Island",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Cyprus",
    capital: ["Nicosia"],
    domain: "cy",
    region: ["Asia"],
    flag: {
      pic: base + "cy/cy_flag.svg",
      proportions: "2:3",
      colors: ["white", "orange", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Greek", "Turkish", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Cyprus",
    },
  },
  {
    name: "Czech Republic",
    capital: ["Prague"],
    domain: "cz",
    region: ["Europe"],
    flag: {
      pic: base + "cz/cz_flag.svg",
      proportions: "2:3",
      colors: ["white", "red", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Czech"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Czech_Republic",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Germany",
    capital: ["Berlin"],
    domain: "de",
    region: ["Europe"],
    flag: {
      pic: base + "de/de_flag.svg",
      proportions: "3:5",
      colors: ["black", "red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["German"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Germany",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Djibouti",
    capital: ["Djibouti City"],
    domain: "dj",
    region: ["Africa"],
    flag: {
      pic: base + "dj/dj_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "green", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic", "French", "Somali"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Djibouti",
    },
  },
  {
    name: "Denmark",
    capital: ["Copenhagen"],
    domain: "dk",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "dk/dk_flag.svg",
      proportions: "28:37",
      colors: ["red", "white"],
    },
    onGoogleMaps: true,
    languages: ["Danish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Denmark",
      road_signs: "https://en.wikipedia.org/wiki/Road_signs_in_Denmark",
    },
    drivingSide: "right",
    bollard: [
      {
        pic: base + "dk/dk_bollard.png",
        colors: ["white", "red"],
        reflector: ["yellow", "silver"],
      },
    ],
    signSpeed: [
      {
        pic: base + "dk/dk_sign-speed.svg",
        colors: ["black", "white", "red"],
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
      },
    ],
  },
  {
    name: "Dominica",
    capital: ["Roseau"],
    domain: "dm",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "dm/dm_flag.svg",
      proportions: "1:2",
      colors: ["green", "yellow", "black", "white"],
      emblem: "dm/emblem.svg",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Dominica",
    },
  },
  {
    name: "Dominican Republic",
    capital: ["Santo Domingo"],
    domain: "do",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "do/do_flag.svg",
      proportions: "2:3",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Dominican_Republic",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Algeria",
    capital: ["Algiers"],
    domain: "dz",
    region: ["Africa"],
    flag: {
      pic: base + "dz/dz_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic", "Tamazight"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Algeria",
    },
  },
  {
    name: "Ecuador",
    capital: ["Quito"],
    domain: "ec",
    region: ["South America"],
    flag: {
      pic: base + "ec/ec_flag.svg",
      proportions: "2:3",
      colors: ["yellow", "blue", "red"],
      emblem: "ec/ec_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Ecuador",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Estonia",
    capital: ["Tallinn"],
    domain: "ee",
    region: ["Europe"],
    flag: {
      pic: base + "ee/ee_flag.svg",
      proportions: "7:11",
      colors: ["blue", "black", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Estonian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Estonia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Egypt",
    capital: ["Kairo"],
    domain: "eg",
    region: ["Africa"],
    flag: {
      pic: base + "eg/eg_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "black"],
      emblem: "eg/eg_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Egypt",
    },
  },
  {
    name: "Western Sahara",
    capital: ["Laayoune"],
    domain: "eh",
    region: ["Africa"],
    flag: {
      pic: base + "eh/eh_flag.svg",
      proportions: "",
      colors: [""],
      emblem: "",
    },
    sovereignTo: "ma",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Western_Sahara",
    },
  },
  {
    name: "Eritrea",
    capital: ["Asmara"],
    domain: "er",
    region: ["Africa"],
    flag: {
      pic: base + "er/er_flag.svg",
      proportions: "1:2",
      colors: ["red", "green", "blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Tigrinya", "Arabic", "English"],
    links: {
      location:
        "https://www.google.se/maps/place/Eritrea/@15.1863657,38.5105206,914288m/data=!3m2!1e3!4b1!4m6!3m5!1s0x166d5a3f9dba8565:0x17c208f02f120efa!8m2!3d15.179384!4d39.782334!16zL20vMDJraHM?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Eritrea",
    },
  },
  {
    name: "Spain",
    capital: ["Madrid"],
    domain: "es",
    region: ["Europe"],
    flag: {
      pic: base + "es/es_flag.svg",
      proportions: "2:3",
      colors: ["red", "yellow"],
      emblem: "es/coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Spain",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Ethiopia",
    capital: ["Addis Ababa"],
    domain: "et",
    region: ["Africa"],
    flag: {
      pic: base + "et/et_flag.svg",
      proportions: "1:2",
      colors: ["green", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Amharic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Ethiopia",
    },
  },
  {
    name: "European Union",
    capital: [""],
    domain: "eu",
    region: ["Europe"],
    sovereignTo: "many",
    flag: {
      pic: base + "eu/eu_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: null,
    languages: ["many"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/European_Union",
    },
  },
  {
    name: "Finland",
    capital: ["Helsinki"],
    domain: "fi",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "fi/fi_flag.svg",
      proportions: "11:18",
      colors: ["blue, white"],
    },
    onGoogleMaps: true,
    languages: ["Finnish", "Swedish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Finland",
      road_signs: "https://en.wikipedia.org/wiki/Road_signs_in_Finland",
    },
    drivingSide: "right",
    bollard: [
      {
        pic: base + "fi/fi_bollard.png",
        colors: ["white", "black"],
        reflector: ["white"],
      },
    ],
    signSpeed: [
      {
        pic: base + "fi/fi_sign-speed.svg",
        colors: ["black", "yellow", "red"],
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
        border: "red",
      },
    ],
  },
  {
    name: "Fiji",
    capital: ["Suva"],
    domain: "fj",
    region: ["Oceania", "Melanesia"],
    flag: {
      pic: base + "fj/fj_flag.svg",
      proportions: "1:2",
      colors: ["blue"],
      emblem: "fj/fj_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Fijian", "Fiji Hindi"],
    links: {
      location:
        "https://www.google.se/maps/place/Fiji/@-16.6164085,176.816684,1815619m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6e1990fd703cdc5d:0x9e9c319946ef5b93!8m2!3d-17.713371!4d178.065032!16zL20vMDJ3dDA?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Fiji",
    },
  },
  {
    name: "Falkland Islands",
    capital: ["Stanley"],
    domain: "fk",
    region: ["South America", "Atlantic"],
    flag: {
      pic: base + "fk/fk_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/FIQQ+1ZZ,+Falklands%C3%B6arna+(Islas+Malvinas)/@-51.724961,-60.18866,293418m/data=!3m2!1e3!4b1!4m6!3m5!1s0xbc2a89b94491e3a3:0x322aaaff8dd9c53a!8m2!3d-51.796253!4d-59.523613!16zL20vMDJ3bXk?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Falkland_Islands",
    },
  },
  {
    name: "Federated States of Micronesia",
    capital: ["Palikir"],
    domain: "fm",
    region: ["Oceania", "Micronesia"],
    flag: {
      pic: base + "fm/fm_flag.svg",
      proportions: "10:19",
      colors: ["blue", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Mikronesiens+federerade+stater/@5.2042249,144.9193772,3773862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x65d9b5c5ac58c813:0x547a8dcdfaa46525!8m2!3d7.425554!4d150.550812!16zL20vMDMxODg?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Federated_States_of_Micronesia",
    },
  },
  {
    name: "Faroe Islands",
    capital: ["Tórshavn"],
    domain: "fo",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "fo/fo_flag.svg",
      proportions: "8:11",
      colors: ["white", "blue", "red"],
    },
    sovereignTo: "dk",
    onGoogleMaps: true,
    languages: ["Faroese", "Danish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Faroe_Islands",
    },
    drivingSide: "right",
    bollard: [
      {
        pic: base + "fo/fo_bollard.png",
        colors: ["yellow", "red"],
        reflector: ["yellow", "white"],
      },
    ],
    signSpeed: [
      {
        pic: base + "dk/dk_sign-speed.svg",
        colors: ["black", "white", "red"],
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
    name: "France",
    capital: ["Paris"],
    domain: "fr",
    region: ["Europe"],
    flag: {
      pic: base + "fr/fr_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/France",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Gabon",
    capital: ["Libreville"],
    domain: "ga",
    region: ["Africa"],
    flag: {
      pic: base + "ga/ga_flag.svg",
      proportions: "3:4",
      colors: ["green", "yellow", "blue"],
      emblem: "ga/ga_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Gabon",
    },
  },
  {
    name: "Grenada",
    capital: ["St. George's"],
    domain: "gd",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "gd/gd_flag.svg",
      proportions: "3:5",
      colors: ["red", "yellow", "green"],
      emblem: "gd/gd_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Grenada/@12.2600887,-61.7554471,115721m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8c381789f4877bd1:0x36d8c7015a1f4f8e!8m2!3d12.1165!4d-61.679!16zL20vMDM1eWc?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Grenada",
    },
  },
  {
    name: "Georgia",
    capital: ["Tbilisi"],
    domain: "ge",
    region: ["Europe","Asia", "Caucasus"],
    flag: {
      pic: base + "ge/ge_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Georgian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Georgia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "French Guiana",
    capital: ["Cayenne"],
    domain: "gf",
    region: ["South America"],
    flag: {
      pic: base + "gf/gf_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "red"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/French_Guiana",
    },
  },
  {
    name: "Guernsey",
    capital: ["Saint Peter Port"],
    domain: "gg",
    region: ["Europe"],
    flag: {
      pic: base + "gg/gg_flag.svg",
      proportions: "2:3",
      colors: ["white", "red", "yellow"],
      emblem: "",
    },
    sovereignTo: "uk",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "French"],
    links: {
      location:
        "https://www.google.se/maps/place/Guernsey/@49.4631138,-2.6293973,19242m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480d72322e9176df:0xd10063639ec06acb!8m2!3d49.4481982!4d-2.58949!16zL20vMDM2NmM?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Guernsey",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Ghana",
    capital: ["Accra"],
    domain: "gh",
    region: ["Africa"],
    flag: {
      pic: base + "gh/gh_flag.svg",
      proportions: "2:3",
      colors: ["red", "yellow", "green", "black"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Ghana",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Gibraltar",
    capital: [""],
    domain: "gi",
    region: ["Europe"],
    flag: {
      pic: base + "gi/gi_flag.png",
      proportions: "1:2",
      colors: ["white", "red", "yelle", "black"],
      emblem: "",
    },
    sovereignTo: "uk",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Gibraltar",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Greenland",
    capital: ["Nuuk"],
    domain: "gl",
    region: ["North America", "Nordic"],
    flag: {
      pic: base + "gl/gl_flag.svg",
      proportions: "2:3",
      colors: ["white", "red"],
    },
    sovereignTo: "dk",
    onGoogleMaps: true,
    languages: ["Greenlandic", "Danish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Greenland",
    },
    drivingSide: "right",
    signSpeed: [
      {
        pic: base + "dk/dk_sign-speed.svg",
        colors: ["black", "white", "red"],
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
    name: "The Gambia",
    capital: ["Banjul"],
    domain: "gm",
    region: ["Africa"],
    flag: {
      pic: base + "gm/gm_flag.svg",
      proportions: "2:3",
      colors: ["red", "blue", "green", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["English"], // and more
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/The_Gambia",
    },
  },
  {
    name: "Guinea",
    capital: ["Conakry"],
    domain: "gn",
    region: ["Africa"],
    flag: {
      pic: base + "gn/gn_flag.svg",
      proportions: "2:3",
      colors: ["red", "yellow", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      location:
        "https://www.google.se/maps/place/Guinea/@9.9277745,-14.1052363,1866370m/data=!3m2!1e3!4b1!4m6!3m5!1s0xf01b321bcce953f:0xe8737bcbd75a2df6!8m2!3d9.945587!4d-9.696645!16zL20vMDM2NzY?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Guinea",
    },
  },
  {
    name: "Guadeloupe",
    capital: ["Basse-Terre"],
    domain: "gp",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "fr/fr_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "red"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      location:
        "https://www.google.se/maps/place/Guadeloupe/@16.1498959,-61.5621971,113748m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8c0e755a77287d51:0xecbe3e37b74a07ab!8m2!3d16.265!4d-61.551!16zL20vMDM3bm0?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Guadeloupe",
    },
  },
  {
    name: "Equatorial Guinea",
    capital: ["Malabo", "Ciudad de la Paz"],
    domain: "gq",
    region: ["Africa"],
    flag: {
      pic: base + "gq/gq_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "red", "blue"],
      emblem: base + "gq/gq_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish", "French", "Portuguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Equatorial_Guinea",
    },
  },
  {
    name: "Greece",
    capital: ["Athens"],
    domain: "gr",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "gr/gr_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Greek"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Greece",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "S. Georgia, S. Sandwitch Islands",
    capital: ["#King Edward Point"],
    domain: "gs",
    region: ["Antarctica"],
    flag: {
      pic: base + "gs/gs_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: base + "gs/gs_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: null,
    languages: ["English"],
    links: {
      wikipedia:
        "https://en.wikipedia.org/wiki/South_Georgia_and_the_South_Sandwich_Islands",
    },
  },
  {
    name: "Guatemala",
    capital: ["Guatemala City"],
    domain: "gt",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "gt/gt_flag.svg",
      proportions: "5:8",
      colors: ["white", "blue"],
      emblem: base + "gt/gt_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Guatemala",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Guam",
    capital: ["Hagåtña"],
    domain: "gu",
    region: ["Oceania", "Micronesia"],
    flag: {
      pic: base + "gu/gu_flag.svg",
      proportions: "22:41",
      colors: ["blue", "red"],
      emblem: base + "gu/gu_emblem.svg",
    },
    sovereignTo: "us",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Guam/@13.4510924,144.6236713,115173m/data=!3m2!1e3!4b1!4m6!3m5!1s0x671f76ff930f24ef:0x5571ae91c5b3e5a6!8m2!3d13.3823791!4d144.6972774!16zL20vMDM0dGw?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Guam",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Guinea-Bissau",
    capital: ["Bissau"],
    domain: "gw",
    region: ["Africa"],
    flag: {
      pic: base + "gw/gw_flag.svg",
      proportions: "1:2",
      colors: ["red", "yellow", "green", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Portuguese", "Kriol"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Guinea-Bissau",
    },
  },
  {
    name: "Guyana",
    capital: ["Georgetown"],
    domain: "gy",
    region: ["South America"],
    flag: {
      pic: base + "gy/gy_flag.svg",
      proportions: "3:5",
      colors: ["red", "green", "yellow", "black", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Guyana",
    },
  },
  {
    name: "Hong Kong",
    capital: ["Hong Kong"],
    domain: "hk",
    region: ["Asia"],
    flag: {
      pic: base + "hk/hk_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "hk/hk_emblem.svg",
    },
    sovereignTo: "cn",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Cantonese","English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Hong_Kong",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Heard Is. and McDonald Is.",
    capital: [""],
    domain: "hm",
    region: ["Antarctica"],
    flag: {
      pic: base + "hm/hm_flag.svg",
      proportions: "1:2",
      colors: ["bleu", "red", "white"],
      emblem: "",
    },
    sovereignTo: "au",
    onGoogleMaps: false,
    drivingSide: null,
    languages: [""],
    links: {
      wikipedia:
        "https://en.wikipedia.org/wiki/Heard_Island_and_McDonald_Islands",
    },
  },
  {
    name: "Honduras",
    capital: ["Tegucigalpa"],
    domain: "hn",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "hn/hn_flag.svg",
      proportions: "1:2",
      colors: ["blue", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Honduras",
    },
  },
  {
    name: "Croatia",
    capital: ["Zagreb"],
    domain: "hr",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "hr/hr_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "blue"],
      emblem: base + "hr/hr_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Croatian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Croatia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Haiti",
    capital: ["Port-au-Prince"],
    domain: "ht",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "ht/ht_flag.svg",
      proportions: "3:5",
      colors: ["blue", "red"],
      emblem: base + "ht/ht_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Haitian Creole", "French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Haiti",
    },
  },
  {
    name: "Hungary",
    capital: ["Budapest"],
    domain: "hu",
    region: ["Europe"],
    flag: {
      pic: base + "hu/hu_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Hungarian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Hungary",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Indonesia",
    capital: ["Jakarta"],
    domain: "id",
    region: ["Asia"],
    flag: {
      pic: base + "id/id_flag.svg",
      proportions: "2:3",
      colors: ["white", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Indonesian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Indonesia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Ireland",
    capital: ["Dublin"],
    domain: "ie",
    region: ["Europe"],
    flag: {
      pic: base + "ie/ie_flag.svg",
      proportions: "1:2",
      colors: ["green", "white", "orange"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Irish", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Ireland",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Israel",
    capital: ["Jerusalem"],
    domain: "il",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "il/il_flag.svg",
      proportions: "8:11",
      colors: ["blue", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Hebrew"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Israel",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Isle of Man",
    capital: ["Douglas"],
    domain: "im",
    region: ["Europe"],
    flag: {
      pic: base + "im/im_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "yellow"],
      emblem: "",
    },
    sovereignTo: "uk",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Isle_of_Man",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "India",
    capital: ["New Delhi"],
    domain: "in",
    region: ["Asia"],
    flag: {
      pic: base + "in/in_flag.svg",
      proportions: "2:3",
      colors: ["orange", "white", "green", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Hindi", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/India",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "British Indian Ocean Territory",
    capital: [""],
    domain: "io",
    region: ["Asia", "Indian Ocean"],
    flag: {
      pic: base + "io/io_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "blue"],
      emblem: base + "io/io_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Brittiska+territoriet+i+Indiska+oceanen/@-6.3128671,71.2262745,470813m/data=!3m2!1e3!4b1!4m6!3m5!1s0x249273e0849da387:0xa94f6470101f6be1!8m2!3d-6.343194!4d71.876519!16zL20vMDE2OGI?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/British_Indian_Ocean_Territory",
    },
  },
  {
    name: "Iraq",
    capital: ["Baghdad"],
    domain: "iq",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "iq/iq_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "black", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Iraq",
    },
  },
  {
    name: "Iran",
    capital: ["Tehran"],
    domain: "ir",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "ir/ir_flag.svg",
      proportions: "4:7",
      colors: ["green", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Persian (Farsi)"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Iran",
    },
  },
  {
    name: "Iceland",
    capital: ["Reykjavík"],
    domain: "is",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "is/is_flag.svg",
      proportions: "18:25",
      colors: ["blue", "white", "red"],
    },
    onGoogleMaps: true,
    languages: ["Icelandic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Iceland",
      road_signs: "https://en.wikipedia.org/wiki/Road_signs_in_Iceland",
    },
    drivingSide: "right",
    bollard: [
      {
        pic: base + "is/is_bollard.png",
        colors: ["yellow"],
        reflector: ["silver"],
      },
    ],
    signSpeed: [
      {
        pic: base + "is/is_sign-speed.svg",
        colors: ["black", "yellow", "red"],
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
    name: "Italy",
    capital: ["Rome"],
    domain: "it",
    region: ["Europe"],
    flag: {
      pic: base + "it/it_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Italian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Italy",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Jersey",
    capital: ["St Helier"],
    domain: "je",
    region: ["Europe"],
    flag: {
      pic: base + "je/je_flag.svg",
      proportions: "3:5",
      colors: ["red", "white", "yellow"],
      emblem: "je/je_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "French"],
    links: {
      location:
        "https://www.google.se/maps/place/Jersey/@49.2118067,-2.21973,38680m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480c52a48c927533:0x519c23a30a1a6cc3!8m2!3d49.2137711!4d-2.1357662!16zL20vMDNfeGo?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Jersey",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Jamaica",
    capital: ["Kingston"],
    domain: "jm",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "jm/jm_flag.svg",
      proportions: "1:2",
      colors: ["green", "black", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Jamaica",
    },
  },
  {
    name: "Jordan",
    capital: ["Amman"],
    domain: "jo",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "jo/jo_flag.svg",
      proportions: "1:2",
      colors: ["black", "white", "green", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Jordan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Japan",
    capital: ["Tokyo"],
    domain: "jp",
    region: ["Asia"],
    flag: {
      pic: base + "jp/jp_flag.svg",
      proportions: "2:3",
      colors: ["white", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Japanese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Japan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Kenya",
    capital: ["Nairobi"],
    domain: "ke",
    region: ["Africa"],
    flag: {
      pic: base + "ke/ke_flag.svg",
      proportions: "2:3",
      colors: ["black", "red", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Swahili"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Kenya",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Kyrgyzstan",
    capital: ["Bishkek"],
    domain: "kg",
    region: ["Asia"],
    flag: {
      pic: base + "kg/kg_flag.svg",
      proportions: "3:5",
      colors: ["red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Kyrgyz", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Kyrgyzstan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Cambodia",
    capital: ["Phnom Penh"],
    domain: "kh",
    region: ["Asia"],
    flag: {
      pic: base + "kh/kh_flag.svg",
      proportions: "16:25",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Khmer"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Cambodia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Kiribati",
    capital: ["Tarawa"],
    domain: "ki",
    region: ["Oceania", "Micronesia"],
    flag: {
      pic: base + "ki/ki_flag.svg",
      proportions: "1:2",
      colors: ["red", "yelle", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Gilbertese"],
    links: {
      location:
        "https://www.google.se/maps/place/Kiribati/@-3.7331894,-178.8001301,7562885m/data=!3m2!1e3!4b1!4m6!3m5!1s0x65647c91c2028703:0x84327d040152c307!8m2!3d1.44213!4d172.9829763!16zL20vMDQ3dF8?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Kiribati",
    },
  },
  {
    name: "Comoros",
    capital: ["Moroni"],
    domain: "km",
    region: ["Africa", "Indian Ocean"],
    flag: {
      pic: base + "km/km_flag.svg",
      proportions: "3:5",
      colors: ["yelloe", "white", "red", "blue", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Comorian", "Arabic", "French"],
    links: {
      location:
        "https://www.google.se/maps/place/Komorerna/@-11.902182,43.5504564,231751m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1898e3036408a48d:0xf70a7fbee4dfd4db!8m2!3d-11.6455!4d43.3333!16zL20vMDFuNmM?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Comoros",
    },
  },
  {
    name: "Saint Kitts and Nevis",
    capital: ["Basseterre"],
    domain: "kn",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "kn/kn_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "black", "white", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis",
    },
  },
  {
    name: "North Korea",
    capital: ["Pyongyang"],
    domain: "kp",
    region: ["Asia"],
    flag: {
      pic: base + "kp/kp_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "white"],
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Korean"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/North_Korea",
    },
  },
  {
    name: "South Korea",
    capital: ["Seoul"],
    domain: "kr",
    region: ["Asia"],
    flag: {
      pic: base + "kr/kr_flag.svg",
      proportions: "2:3",
      colors: ["white", "black", "red", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Korean"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/South_Korea",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Kuwait",
    capital: ["Kuwait City"],
    domain: "kw",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "kw/kw_flag.svg",
      proportions: "1:2",
      colors: ["green", "white", "red", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Kuwait",
    },
  },
  {
    name: "Cayman Islands",
    capital: ["George Town"],
    domain: "ky",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "ky/ky_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "white"],
      emblem: base + "ky/ky_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Cayman_Islands",
    },
  },
  {
    name: "Kazakhstan",
    capital: ["Astana"],
    domain: "kz",
    region: ["Asia"],
    flag: {
      pic: base + "kz/kz_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Kazakh", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Kazakhstan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Laos",
    capital: ["Vientiane"],
    domain: "la",
    region: ["Asia"],
    flag: {
      pic: base + "la/la_flag.svg",
      proportions: "2:3",
      colors: ["red", "blue", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Lao"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Laos",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Lebanon",
    capital: ["Beirut"],
    domain: "lb",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "lb/lb_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Lebanon",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Saint Lucia",
    capital: ["Castries"],
    domain: "lc",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "lc/lc_flag.svg",
      proportions: "1:2",
      colors: ["blue", "white", "black", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Saint Lucian Creole French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Saint_Licia",
    },
  },
  {
    name: "Liechtenstein",
    capital: ["Vaduz"],
    domain: "li",
    region: ["Europe"],
    flag: {
      pic: base + "li/li_flag.svg",
      proportions: "3:5",
      colors: ["blue", "red", "yellow", "black"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["German"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Liechtenstein",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Sri Lanka",
    capital: ["Colombo", "Sri Jayawardenepura"],
    domain: "lk",
    region: ["Asia"],
    flag: {
      pic: base + "lk/lk_flag.svg",
      proportions: "1:2",
      colors: ["yellow", "orange", "green", "maroon"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Sinhala", "Tamil"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Sri_Lanka",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Liberia",
    capital: ["Monrovia"],
    domain: "lr",
    region: ["Africa"],
    flag: {
      pic: base + "lr/lr_flag.svg",
      proportions: "10:19",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Liberia",
    },
  },
  {
    name: "Lesotho",
    capital: ["Maseru"],
    domain: "ls",
    region: ["Africa"],
    flag: {
      pic: base + "ls/ls_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "green", "black"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Sesotho", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Lesotho",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Lithuania",
    capital: ["Vilnius"],
    domain: "lt",
    region: ["Europe"],
    flag: {
      pic: base + "lt/lt_flag.svg",
      proportions: "3:5",
      colors: ["yellow", "green", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Lithuanian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Lithuania",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Luxembourg",
    capital: ["Luxembourg City"],
    domain: "lu",
    region: ["Europe"],
    flag: {
      pic: base + "lu/lu_flag.svg",
      proportions: "3:5",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Luxembourgish", "French", "German"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Luxembourg",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Latvia",
    capital: ["Riga"],
    domain: "lv",
    region: ["Europe"],
    flag: {
      pic: base + "lv/lv_flag.svg",
      proportions: "1:2",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Latvian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Latvia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Libya",
    capital: ["Tripoli"],
    domain: "ly",
    region: ["Africa"],
    flag: {
      pic: base + "ly/ly_flag.svg",
      proportions: "1:2",
      colors: ["red", "black", "green", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Libya",
    },
  },
  {
    name: "Morocco",
    capital: ["Rabat"],
    domain: "ma",
    region: ["Africa"],
    flag: {
      pic: base + "ma/ma_flag.svg",
      proportions: "2:3",
      colors: ["red", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic", "Amazigh"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Morocco",
    },
  },
  {
    name: "Monaco",
    capital: ["Monaco"],
    domain: "mc",
    region: ["Europe"],
    flag: {
      pic: base + "mc/mc_flag.svg",
      proportions: "4:5",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Monaco",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Moldova",
    capital: ["Chișinău"],
    domain: "md",
    region: ["Europe"],
    flag: {
      pic: base + "md/md_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "red"],
      emblem: base + "md/md_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Romanian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Moldova",
    },
  },
  {
    name: "Montenegro",
    capital: ["Podgorica", "Cetinje"],
    domain: "me",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "me/me_flag.svg",
      proportions: "1:2",
      colors: ["red", "yellow", ""],
      emblem: base + "me/me_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Montenegrin", "Serbian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Montenegro",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Madagascar",
    capital: ["Antananarivo"],
    domain: "mg",
    region: ["Africa"],
    flag: {
      pic: base + "mg/mg_flag.svg",
      proportions: "2:3",
      colors: ["white", "red", "green"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Malagasy", "French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Madagascar",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Marshall Islands",
    capital: ["Majuro"],
    domain: "mh",
    region: ["Oceania", "Micronesia"],
    flag: {
      pic: base + "mh/mh_flag.svg",
      proportions: "10:19",
      colors: ["blue", "white", "orange"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Marshallese", "English"],
    links: {
      location:
        "https://www.google.se/maps/place/Marshall%C3%B6arna/@9.4547488,156.1335093,3742826m/data=!3m2!1e3!4b1!4m6!3m5!1s0x650119b22129ca2b:0x8b3e03e8aa09b776!8m2!3d7.131474!4d171.184478!16zL20vMDR2NnY?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Marshall_Islands",
    },
  },
  {
    name: "North Macedonia",
    capital: ["Skopje"],
    domain: "mk",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "mk/mk_flag.svg",
      proportions: "1:2",
      colors: ["red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Macedonian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/North_Macedonia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Mali",
    capital: ["Bamako"],
    domain: "ml",
    region: ["Africa"],
    flag: {
      pic: base + "ml/ml_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Mali",
    },
  },
  {
    name: "Myanmar",
    capital: ["Naypyidaw", "Yangon"],
    domain: "mm",
    region: ["Asia"],
    flag: {
      pic: base + "mm/mm_flag.svg",
      proportions: "2:3",
      colors: ["yellow", "green", "red", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Burmese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Myanmar",
    },
  },
  {
    name: "Mongolia",
    capital: ["Ulaanbaatar"],
    domain: "mn",
    region: ["Asia"],
    flag: {
      pic: base + "mn/mn_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Mongolian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Mongolia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Macau",
    capital: ["Macau"],
    domain: "mo",
    region: ["Asia"],
    flag: {
      pic: base + "mo/mo_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "white"],
      emblem: "",
    },
    sovereignTo: "cn",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Chinese", "Portuguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Macau",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Northern Mariana Islands",
    capital: ["Saipan"],
    domain: "mp",
    region: ["Oceania","Micronesia"],
    flag: {
      pic: base + "mp/mp_flag.svg",
      proportions: "20:39",
      colors: ["blue"],
      emblem: base + "mp/mp_emblem.svg",
    },
    sovereignTo: "us",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English", "Chamorro", "Carolinian"],
    links: {
      location:
        "https://www.google.se/maps/place/Nordmarianerna/@17.313227,144.164708,905614m/data=!3m2!1e3!4b1!4m6!3m5!1s0x66d8b13490995c51:0x9db7ebab7c3a0e32!8m2!3d15.0979!4d145.6739!16zL20vMDVjbnI?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Northern_Mariana_Islands",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Martinique",
    capital: ["Fort-de-France"],
    domain: "mq",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "mq/mq_flag.svg",
      proportions: "2:3",
      colors: ["green", "black", "red"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      location:
        "https://www.google.se/maps/place/Martinique/@14.6343636,-61.1789219,114727m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8c6aa0f90066070d:0xe1001b1217afe7b0!8m2!3d14.641528!4d-61.024174!16zL20vMDR2Zzg?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Martinique",
    },
  },
  {
    name: "Mauritania",
    capital: ["Nouakchott"],
    domain: "mr",
    region: ["Africa"],
    flag: {
      pic: base + "mr/mr_flag.svg",
      proportions: "2:3",
      colors: ["red", "green", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Mauritania",
    },
  },
  {
    name: "Montserrat",
    capital: ["Plymouth", "Brades"],
    domain: "ms",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "ms/ms_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "blue"],
      emblem: base + "ms/ms_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Montserration Creole"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Montserrat",
    },
  },
  {
    name: "Malta",
    capital: ["Valletta"],
    domain: "mt",
    region: ["Europe"],
    flag: {
      pic: base + "mt/mt_flag.svg",
      proportions: "2:3",
      colors: ["white", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Maltese", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Malta",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Mauritius",
    capital: ["Port Louis"],
    domain: "mu",
    region: ["Africa", "Indian Ocean"],
    flag: {
      pic: base + "mu/mu_flag.svg",
      proportions: "2:3",
      colors: ["red", "blue", "yellow", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Mauritius/@-15.4048409,56.3740781,1829025m/data=!3m2!1e3!4b1!4m6!3m5!1s0x217c504df94474c9:0x4203d9c2116bd031!8m2!3d-20.348404!4d57.552152!16zL20vMDR2czk?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Mauritius",
    },
  },
  {
    name: "Maldives",
    capital: ["Malé"],
    domain: "mv",
    region: ["Asia", "Indian Ocean"],
    flag: {
      pic: base + "mv/mv_flag.svg",
      proportions: "2:3",
      colors: ["red", "green", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Dhivehi"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Maldives",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Malawi",
    capital: ["Lilongwe"],
    domain: "mw",
    region: ["Africa"],
    flag: {
      pic: base + "mw/mw_flag.svg",
      proportions: "2:3",
      colors: ["black", "red", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Chichewa", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Malawi",
    },
  },
  {
    name: "Mexico",
    capital: ["Mexico City"],
    domain: "mx",
    region: ["North America"],
    flag: {
      pic: base + "mx/mx_flag.svg",
      proportions: "4:7",
      colors: ["green", "white", "red"],
      emblem: base + "mx/mx_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Mexico",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Malaysia",
    capital: ["Kuala Lumpur", "Putrajaya"],
    domain: "my",
    region: ["Asia"],
    flag: {
      pic: base + "my/my_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Malay"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Malaysia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Mozambique",
    capital: ["Maputo"],
    domain: "mz",
    region: ["Africa"],
    flag: {
      pic: base + "mz/mz_flag.svg",
      proportions: "2:3",
      colors: ["green", "black", "yellow", "red", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Portuguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Mozambique",
    },
  },
  {
    name: "Namibia",
    capital: ["Windhoek"],
    domain: "na",
    region: ["Africa"],
    flag: {
      pic: base + "na/na_flag.svg",
      proportions: "2:3",
      colors: ["blue", "red", "green", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Namibia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "New Caledonia",
    capital: ["Nouméa"],
    domain: "nc",
    region: ["Oceania", "Melanesia"],
    flag: {
      pic: base + "nc/nc_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "green", "yellow", "black"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/New_Caledonia",
    },
  },
  {
    name: "Niger",
    capital: ["Niamey"],
    domain: "ne",
    region: ["Africa"],
    flag: {
      pic: base + "ne/ne_flag.svg",
      proportions: "6:7",
      colors: ["orange", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Niger",
    },
  },
  {
    name: "Norfolk Island",
    capital: ["Kingston"],
    domain: "nf",
    region: ["Oceania"],
    flag: {
      pic: base + "nf/nf_flag.svg",
      proportions: "1:2",
      colors: ["green", "white"],
      emblem: "",
    },
    sovereignTo: "au",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Norfolk+Island/@-29.0651224,167.9146953,25910m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6c4bd11fadbac939:0xb97a9823335d1552!8m2!3d-29.040835!4d167.954712!16zL20vMDVjcW0?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Norfolk_Island",
    },
  },
  {
    name: "Nigeria",
    capital: ["Abuja"],
    domain: "ng",
    region: ["Africa"],
    flag: {
      pic: base + "ng/ng_flag.svg",
      proportions: "1:2",
      colors: ["green", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English", "Pidgin English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Nigeria",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Nicaragua",
    capital: ["Managua"],
    domain: "ni",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "ni/ni_flag.svg",
      proportions: "3:5",
      colors: ["blue", "white"],
      emblem: base + "ni/ni_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Nicaragua",
    },
  },
  {
    name: "Netherlands",
    capital: ["Amsterdam", "The Hague"],
    domain: "nl",
    region: ["Europe"],
    flag: {
      pic: base + "nl/nl_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Dutch"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Netherlands",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    capital: ["Oslo"],
    domain: "no",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "no/no_flag.svg",
      proportions: "8:11",
      colors: ["red", "white", "blue"],
    },
    onGoogleMaps: true,
    languages: ["Norwegian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Norway",
      road_signs: "https://en.wikipedia.org/wiki/Road_signs_in_Norway",
    },
    drivingSide: "right",
    bollard: [
      {
        pic: base + "no/no_bollard.png",
        colors: ["white", "black"],
        reflector: ["white"],
      },
    ],
    roadMarkings: [
      {
        pic: base + "no/no_road.png",
        middleStyle: "dashed",
        middleColor: "yellow",
        sideStyle: "filled",
        sideColor: "white"
      }
    ],
    snowPole: [
      {
        pic: base + "no/no_snowpole.png",
        colors: ["orange","white"]
      }
    ],
    telePole: [
      {
        pic: base + "no/no_telepole.png",
      }
    ],
    signSpeed: [
      {
        pic: base + "no/no_sign-speed.svg",
        colors: ["black", "white", "red"],
        text: "Number",
      },
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
      },
    ],
    signRoads: [
      {
        pic: base + "no/no_sign_road1.png",
        colors: ["blue","white"],
      },
      {
        pic: base + "no/no_sign_road2.png",
        colors: ["yellow","black"],
      },
    ]
  },
  {
    name: "Nepal",
    capital: ["Kathmandu"],
    domain: "np",
    region: ["Asia"],
    flag: {
      pic: base + "np/np_flag.svg",
      proportions: "1.22:1",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Nepali"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Nepal",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Nauru",
    capital: ["Yaren"],
    domain: "nr",
    region: ["Oceania","Micronesia"],
    flag: {
      pic: base + "nr/nr_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Nauruan", "English"],
    links: {
      location:
        "https://www.google.se/maps/place/Nauru/@-0.5279585,166.9248318,7411m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6f7d1c1f1de45b4d:0x59d99df4c5d40a81!8m2!3d-0.522778!4d166.931503!16zL20vMDVicjI?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Nauru",
    },
  },
  {
    name: "Niue",
    capital: ["Alofi"],
    domain: "nu",
    region: ["Oceania","Polynesia"],
    flag: {
      pic: base + "nu/nu_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white", "yellow"],
      emblem: "",
    },
    sovereignTo: "nz",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Niuean", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Niue",
    },
  },
  {
    name: "New Zealand",
    capital: ["Wellington"],
    domain: "nz",
    region: ["Oceania"],
    flag: {
      pic: base + "nz/nz_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Māori"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/New_Zealand",
    },
    roadMarkings: [
      {
        pic: base + "nz/nz_road_markings.png",
        colors: ["white"],
      },
    ],
    bollard: [
      {
        pic: base + "nz/nz_bollard.png",
        colors: ["white", "red"],
        reflector: ["red"],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Oman",
    capital: ["Muscat"],
    domain: "om",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "om/om_flag.svg",
      proportions: "4:7",
      colors: ["white", "red", "green"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Oman",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Panama",
    capital: ["Panama City"],
    domain: "pa",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "pa/pa_flag.svg",
      proportions: "2:3",
      colors: ["white", "red", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Panama",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Peru",
    capital: ["Lima"],
    domain: "pe",
    region: ["South America"],
    flag: {
      pic: base + "pe/pe_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Peru",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "French Polynesia",
    capital: ["Papeete"],
    domain: "pf",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "pf/pf_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: base + "pf/pf_coat_of_arms.svg",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/French_Polynesia",
    },
  },
  {
    name: "Papa New Guinea",
    capital: ["Port Moresby"],
    domain: "pg",
    region: ["Oceania", "Melanesia"],
    flag: {
      pic: base + "pg/pg_flag.svg",
      proportions: "3:4",
      colors: ["red", "black", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Tok Pisin", "Hiri Motu"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Papa_New_Guinea",
    },
  },
  {
    name: "Philippines",
    capital: ["Manila"],
    domain: "ph",
    region: ["Asia"],
    flag: {
      pic: base + "ph/ph_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Filipino", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Philippines",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Pakistan",
    capital: ["Islamabad"],
    domain: "pk",
    region: ["Asia"],
    flag: {
      pic: base + "pk/pk_flag.svg",
      proportions: "2:3",
      colors: ["green", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Urdu", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Pakistan",
    },
  },
  {
    name: "Poland",
    capital: ["Warsaw"],
    domain: "pl",
    region: ["Europe"],
    flag: {
      pic: base + "pl/pl_flag.svg",
      proportions: "5:8",
      colors: ["white", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Polish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Poland",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Saint-Pierre and Miquelon",
    capital: ["Saint-Pierre"],
    domain: "pm",
    region: ["North America"],
    flag: {
      pic: base + "pm/pm_flag.svg",
      proportions: "2:3",
      colors: ["red", "green", "white", "blue", "yellow", "black"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["French"],
    links: {
      location:
        "https://www.google.se/maps/place/Saint-Pierre-et-Miquelon/@46.9581656,-56.4180448,80931m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4b6c4b4bfb0e57d1:0x9c716737ea6c5c11!8m2!3d46.8852!4d-56.3159!16zL20vMDZzNGM?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Saint_Pierre_and_Miquelon",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Pitcairn Islands",
    capital: ["Adamstown"],
    domain: "pn",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "pn/pn_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "blue"],
      emblem: base + "pn/pn_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Pitkern"],
    links: {
      location:
        "https://www.google.se/maps/place/Pitcairn+Islands/@-24.3976088,-132.7438623,1727768m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9e380f7fdca8078b:0x469c8cc719159ac8!8m2!3d-24.3767537!4d-128.3242376!16zL20vMDV2ZDU?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Pitcairn_Islands",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Puerto Rico",
    capital: ["San Juan"],
    domain: "pr",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "pr/pr_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    sovereignTo: "us",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Puerto_Rico",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Palestine",
    capital: ["East Jerusalem", "Ramallah"],
    domain: "ps",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "ps/ps_flag.svg",
      proportions: "1:2",
      colors: ["black", "white", "green", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Palestine",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Portugal",
    capital: ["Lisbon"],
    domain: "pt",
    region: ["Europe"],
    flag: {
      pic: base + "pt/pt_flag.svg",
      proportions: "2:3",
      colors: ["green", "red"],
      emblem: base + "pt/pt_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Portuguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Portugal",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Palau",
    capital: ["Ngerulmud"],
    domain: "pw",
    region: ["Oceania", "Micronesia"],
    flag: {
      pic: base + "pw/pw_flag.svg",
      proportions: "5:8",
      colors: ["blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Palauan", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Palau",
    },
  },
  {
    name: "Paraguay",
    capital: ["Asunción"],
    domain: "py",
    region: ["South America"],
    flag: {
      pic: base + "py/py_flag.svg",
      proportions: "11:20",
      colors: ["red", "white", "blue"],
      emblem: base + "py/py_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish", "Guarani"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Paraguay",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Qatar",
    capital: ["Doha"],
    domain: "qa",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "qa/qa_flag.svg",
      proportions: "11:28",
      colors: ["white", "maroon"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Qatar",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Réunion",
    capital: [""],
    domain: "re",
    region: ["Africa", "Indian Ocean"],
    flag: {
      pic: base + "re/re_flag.svg",
      proportions: "2:3",
      colors: ["blue", "red", "yellow"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["French"],
    links: {
      location:
        "https://www.google.se/maps/place/R%C3%A9union/@-21.1349422,55.3621595,110456m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2178778110b8e43b:0x4a7f8e89ecdbeaf9!8m2!3d-21.115141!4d55.536384!16zL20vMGx4aGo?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Réunion",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Romania",
    capital: ["Bucharest"],
    domain: "ro",
    region: ["Europe"],
    flag: {
      pic: base + "ro/ro_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Romanian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Romania",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Serbia",
    capital: ["Belgrade"],
    domain: "rs",
    region: ["Europe", "Balkans"],
    flag: {
      pic: base + "rs/rs_flag.svg",
      proportions: "2:3",
      colors: ["red", "blue", "white"],
      emblem: base + "rs/rs_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Serbiean"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Serbia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Russia",
    capital: ["Moscow"],
    domain: "ru",
    region: ["Asia", "Europe"],
    flag: {
      pic: base + "ru/ru_flag.svg",
      proportions: "2:3",
      colors: ["white", "blue", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Russia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Rwanda",
    capital: ["Kigali"],
    domain: "rw",
    region: ["Africa"],
    flag: {
      pic: base + "rw/rw_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "green"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Kinyarwanda", "French", "English", "Swahili"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Rwanda",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Saudi Arabia",
    capital: ["Riyadh"],
    domain: "sa",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "sa/sa_flag.svg",
      proportions: "2:3",
      colors: ["green", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Saudi_Arabia",
    },
  },
  {
    name: "Solomon Islands",
    capital: ["Honiara"],
    domain: "sb",
    region: ["Oceania", "Melanesia"],
    flag: {
      pic: base + "sb/sb_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/Solomon+Islands/@-8.7493052,157.3678978,3750216m/data=!3m2!1e3!4b1!4m6!3m5!1s0x68d351e0555009d1:0xb44cc0a017442980!8m2!3d-9.64571!4d160.156194!16zL20vMDFuOHFn?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Solomon_Islands",
    },
  },
  {
    name: "Seychelles",
    capital: ["Victoria"],
    domain: "sc",
    region: ["Africa", "Indian Ocean"],
    flag: {
      pic: base + "sc/sc_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "red", "white", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Seychellois Creole", "English", "French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Seychelles",
    },
  },
  {
    name: "Sudan",
    capital: ["Khartoum"],
    domain: "sd",
    region: ["Africa"],
    flag: {
      pic: base + "sd/sd_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "black", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Sudan",
    },
  },
  {
    name: "Sweden",
    capital: ["Stockholm"],
    domain: "se",
    region: ["Europe", "Nordic"],
    flag: {
      pic: base + "se/se_flag.svg",
      proportions: "5:8",
      colors: ["blue", "yellow"],
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Swedish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Cocos_Islands",
      plonkit: "https://www.plonkit.net/sweden",
      road_signs: "https://en.wikipedia.org/wiki/Road_signs_in_Sweden",
    },
    bollard: [
      {
        pic: base + "se/se_bollard.png",
        colors: ["white", "black"],
        reflector: ["white"],
      },
    ],
    roadMarkings: [
      {
        pic: base + "se/se_road.png",
        middleStyle: "dashed",
        middleColor: "white",
        sideStyle: "dashed",
        sideColor: "white"
      }
    ],
    snowPole: [
      {
        pic: base + "se/se_snowpole.png",
        colors: ["orange","white"]
      }
    ],
    telePole: [
      {
        pic: base + "se/se_telepole.png",
      }
    ],
    signSpeed: [
      {
        pic: base + "se/se_sign-speed.svg",
        colors: ["black", "yellow", "red"],
        text: "Number",
      },
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
      },
    ],
    signRoads: [
      {
        pic: base + "se/se_sign_road1.png",
        colors: ["green","white"],
      },
      {
        pic: base + "se/se_sign_road2.png",
        colors: ["blue","white"],
      }
    ]
  },
  {
    name: "Singapore",
    capital: ["Singapore"],
    domain: "sg",
    region: ["Asia"],
    flag: {
      pic: base + "sg/sg_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Chinese", "Malay", "Tamil"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Singapore",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "St. Helena, Ascension, Tristan da Cunha",
    capital: ["Jamestown", "Georgetown", "Edinburgh of the Seven Seas"],
    domain: "sh",
    region: ["Africa", "Atlantic"],
    flag: {
      pic: base + "sh/sh_flag.svg",
      proportions: "1:2",
      colors: ["white", "red", "blue"],
      emblem: "",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia:
        "https://en.wikipedia.org/wiki/Saint_Helena_and_Tristan_da_Cunha",
    },
  },
  {
    name: "Slovenia",
    capital: ["Ljubljana"],
    domain: "si",
    region: ["Europe"],
    flag: {
      pic: base + "si/si_flag.svg",
      proportions: "1:2",
      colors: ["white", "blue", "red"],
      emblem: base + "si/se_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Slovenian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Slovenia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Slovakia",
    capital: ["Bratislava"],
    domain: "sk",
    region: ["Europe"],
    flag: {
      pic: base + "sk/sk_flag.svg",
      proportions: "2:3",
      colors: ["white", "blue", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Slovak"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Slovakia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Sierra Leone",
    capital: ["Freetown"],
    domain: "sl",
    region: ["Africa"],
    flag: {
      pic: base + "sl/sl_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Sierra_Leone",
    },
  },
  {
    name: "San Marino",
    capital: ["City of San Marino"],
    domain: "sm",
    region: ["Europe"],
    flag: {
      pic: base + "sm/sm_flag.svg",
      proportions: "3:4",
      colors: ["white", "blue"],
      emblem: base + "sm/sm_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Italian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/San_Marino",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Senegal",
    capital: ["Dakar"],
    domain: "sn",
    region: ["Africa"],
    flag: {
      pic: base + "sn/sn_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Senegal",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Somalia",
    capital: ["Mogadishu"],
    domain: "so",
    region: ["Africa"],
    flag: {
      pic: base + "so/so_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Somali", "Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Somalia",
    },
  },
  {
    name: "Suriname",
    capital: ["Paramaribo"],
    domain: "sr",
    region: ["South America"],
    flag: {
      pic: base + "sr/sr_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Dutch", "Sranan Tongo"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Suriname",
    },
  },
  {
    name: "South Sudan",
    capital: ["Juba"],
    domain: "ss",
    region: ["Africa"],
    flag: {
      pic: base + "ss/ss_flag.svg",
      proportions: "1:2",
      colors: ["black", "red", "green", "blue", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["English", "Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/South_Sudan",
    },
  },
  {
    name: "São Tomé and Príncipe",
    capital: ["São Tomé"],
    domain: "st",
    region: ["Africa", "Atlantic"],
    flag: {
      pic: base + "st/st_flag.svg",
      proportions: "1:2",
      colors: ["green", "yellow", "red", "black"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Portuguese"],
    links: {
      location:
        "https://www.google.se/maps/place/S%C3%A3o+Tom%C3%A9+och+Pr%C3%ADncipe/@0.8985862,6.3327693,447671m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1070ecf90b9ad889:0x6251230c557630ea!8m2!3d0.18636!4d6.613081!16zL20vMGo2ODE?hl=sv&entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/São_Tomé_and_Príncipe",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Soviet Union",
    capital: ["Moscow"],
    domain: "su",
    region: ["Europe", "Asia"],
    flag: {
      pic: base + "su/su_flag.svg",
      proportions: "1:2",
      colors: ["red", "yellow"],
      emblem: "",
    },
    sovereignTo: "none",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Soviet_Union",
    },
  },
  {
    name: "El Salvador",
    capital: ["San Salvador"],
    domain: "sv",
    region: ["North America", "Central America"],
    flag: {
      pic: base + "sv/sv_flag.svg",
      proportions: "9:16",
      colors: ["blue", "white"],
      emblem: base + "sv/sv_coat_of_arms.svg",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/El_Salvador",
    },
  },
  {
    name: "Sint Maarten",
    capital: ["Philipsburg"],
    domain: "sx",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "sx/sx_flag.svg",
      proportions: "2:3",
      colors: ["red", "blue", "white"],
      emblem: base + "sx/sx_emblem.svg",
    },
    sovereignTo: "nl",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Dutch", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Sint_Maarten",
    },
  },
  {
    name: "Syria",
    capital: ["Damascus"],
    domain: "sy",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "sy/sy_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "black", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Syria",
    },
  },
  {
    name: "Eswatini",
    capital: ["Mbabane", "Lobamba"],
    domain: "sz",
    region: ["Africa"],
    flag: {
      pic: base + "sz/sz_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "red", "black", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["SiSwati", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Eswatini",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Turks and Caicos Islands",
    capital: ["Grand Turk (Cockburn Town)"],
    domain: "tc",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "tc/tc_flag.svg",
      proportions: "1:2",
      colors: ["white", "blue", "red"],
      emblem: base + "tc/tc_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      location:
        "https://www.google.se/maps/place/TKCA+1ZZ,+Turks+och+Caicos+Islands/@21.5704314,-73.0393662,440511m/data=!3m2!1e3!4b1!4m6!3m5!1s0x894b5f55bebb6b75:0x7e11c780028dc1de!8m2!3d21.694025!4d-71.797928!16zL20vMDdmcl8?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Turks_and_Caicos_Islands",
    },
  },
  {
    name: "Chad",
    capital: ["N'Djamena"],
    domain: "td",
    region: ["Africa"],
    flag: {
      pic: base + "td/td_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French", "Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Chad",
    },
  },
  {
    name: "French S. & Antarctic Lands",
    capital: ["Saint-Pierre"],
    domain: "tf",
    region: ["Africa", "Antarctica"],
    flag: {
      pic: base + "tf/tf_flag.svg",
      proportions: "2:3",
      colors: ["blue", "white", "red"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: null,
    languages: ["French"],
    links: {
      wikipedia:
        "https://en.wikipedia.org/wiki/French_Southern_and_Antarctic_Lands",
    },
  },
  {
    name: "Togo",
    capital: ["Lomé"],
    domain: "tg",
    region: ["Africa"],
    flag: {
      pic: base + "tg/tg_flag.svg",
      proportions: "3:5", // and more
      colors: ["red", "green", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Togo",
    },
  },
  {
    name: "Thailand",
    capital: ["Bangkok"],
    domain: "th",
    region: ["Asia"],
    flag: {
      pic: base + "th/th_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Thai"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Thailand",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Tajikistan",
    capital: ["Dushanbe"],
    domain: "tj",
    region: ["Asia"],
    flag: {
      pic: base + "tj/tj_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "green", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Tajik", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tajikistan",
    },
  },
  {
    name: "Tokelau",
    capital: [""],
    domain: "tk",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "tk/tk_flag.svg",
      proportions: "1:2",
      colors: ["blue", "yellow", "white"],
      emblem: "",
    },
    sovereignTo: "nz",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Tokelauan", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tokelau",
    },
  },
  {
    name: "East Timor",
    capital: ["Dili"],
    domain: "tl",
    region: ["Asia"],
    flag: {
      pic: base + "tl/tl_flag.svg",
      proportions: "1:2",
      colors: ["red", "yellow", "black", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Tetum", "Portuguese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/East_Timor",
    },
  },
  {
    name: "Turkmenistan",
    capital: ["Ashgabat"],
    domain: "tm",
    region: ["Asia"],
    flag: {
      pic: base + "tm/tm_flag.svg",
      proportions: "2:3",
      colors: ["green", "white", "red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Turkmen", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Turkmenistan",
    },
  },
  {
    name: "Tunisia",
    capital: ["Tunis"],
    domain: "tn",
    region: ["Africa"],
    flag: {
      pic: base + "tn/tn_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tunisia",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Tonga",
    capital: ["Nukuʻalofa"],
    domain: "to",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "to/to_flag.svg",
      proportions: "1:2",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Tongan", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tonga",
    },
  },
  {
    name: "Turkey",
    capital: ["Ankara"],
    domain: "tr",
    region: ["Asia", "Europe"],
    flag: {
      pic: base + "tr/tr_flag.svg",
      proportions: "2:3",
      colors: ["red", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Turkish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Turkey",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Trinidad and Tobago",
    capital: ["Port of Spain"],
    domain: "tt",
    region: ["North America","Caribbean"],
    flag: {
      pic: base + "tt/tt_flag.svg",
      proportions: "3:5",
      colors: ["red", "white", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Trinidad_and_Tobago",
    },
  },
  {
    name: "Tuvalu",
    capital: ["Funafuti"],
    domain: "tv",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "tv/tv_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Tuvaluan", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tuvalu",
    },
  },
  {
    name: "Taiwan",
    capital: ["Taipei"],
    domain: "tw",
    region: ["Asia"],
    flag: {
      pic: base + "tw/tw_flag.svg",
      proportions: "2:3",
      colors: ["red", "blue", "white"],
      emblem: "",
    },
    sovereignTo: "???",
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Chinese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Taiwan",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Tanzania",
    capital: ["Dodoma", "Dar es Salaam"],
    domain: "tz",
    region: ["Africa"],
    flag: {
      pic: base + "tz/tz_flag.svg",
      proportions: "2:3",
      colors: ["green", "yellow", "black", "blue"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Swahili", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Tanzania",
    },
  },
  {
    name: "Ukraine",
    capital: ["Kyiv"],
    domain: "ua",
    region: ["Europe"],
    flag: {
      pic: base + "ua/ua_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Ukrainian", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Ukraine",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Uganda",
    capital: ["Kampala"],
    domain: "ug",
    region: ["Africa"],
    flag: {
      pic: base + "ug/ug_flag.svg",
      proportions: "2:3",
      colors: ["black", "yellow", "red"],
      emblem: base + "ug/ug_coat_of_arms.svg",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English", "Swahili"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Uganda",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "United Kingdom",
    capital: ["London"],
    domain: "uk",
    region: ["Europe"],
    flag: {
      pic: base + "uk/uk_flag.svg",
      proportions: "1:2",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/United_Kingdom",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "United States of America",
    capital: ["Washington, DC"],
    domain: "us",
    region: ["North America"],
    flag: {
      pic: base + "us/us_flag.svg",
      proportions: "10:19",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/United_States",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Uruguay",
    capital: ["Montevideo"],
    domain: "uy",
    region: ["South America"],
    flag: {
      pic: base + "uy/uy_flag.svg",
      proportions: "2:3",
      colors: ["white", "blue", "yellow", "brown"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Uruguay",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Uzbekistan",
    capital: ["Tashkent"],
    domain: "uz",
    region: ["Asia"],
    flag: {
      pic: base + "uz/uz_flag.svg",
      proportions: "1:2",
      colors: ["blue", "white", "green", "red"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Uzbek", "Russian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Uzbekistan",
    },
  },
  {
    name: "Vatican City",
    capital: ["Vatican City"],
    domain: "va",
    region: ["Europe"],
    flag: {
      pic: base + "va/va_flag.svg",
      proportions: "1:1",
      colors: ["yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Latin", "Italian"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Vatican_City",
    },
  },
  {
    name: "Saint Vincent and the Grenadines",
    capital: ["Kingstown"],
    domain: "vc",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "vc/vc_flag.svg",
      proportions: "2:3",
      colors: ["blue", "yellow", "green"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia:
        "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines",
    },
  },
  {
    name: "Venezuela",
    capital: ["Caracas"],
    domain: "ve",
    region: ["South America"],
    flag: {
      pic: base + "ve/ve_flag.svg",
      proportions: "2:3",
      colors: ["yellow", "blue", "red", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Spanish"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Venezuela",
    },
  },
  {
    name: "British Virgin Islands",
    capital: ["Road Town"],
    domain: "vg",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "vg/vg_flag.svg",
      proportions: "1:2",
      colors: ["blue", "red", "white"],
      emblem: base + "vg/vg_coat_of_arms.svg",
    },
    sovereignTo: "uk",
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/British_Virgin_Islands",
    },
  },
  {
    name: "United States Virgin Islands",
    capital: ["Charlotte Amalie"],
    domain: "vi",
    region: ["North America", "Caribbean"],
    flag: {
      pic: base + "vi/vi_flag.svg",
      proportions: "2:3",
      colors: ["white", "blue", "yellow", "green", "red"],
      emblem: "",
    },
    sovereignTo: "us",
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/United_States_Virgin_Islands",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Vietnam",
    capital: ["Hanoi"],
    domain: "vn",
    region: ["Asia"],
    flag: {
      pic: base + "vn/vn_flag.svg",
      proportions: "2:3",
      colors: ["red", "yellow"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "right",
    languages: ["Vietnamese"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Vietnam",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Vanuatu",
    capital: ["Port Vila"],
    domain: "vu",
    region: ["Oceania", "Melanesia"],
    flag: {
      pic: base + "vu/vu_flag.svg",
      proportions: "2:3",
      colors: ["red", "green", "yellow", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Bislama", "English", "French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Vanuatu",
    },
  },
  {
    name: "Wallis and Futuna",
    capital: ["Mata Utu"],
    domain: "wf",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "wf/wf_flag.svg",
      proportions: "2:3",
      colors: ["blue", "red", "white"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      location:
        "https://www.google.se/maps/place/Wallis-+och+Futuna%C3%B6arna/@-13.7722973,-177.8234773,460067m/data=!3m2!1e3!4b1!4m6!3m5!1s0x71c8b1066e1a4b3d:0x16c918ec8fd20a1b!8m2!3d-14.2938!4d-178.1165!16zL20vMDgybnc?hl=sv&entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D",
      wikipedia: "https://en.wikipedia.org/wiki/Wallis_and_Futuna",
    },
  },
  {
    name: "Samoa",
    capital: ["Apia"],
    domain: "ws",
    region: ["Oceania", "Polynesia"],
    flag: {
      pic: base + "ws/ws_flag.svg",
      proportions: "1:2",
      colors: ["red", "blue", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["Samoan", "English"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Samoa",
    },
  },
  {
    name: "Yemen",
    capital: ["Sanaa"],
    domain: "ye",
    region: ["Asia", "Middle East"],
    flag: {
      pic: base + "ye/ye_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "black"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["Arabic"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Yemen",
    },
  },
  {
    name: "Mayotte",
    capital: ["Mamoudzou"],
    domain: "yt",
    region: ["Africa", "Indian Ocean"],
    flag: {
      pic: base + "fr/fr_flag.svg",
      proportions: "2:3",
      colors: ["red", "white", "blue"],
      emblem: "",
    },
    sovereignTo: "fr",
    onGoogleMaps: false,
    drivingSide: "right",
    languages: ["French"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Mayotte",
    },
  },
  {
    name: "South Africa",
    capital: ["Pretoria", "Cape Town", "Bloemfontein"],
    domain: "za",
    region: ["Africa"],
    flag: {
      pic: base + "za/za_flag.svg",
      proportions: "2:3",
      colors: ["red", "green", "blue", "black", "yellow", "white"],
      emblem: "",
    },
    onGoogleMaps: true,
    drivingSide: "left",
    languages: ["Africaans", "English"], // and more
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/South_Africa",
    },
    bollard: [
      {
        pic: base + "",
        colors: ["", ""],
        reflector: [""],
      },
    ],
    signSpeed: [
      {
        pic: base + "",
        colors: ["", ""],
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
    name: "Zambia",
    capital: ["Lusaka"],
    domain: "zm",
    region: ["Africa"],
    flag: {
      pic: base + "zm/zm_flag.svg",
      proportions: "2:3",
      colors: ["green", "red", "black", "yellow"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Bemba"], // and more
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Zambia",
    },
  },
  {
    name: "Zimbabwe",
    capital: ["Harare"],
    domain: "zw",
    region: ["Africa"],
    flag: {
      pic: base + "zw/zw_flag.svg",
      proportions: "1:2",
      colors: ["green", "yellow", "red", "black", "white"],
      emblem: "",
    },
    onGoogleMaps: false,
    drivingSide: "left",
    languages: ["English", "Shona", "Ndebele"],
    links: {
      wikipedia: "https://en.wikipedia.org/wiki/Zimbabwe",
    },
  },
]
