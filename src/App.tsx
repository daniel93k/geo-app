import {useEffect, useState} from "react"
import './App.css'
import {worldData} from "./worlddata/worlddata.tsx"
import Options from "./Options.tsx"
import Output from "./Output.tsx"
import {worldFormInterface, initWorldForm, worldColumnInterface, initWorldColumns, domainListInterface, initDomainList} from "./interface.tsx"
import OutputOptions from "./components/OutputOptions.tsx"

export default function App() {

  const [formData, setFormData] = useState<worldFormInterface>(initWorldForm)
  const [domainList, setDomainList] = useState<domainListInterface>(initDomainList())
  const [columnData, setColumnData] = useState<worldColumnInterface>(initWorldColumns())
  const filteredData = worldData.filter(data => domainList[data.domain])

  useEffect(() => {
    setDomainList(d => {
      d = filterData(formData)
      console.log(d)
      return d
    })

  },[formData])

  return (
    <>
      <Options
        formData={formData}
        setFormData={setFormData}
        domainList={domainList}
        setDomainList={setDomainList}
      />
      <OutputOptions options={columnData} setOptions={setColumnData}/>
      <Output data={filteredData} columns={columnData}/>
    </>
  )
}

function filterData(formData:worldFormInterface) {
  let ret = worldData
  ret = ret.filter(item => {
    if(formData.soverign)
      if(!item.sovereignTo) return true
    if(formData.nonSoverign)
      if(item.sovereignTo) return true
    return false
  })

  ret = ret.filter(item => {
    if(formData.onGoogleMaps) 
      if(item.onGoogleMaps) return true
    if(formData.notOnGoogleMaps) 
      if(!item.onGoogleMaps) return true
    return false
  })

  const selectedRegions:string[] = []
  for(const [key,value] of Object.entries(formData.regionList)) {
    if(value) selectedRegions.push(key)
  }
  ret = ret.filter(item => {
    return item.region.some(reg => selectedRegions.includes(reg))
  })

  const trueDomainArr = ret.map(item => item.domain)
  const retObj:{[key: string]:boolean} = {}
  for (const element of worldData) {
    retObj[element.domain] = trueDomainArr.includes(element.domain)
  }

  return retObj

}
