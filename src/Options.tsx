import "./Options.css"
import {worldFormInterface} from "./interface.tsx"
import DomainList from "./components/DomainList.tsx";
import { worldData } from "./worlddata/worlddata.tsx";
import { worldRegions } from "./worlddata/regions.tsx";
import React, {useRef} from "react";

const jumpStops = ["ac","ba","ca","de","ec","fi","ga","hk","id","je","ke","la","ma","na","om","pa","qa","re","sa","tc","ua","va"] //,"wf","ye","za"]

interface props {
  formData: worldFormInterface,
  setFormData: React.Dispatch<React.SetStateAction<worldFormInterface>>
}

export default function Options(props:props) {
  const listContainerRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<{[key: string]:HTMLDivElement | null}>({})

  function handleBasicChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const checked = e.target.checked
    const newData = {...props.formData, [name]: checked} as worldFormInterface
    const newDomainList = filterData(newData)
    props.setFormData((d) => {
      return {
        ...d,
        [name]: checked,
        domainList: newDomainList,
      }
    })
  }
  function handleRegionChange(e:React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const checked = e.target.checked
    const newData = {...props.formData, regionList:{...props.formData.regionList,[name]: checked}} as worldFormInterface
    const newDomainList = filterData(newData)
    props.setFormData((d) => {
      return {
        ...d,
        regionList: {
          ...d.regionList,
          [name]: checked,
        },
        domainList: newDomainList,
      }
    })

  }

  function sortClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const container = listContainerRef.current;
    const target = letterRef.current;
    const clicked = e.target as HTMLDivElement
    if (container && target) {
      let topOffset = target[clicked.className]!.offsetTop - container.offsetTop;
      topOffset -= 30;
      container.scrollTo({
        top: topOffset,
        behavior: 'instant',
      });
    }
  }

  function formAction() {
    console.log("formAction")
  }
  return (
    <section className="Options">
      <form action={formAction} className="form1">
        <section className="domain-list" ref={listContainerRef}>
          <div className="jump-stops">
            {jumpStops.map(item => <div key={item} className={item} onClick={sortClick}>{item[0]}</div>)}
          </div>
          <div className="cctld-list">
            <DomainList refs={letterRef} data={props.formData} setData={props.setFormData} />
          </div>
        </section>
        <section className="check-options">
          <div className="soverign">
            <input onChange={handleBasicChange} type="checkbox" id="soverign" name="soverign" checked={props.formData.soverign}/>
              <label htmlFor="soverign">Soverign</label><br />
            <input onChange={handleBasicChange} type="checkbox" id="nonSoverign" name="nonSoverign" checked={props.formData.nonSoverign}/>
              <label htmlFor="nonSoverign">Not soverign</label><br />
          </div>
          <div className="on-google-maps">
            <input onChange={handleBasicChange} type="checkbox" id="onGoogleMaps" name="onGoogleMaps" checked={props.formData.onGoogleMaps}/>
              <label htmlFor="onGoogleMaps">On GoogleMaps</label><br />
            <input onChange={handleBasicChange} type="checkbox" id="notOnGoogleMaps" name="notOnGoogleMaps" checked={props.formData.notOnGoogleMaps}/>
              <label htmlFor="notOnGoogleMaps">Not on GoogleMaps</label><br />
          </div>
          <div className="regions">
            {worldRegions.map(item => {
              const ret = item.map((reg,i) => {
                return (
                  <div key={reg}>
                    {i !== 0?<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>:""}
                    <input onChange={handleRegionChange} className={reg} id={reg} type="checkbox" name={reg} checked={props.formData.regionList[reg]}/>
                    <label htmlFor={reg}>{reg}</label><br />
                  </div>
                )
              })
              return (
                <div key={item[0]}>{ret}</div>
              )
            })}
          </div>
        </section>
      </form>
    </section>
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