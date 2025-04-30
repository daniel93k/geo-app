import "./Options.css"
import {worldFormInterface} from "./interface.tsx"
import DomainList from "./components/DomainList.tsx";
import { worldData } from "./worlddata/worlddata.tsx";

interface props {
  formData: worldFormInterface,
  setFormData: React.Dispatch<React.SetStateAction<worldFormInterface>>
}

export default function Options(props:props) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const type = e.target.type
    const name = e.target.name
    const checked = e.target.checked
    const newData = {...props.formData, [name]: checked} as worldFormInterface
    const newDomainList = filterData(newData)
    if (type === "checkbox") {
      props.setFormData(d => {
        return {
          ...d,
          [name]: checked,
          domainList: newDomainList,
        }
      })
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
            <DomainList data={props.formData} setData={props.setFormData}
            />
          </section>
        </section>
      </form>
    </div>
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

  ret = ret.filter((item) => {
    if(formData.onGoogleMaps) 
      if(item.onGoogleMaps) return true
    if(formData.notOnGoogleMaps) 
      if(!item.onGoogleMaps) return true
    return false
  })

  const trueDomainArr = ret.map(item => item.domain)
  const retObj:{[key: string]:boolean} = {}
  for (const element of worldData) {
    retObj[element.domain] = trueDomainArr.includes(element.domain)
  }

  return retObj

}