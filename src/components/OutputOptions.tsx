import "./OutputOptions.css"
import {worldColumnInterface} from "../interface"
import {worldTableColumns} from "../worlddata/misc.tsx"

interface props {
  options: worldColumnInterface,
  setOptions: React.Dispatch<React.SetStateAction<worldColumnInterface>>
}

export default function OutputOptions(props:props) {
  console.log(props.options, worldTableColumns)
  return (
    <section className="OutputOptions">
      OutputOptions
    </section>
  )
}
