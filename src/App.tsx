import {useState} from "react"
import './App.css'
import {worldData} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import {worldDataInterface, worldFormInterface, worldFormInit} from "./interface.tsx"

export default function App() {

  console.log(worldData.length)
  const [formData, setFormData] = useState<worldFormInterface>(worldFormInit)
  console.log(formData)
  formData.domainList = worldData
  const filteredWorldData = filterData(worldData, formData)

  return (
    <>
      <Options filteredData={filteredWorldData} worldData={worldData} formData={formData} setFormData={setFormData}/>
      <Output filteredData={filteredWorldData}/>
    </>
  )
}

function filterData(worldData:worldDataInterface[], formData:worldFormInterface) {
  let ret = worldData
  ret = ret.filter(item => {
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