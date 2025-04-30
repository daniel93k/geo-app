import "./DomainList.css"
import {worldDataInterface, worldFormInterface} from ".././interface.tsx"
import {worldData} from ".././worlddata/worlddata.tsx"

interface props {
  filteredData: worldDataInterface[],
  data: worldFormInterface,
  setData: React.Dispatch<React.SetStateAction<worldFormInterface>>
}

export default function DomainList(props: props) {
  const checked:string[] = []
  for (const element of props.filteredData) {
    checked.push(element.domain)
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setData(d => ({
      ...d,
      domainList: {
        ...d.domainList,
        [e.target.id]: !d.domainList[e.target.id],
      },
    }))
  }

  const options = worldData.map((item) => {
    return (
      <div key={item.domain} className={"domain-list-item" + " " + item.domain}>
        <input
          type="checkbox"
          id={item.domain}
          name={item.domain}
          checked={checked.includes(item.domain)}
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
