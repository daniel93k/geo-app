import {useState} from "react"
import './App.css'
import {worldData} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import {worldFormInterface, worldFormInit} from "./interface.tsx"

export default function App() {

  const [formData, setFormData] = useState<worldFormInterface>(worldFormInit)
  const filteredData = worldData.filter(data => formData.domainList[data.domain])

  return (
    <>
      <Options
        filteredData={filteredData}
        formData={formData}
        setFormData={setFormData}
      />
      <Output data={filteredData}/>
    </>
  )
}
