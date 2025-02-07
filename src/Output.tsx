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
      <tr key={item.domain}>
        <td>{item.domain}</td>
        <td><img src={item.flag} /></td>
        <td>{item.name}</td>
        <td>{item.region.map(item => <div>{item}</div>)}</td>
        <td>{item.chevron?.map(item => <img src={item} />) || ""}</td>
        <td>{item.bollard?.map(item => <img src={item} />) || ""}</td>
        <td>{item.sign?.stop.map(item => <img src={item} />)}</td>
        <td>{item.sign?.yield.map(item => <img src={item} />)}</td>
        <td>{item.sign?.pedestrianCrossing.map(item => <img src={item} />)}</td>
        <td>{item.sign?.railway.map(item => <img src={item} />)}</td>


      </tr>
      </tbody>
    )
  })
  return (
    <div className="Output">
      <table>
        <thead>
          <tr key="head"><th>Domain</th><th>Flag</th><th>Name</th><th>Region</th><th>Chevron</th><th>Bollard</th><th colSpan={signLength}>Sign</th></tr>
          <tr key="head2"><th colSpan={6}></th>{signWords.map(item => <th>{item}</th>)}</tr>
        </thead>
        {tableRows}
      </table>
    </div>
  )
}
