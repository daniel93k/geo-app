// import {languageFeaturesInterface} from "../interface"

export const worldRegions = [
  ["Europe","Balkans","Nordic"],
  ["Asia","Caucasus","Middle East"],
  ["Africa"],
  ["North America","Central America","Caribbean"],
  ["South America"],
  ["Oceania","Micronesia","Melanesia","Polynesia"],
  ["Antarctica"],
  ["Atlantic"],
  ["Indian Ocean"],
]

export const worldTableColumns = [
  "flag",
  "flagProprortion",
  "name", 
  "domain",
  "soverignTo",
  "region",
  "bollard",
  "snowPole",
  "telePole",
  "roadMarkings",
  "signChevron",
  "signSpeed",
  "signStop",
  "signYield",
  "signCrossing",
  "signRailway",
  "signRoads",
]

export const languageFeatures = {
  catalan: {
    region: ["north west Spain"],
    alphabet: "latin",
    alphabetFeatures: ["À","à","É","é","È","è","Í","í","Ï","ï","Ó","ó","Ò","ò","Ú","ú","Ü","ü","Ç","ç"],
    words: {
      road: ["carrer"],
      mountain: ["muntanya"],
      river: ["riu"],
    }
  },
  danish: {
    region: ["Denmark"],
    alphabet: "latin",
    alphabetFeatures: ["Æ","Ø","Å","æ","ø","å"],
    words: {
      road: ["vej"],
      mountain: ["bjerg"],
      river: ["flod","å"],
    }
  },
  finnish: {
    region: ["Finland"],
    alphabet: "latin",
    alphabetFeatures: ["Å","å","Ä","ä","Ö","ö"],
    words: {
      road: ["tie"],
      mountain: ["vuori","runturi"],
      river: ["joki"],
    }
  },
  icelandic: {
    region: ["Iceland"],
    alphabet: "latin",
    alphabetFeatures: [],
    words: {
      road: ["vegur"],
      mountain: ["fjall"],
      river: ["á"],
    }
  },
  norwegian: {
    region: ["Norway"],
    alphabet: "latin",
    alphabetFeatures: ["Æ","Ø","Å","æ","ø","å"],
    words: {
      road: ["vei", "veg"],
      mountain: ["fjell"],
      river: ["elv"],
    }
  },
  swedish: {
    region: ["Sweden","parts of Finland"],
    alphabet: "latin",
    alphabetFeatures: ["Å","å","Ä","ä","Ö","ö"],
    words: {
      road: ["väg", "gata"],
      mountain: ["berg", "kulle"],
      river: ["flod","älv","å"],
    }
  },
}


