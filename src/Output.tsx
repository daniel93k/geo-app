import "./Output.css"
import worldInterface from "./interface.tsx"

const tableHeaders = ["Flag","Name","Domain","Region","Bollard","Signs"]
const signHeaders = ["chevron","speed","stop","yield","crossing","railway"]

const beforeSignsGap = tableHeaders.indexOf("Signs")
const signHeadersLength = signHeaders.length

interface props {
  data: worldInterface[]
}

export default function Output(props:props) {
  console.log(props)
  const tableRows = props.data.map(item => {
    console.log(item)
    return (
      <tbody>
      <tr key={item.flag}>
        <td className="flag"><a href={`./sources/index.html#${item.domain}`} target="_blank" rel="noopener noreferrer"><img src={item.flag} /></a></td>
        <td className="name">{item.name}</td>
        <td className="domain">{item.domain}</td>
        <td className="region">{item.region.map(item => <div>{item}</div>)}</td>
        <td className="collard">{item.bollard?item.bollard.map(item => <a href={item.pic} target="_blank" rel="noopener noreferren"><img src={item.pic} /></a>):"n/a"}</td>

        <td className="chevron">{item.signs.chevron.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="speed">{item.signs.speed.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="stop">{item.signs.stop.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="yield">{item.signs.yield.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="crossing">{item.signs.pedestrianCrossing.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="railway">{item.signs.railway?item.signs.railway.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic}/></a>):"n/a"}</td>
      </tr>
      </tbody>
    )
  })
  return (
    <div className="Output">
      <table>
        <thead>
          <tr key="head">
            {tableHeaders.map(item => {
              if(item === "Signs")
                return <th colSpan={signHeadersLength}>{item}</th>
              else 
                return <th>{item}</th>})
            }
          </tr>
          <tr key="head2"><th colSpan={beforeSignsGap}></th>{signHeaders.map(item => <th>{item}</th>)}</tr>
        </thead>
        {tableRows}
      </table>
    </div>
  )
}
