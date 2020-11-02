import { ViewComposition } from "../viewmodel/viewCompositions"
import CompositionCover from "./CompositionCover"

interface Props {
  compositions: readonly ViewComposition[]
}

export default function CompositionList(props: Props) {
  return (
    <div className="compositions list">
      {props.compositions.map((composition) => (
        <CompositionCover key={composition.id} composition={composition} />
      ))}
    </div>
  )
}
