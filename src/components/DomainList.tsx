import "./DomainList.css"
import {worldDataInterface, worldFormInterface} from ".././interface.tsx"
import {worldData} from ".././worlddata/worlddata.tsx"

interface props {
  worldData: worldDataInterface[]
  filteredData: worldDataInterface[]
  setFormData: React.Dispatch<React.SetStateAction<worldFormInterface>>
}

export default function DomainList(props: props) {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.id)
    console.log(e.target.checked)
    // if(e.target.checked === true) {
    //   props.setFormData(old => {
    //     console.log("apapapapap")
    //     return {...old, } 
    //   })
    // }
    // if(e.target.checked === false) {
      // console.log("apap")
      // props.setFormData(old => {...old,DomainList{
      //   console.log(old)
      //   return old.filter(o => o.domain !== worldData.filteredData) 
      // }
    // }
  }

  // console.log(props.filteredData)

  const options = worldData.map((item) => {
    const filteredIncluded = props.filteredData.filter(
      (i) => i.domain === item.domain
    )
    return (
      <div key={item.domain} className={"domain-list-item" + " " + item.domain}>
        <input
          type="checkbox"
          id={item.domain}
          name={item.domain}
          checked={filteredIncluded.length > 0}
          onChange={handleChange}
        />
        <label htmlFor={item.domain}>
          <div className="flag">
            <img src={item.flag.pic} />
          </div>
          <span className="dom">{item.domain}</span>
          <span>{item.name}</span>
        </label>
      </div>
    )
  })
  return <>{options}</>
}
