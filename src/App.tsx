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
  console.log(filteredData.length)
  useEffect(() => {
    setDomainList(d => {
      d = filterData(formData)
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
  // soverign?
  ret = ret.filter(item => {
    if(formData.soverign)
      if(!item.sovereignTo) return true
    if(formData.nonSoverign)
      if(item.sovereignTo) return true
    return false
  })
  //on Google streetview?
  ret = ret.filter(item => {
    if(formData.onGoogleMaps) 
      if(item.onGoogleMaps) return true
    if(formData.notOnGoogleMaps) 
      if(!item.onGoogleMaps) return true
    return false
  })
  //world Region
  const selectedRegions:string[] = []
  for(const [key,value] of Object.entries(formData.regionList)) {
    if(value) selectedRegions.push(key)
  }
  ret = ret.filter(item => {
    return item.region.some(reg => selectedRegions.includes(reg))
  })

  // driving side
  ret = ret.filter(item => {
    if(item.drivingSide === null) return true
    if(formData.driveLeft)
      if(item.drivingSide === "left") return true
    if(formData.driveRight)
      if(item.drivingSide === "right") return true
    return false
  })

  //languages
  const selectedLanguages:string[] = []
  for(const [key,value] of Object.entries(formData.languagesToShow)) {
    if(value === true && key !== "other") selectedLanguages.push(key.charAt(0).toUpperCase() + key.slice(1))
  }
  ret = ret.filter(item => {
    if(selectedLanguages.length === 0) return true
    return item.languages?.some(lang => selectedLanguages.includes(lang))
  })

  //ret
  const trueDomainArr = ret.map(item => item.domain)
  const retObj:{[key: string]:boolean} = {}
  for (const element of worldData) {
    retObj[element.domain] = trueDomainArr.includes(element.domain)
  }
  return retObj
}
