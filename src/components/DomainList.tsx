import './DomainList.css'
import {worldDataInterface} from ".././interface.tsx"
import {worldData} from ".././worlddata/worlddata.tsx";

interface props {
  worldData: worldDataInterface[]
  filteredData: worldDataInterface[]
}

export default function DomainList(props:props) {
  console.log(props)
  const options = worldData.map(item => {
    return (
    <div key={item.domain} className="DomainList">
        <input type="checkbox" id={item.domain} name={item.domain}/>
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
  return (
    <>
      {options}
    </>
  )
}
