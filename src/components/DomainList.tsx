import "./DomainList.css"
import {worldFormInterface} from ".././interface.tsx"
import {worldData} from ".././worlddata/worlddata.tsx"

interface props {
  refs: React.RefObject<{ [key: string]: HTMLDivElement | null; }>,
  data: worldFormInterface,
  setData: React.Dispatch<React.SetStateAction<worldFormInterface>>
}

export default function DomainList(props: props) {
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
      <div
        key={item.domain}
        className={"domain-list-item" + " " + item.domain}
        ref={(el) => {
            props.refs.current[item.domain] = el;
        }}
      >
        <input
          type="checkbox"
          id={item.domain}
          name={item.domain}
          checked={props.data.domainList[item.domain] === true}
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
  return (
    <>
      {options}
    </>
  )
}
