import "./Output.css"
import {worldDataInterface} from "./interface.tsx"

// const tableHeaders = ["Flag","Name","Domain","Region","Bollard","Signs"]
// const signHeaders = ["chevron","speed","stop","yield","crossing","railway"]

// const beforeSignsGap = tableHeaders.indexOf("Signs")
// const signHeadersLength = signHeaders.length

interface props {
  data: worldDataInterface[]
}

export default function Output(props:props) {
  console.log(props.data)
  const tableRows = props.data.map(item => {
    return (
      <tr key={item.flag.pic}>
        <td className="flag"><a href={`./sources/index.html#${item.domain}`} target="_blank" rel="noopener noreferrer"><img src={item.flag.pic} /></a></td>
        <td className="name">{item.name}</td>
        <td className="domain">{item.domain}</td>
        <td className="region">{item.region.map(item => <div key={item}>{item}</div>)}</td>
        <td className="bollard">{item.bollard?item.bollard.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferren"><img src={item.pic} /></a>):"n/a"}</td>

        <td className="chevron">{item.signChevron?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="speed">{item.signSpeed?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="stop">{item.signStop?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="yield">{item.signYield?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="crossing">{item.signPedestrianCrossing?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="railway">{item.signRailway?item.signRailway.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic}/></a>):"n/a"}</td>
      </tr>
    )
  })

  return (
    <div className="Output">
      <table>
        <thead>
          {/* <tr key="head"><th></th>{signHeaders.map(item => <th key={item}>{item}</th>)}</tr> */}
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
}
