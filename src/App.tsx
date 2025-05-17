import {useState} from "react"
import './App.css'
import {worldData} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import {worldFormInterface, worldFormInit, worldColumnInterface, initWorldColumns} from "./interface.tsx"
import OutputOptions from "./components/OutputOptions.tsx"

export default function App() {

  const [formData, setFormData] = useState<worldFormInterface>(worldFormInit)
  const [columnData, setColumnData] = useState<worldColumnInterface>(initWorldColumns())
  // console.log(worldData.filter(i => i.languages?.includes("French")))
  const filteredData = worldData.filter(data => formData.domainList[data.domain])

  return (
    <>
      <Options
        formData={formData}
        setFormData={setFormData}
      />
      <OutputOptions options={columnData} setOptions={setColumnData}/>
      <Output data={filteredData} columns={columnData}/>
    </>
  )
}
