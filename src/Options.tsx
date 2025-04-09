import "./Options.css"
import {worldDataInterface, worldFormInterface} from "./interface.tsx"
import DomainList from "./components/DomainList.tsx";
// import {worldData} from "./worlddata/worlddata.tsx";
// import {useEffect, useState} from "react";

interface props {
  data: worldDataInterface[]
  setData: React.Dispatch<React.SetStateAction<worldDataInterface[]>>
  formData: worldFormInterface,
  setFormData: React.Dispatch<React.SetStateAction<worldFormInterface>>
}


export default function Options(props:props) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const type = e.target.type
    const name = e.target.name

    if(type === "checkbox") {
      const checked = e.target.checked
      props.setFormData(p => ({...p,[name]:checked}))
    }
  }

  function formAction() {
    console.log("formAction")
  }

  return (
    <div className="Options">
      <form action={formAction} className="form1">
        <section className="domain">
            <fieldset>
              <input onChange={handleChange} type="checkbox" id="soverign" name="soverign" checked={props.formData.soverign}/>
                <label htmlFor="soverign">Soverign</label><br />
              <input onChange={handleChange} type="checkbox" id="nonSoverign" name="nonSoverign" checked={props.formData.nonSoverign}/>
                <label htmlFor="nonSoverign">Not soverign</label><br />
            </fieldset>
            <fieldset>
              <input onChange={handleChange} type="checkbox" id="onGoogleMaps" name="onGoogleMaps" checked={props.formData.onGoogleMaps}/>
                <label htmlFor="onGoogleMaps">On GoogleMaps</label><br />
              <input onChange={handleChange} type="checkbox" id="notOnGoogleMaps" name="notOnGoogleMaps" checked={props.formData.notOnGoogleMaps}/>
                <label htmlFor="notOnGoogleMaps">Not on GoogleMaps</label><br />
            </fieldset>
          <section className="list">
            <DomainList data={props.data} setData={props.setData}/>
          </section>
        </section>
      </form>
    </div>
  )
}
