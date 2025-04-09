import {useState} from "react"
import './App.css'
import {worldData as dataInput} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import {worldDataInterface, worldFormInterface, worldFormInit} from "./interface.tsx"

export default function App() {

  const [worldData, setworldData] = useState<worldDataInterface[]>(dataInput)
  const [formData, setFormData] = useState<worldFormInterface>(worldFormInit)
  const filteredWorldData = filterData(worldData, formData)

  return (
    <>
      <Options data={worldData} setData={setworldData} formData={formData} setFormData={setFormData}/>
      <Output data={filteredWorldData}/>
    </>
  )
}

function filterData(worldData:worldDataInterface[], formData:worldFormInterface) {
  console.log(formData)
  let ret = worldData.filter(item => {
    if(formData.soverign)
      if(!item.sovereignTo) return true
    if(formData.nonSoverign)
      if(item.sovereignTo) return true
    return false
  })

  ret = ret.filter((item) => {
    if(formData.onGoogleMaps) 
      if(item.onGoogleMaps) return true
    if(formData.notOnGoogleMaps) 
      if(!item.onGoogleMaps) return true
    return false
  })

  return ret

}