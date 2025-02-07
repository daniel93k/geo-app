import "./Options.css"
import worldInterface from "./interface.tsx"
interface props {
  data: worldInterface[];
  setData: React.Dispatch<React.SetStateAction<worldInterface[]>>
}

export default function Options(props:props) {
  console.log(props)
  return (
    <div>Options</div>
  )
}
