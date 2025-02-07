import {useState} from "react"
import './App.css'
import {worldData} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import worldInterface from "./interface.tsx"

export default function App() {

  const [data, setData] = useState<worldInterface[]>(worldData)

  return (
    <>
      <Options data={data} setData={setData}/>
      <Output data={data}/>
    </>
  )
}
