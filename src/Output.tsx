import "./Output.css"
import {worldColumnInterface, worldDataInterface} from "./interface.tsx"

interface props {
  data: worldDataInterface[];
  columns: worldColumnInterface;
}

export default function Output(props:props) {
  const tableRows = props.data.map((item,i) => {
    return (
      <tr key={item.domain}>
        <td>{i+1}</td>
        <td className="flag"><a href={item.links?.wikipedia} target="_blank" rel="noopener noreferrer"><img src={item.flag.pic} /></a></td>
        <td className="flag-proportion">{item.flag.proportions}</td>
        <td className="name">{item.name}</td>
        <td className="domain">{item.domain}</td>
        <td className="soverign-to">{item.sovereignTo}</td>
        <td className="region">{item.region.map(item => <div key={item}>{item}</div>)}</td>
        <td className="bollard">{item.bollard?item.bollard.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferren"><img src={item.pic} /></a>):"n/a"}</td>
        <td className="snow-pole">{item.poleSnow?item.poleSnow.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferren"><img src={item.pic} /></a>):"n/a"}</td>
        <td className="tele-pole">{item.poleTele?item.poleTele.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferren"><img src={item.pic} /></a>):"n/a"}</td>
        <td className="road-markings">{item.roadMarkings?item.roadMarkings.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferren"><img src={item.pic} /></a>):"n/a"}</td>

        <td className="sign-chevron">{item.signChevron?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="sign-speed">{item.signSpeed?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="sign-stop">{item.signStop?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="sign-yield">{item.signYield?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="sign-crossing">{item.signPedestrianCrossing?.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic} /></a>)}</td>
        <td className="sign-railway">{item.signRailway?item.signRailway.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic}/></a>):"n/a"}</td>
        <td className="sign-roads">{item.signRoads?item.signRoads.map(item => <a key={item.pic} href={item.pic} target="_blank" rel="noopener noreferrer"><img src={item.pic}/></a>):"n/a"}</td>
      </tr>
    )
  })

  return (
    <div className="Output">
      <table>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  )
}
