import "./Options.css"
import {domainListInterface, worldFormInterface} from "./interface.tsx"
import DomainList from "./components/DomainList.tsx";
import { worldRegions } from "./worlddata/misc.tsx";
import React, {useRef} from "react";

//TODO flag color, language(french,spanish)

const jumpStops = ["ac","ba","ca","de","ec","fi","ga","hk","id","je","ke","la","ma","na","om","pa","qa","re","sa","tc","ua","va"] //,"wf","ye","za"]

interface props {
  formData: worldFormInterface,
  setFormData: React.Dispatch<React.SetStateAction<worldFormInterface>>
  domainList: domainListInterface,
  setDomainList: React.Dispatch<React.SetStateAction<domainListInterface>>
}

export default function Options(props:props) {
  const listContainerRef = useRef<HTMLDivElement>(null)
  const letterRef = useRef<{[key: string]:HTMLDivElement | null}>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const checked = e.target.checked
    const parentName = e.target.parentElement?.className as string
    // console.log(parentName)
    // console.log(name)
    switch (parentName) {
      case "soverign":
      case "on-google-maps":
      case "driving-side":
        props.setFormData((d) => {
          return {
            ...d,
            [name]: checked,
          }
        })
        break;
      case "regions-check":
        props.setFormData((d) => {
          return {
            ...d,
            regionList: {
              ...d.regionList,
              [name]: checked,
            },
          }
        })
        break;
      case "language":
        props.setFormData((d) => {
          return {
            ...d,
            languagesToShow: {
              ...d.languagesToShow,
              [name]: checked,
            },
          }
        })
        break;
      default: {
        console.log("This should not happen!")
      }
    }
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
            <DomainList refs={letterRef} data={props.domainList} setData={props.setDomainList} />
          </div>
        </section>
        <section className="check-options">
          <fieldset className="soverign">
            <legend>soverignity</legend>
            <input onChange={handleChange} type="checkbox" id="soverign" name="soverign" checked={props.formData.soverign}/>
              <label htmlFor="soverign">Soverign</label><br />
            <input onChange={handleChange} type="checkbox" id="nonSoverign" name="nonSoverign" checked={props.formData.nonSoverign}/>
              <label htmlFor="nonSoverign">Not soverign</label><br />
          </fieldset>
          <fieldset className="on-google-maps">
            <legend>streetview?</legend>
            <input onChange={handleChange} type="checkbox" id="onGoogleMaps" name="onGoogleMaps" checked={props.formData.onGoogleMaps}/>
              <label htmlFor="onGoogleMaps">On GoogleMaps</label><br />
            <input onChange={handleChange} type="checkbox" id="notOnGoogleMaps" name="notOnGoogleMaps" checked={props.formData.notOnGoogleMaps}/>
              <label htmlFor="notOnGoogleMaps">Not on GoogleMaps</label><br />
          </fieldset>
          <fieldset className="regions">
            <legend>areas</legend>
            {worldRegions.map(item => {
              const ret = item.map((reg,i) => {
                return (
                  <div key={reg} className="regions-check">
                    {i !== 0?<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>:""}
                    <input onChange={handleChange} className={reg} id={reg} type="checkbox" name={reg} checked={props.formData.regionList[reg]}/>
                    <label htmlFor={reg}>{reg}</label><br />
                  </div>
                )
              })
              return (
                <div key={item[0]}>{ret}</div>
              )
            })}
          </fieldset>
          <fieldset className="driving-side">
            <legend>drivingside</legend>
            <input onChange={handleChange} type="checkbox" id="driveRight" name="driveRight" checked={props.formData.driveRight}/>
              <label htmlFor="driveRight">right</label><br />
            <input onChange={handleChange} type="checkbox" id="driveLeft" name="driveLeft" checked={props.formData.driveLeft}/>
              <label htmlFor="driveLeft">left</label><br />
          </fieldset>
          <fieldset className="language">
            <legend>only language</legend>
            <input onChange={handleChange} type="checkbox" id="lang-english" name="english" checked={props.formData.languagesToShow.english}/>
              <label htmlFor="lang-english">English</label><br />
            <input onChange={handleChange} type="checkbox" id="lang-spanish" name="spanish" checked={props.formData.languagesToShow.spanish}/>
              <label htmlFor="lang-spanish">Spanish</label><br />
            <input onChange={handleChange} type="checkbox" id="lang-french" name="french" checked={props.formData.languagesToShow.french}/>
              <label htmlFor="lang-french">French</label><br />
          </fieldset>
        </section>
      </form>
    </section>
  )
}
