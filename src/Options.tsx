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
    console.log(e.target)

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
              <input onChange={handleChange} type="checkbox" id="non-soverign" name="nonSoverign" checked={props.formData.nonSoverign}/>
                <label htmlFor="non-soverign">Not soverign</label><br />
            </fieldset>
            <fieldset>
              <input onChange={handleChange} type="checkbox" id="googleMapsCoverage" name="googleMapsCoverage" checked={props.formData.googleMapsCoverage}/>
                <label htmlFor="googleMapsCoverage">googleMaps</label><br />
              <input onChange={handleChange} type="checkbox" id="non-googleMapsCoverage" name="nonGoogleMapsCoverage" checked={props.formData.nonGoogleMapsCoverage}/>
                <label htmlFor="non-googleMapsCoverage">Non-googleMaps</label><br />
            </fieldset>
          <section className="list">
            <DomainList data={props.data} setData={props.setData}/>
          </section>
        </section>
      </form>
    </div>
  )
}
