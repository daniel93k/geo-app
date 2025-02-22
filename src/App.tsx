import {useEffect, useState} from "react"
import './App.css'
import {worldData} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import {worldDataInterface, worldFormInterface} from "./interface.tsx"

export default function App() {

  const [data, setData] = useState<worldDataInterface[]>(worldData)
  const [formData, setFormData] = useState<worldFormInterface>({
    soverign: true,
    nonSoverign: true,
  })
  useEffect(() => {
    setData(worldData.filter(item => {
        if(formData.soverign)
          if(!item.sovereignTo) return true
        if(formData.nonSoverign)
          if(item.sovereignTo) return true

        return false
      })
    )

  },[formData])

  return (
    <>
      <Options data={data} setData={setData} formData={formData} setFormData={setFormData}/>
      <Output data={data}/>
    </>
  )
}
