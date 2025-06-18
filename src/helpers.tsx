import { worldData } from "./worlddata/worlddata";
// get all flag colors

export function getFlagColors() {
  let colors = []
  for (const country of worldData) {
    // console.log(country.flag?.colors)
    colors.push(country.flag?.colors)
  }
  colors = colors.flat()
  const uniqeColors = [...new Set(colors)]
  console.log(uniqeColors)
}
