import "./Output.css"
import worldInterface from "./interface.tsx"
import { signLength, signWords} from "./worlddata/worlddata.tsx"
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
        <td><a href={item.wiki} target="_blank" rel="noopener noreferrer"><img src={item.flag} /></a></td>
        <td>{item.name}</td>
        <td>{item.domain}</td>
        <td>{item.region.map(item => <div>{item}</div>)}</td>
        <td>{item.bollard.map(item => <a href={item} target="_blank" rel="noopener noreferren"><img src={item} /></a>)}</td>

        <td>{item.signs.chevron.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td>{item.signs.stop.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td>{item.signs.yield.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td>{item.signs.pedestrianCrossing.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td>{item.signs.railway.map(item => <a href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
      </tr>
      </tbody>
    )
  })
  return (
    <div className="Output">
      <table>
        <thead>
          <tr key="head"><th>Domain</th><th>Flag</th><th>Name</th><th>Region</th><th>Bollard</th><th colSpan={signLength}>Sign</th></tr>
          <tr key="head2"><th colSpan={6}></th>{signWords.map(item => <th>{item}</th>)}</tr>
        </thead>
        {tableRows}
      </table>
    </div>
  )
}
