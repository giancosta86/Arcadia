import { Stream } from "@rimbu/stream";
import classnames from "classnames";
import { ViewComposition } from "../../model";
import { CompositionCover } from "./CompositionCover";

export interface CompositionListProps {
  compositions: Stream<ViewComposition>;
}

export function CompositionList(props: CompositionListProps) {
  return (
    <div className={classnames("compositions", "list")}>
      {props.compositions.map(composition => (
        <CompositionCover key={composition.id} composition={composition} />
      ))}
    </div>
  );
}
