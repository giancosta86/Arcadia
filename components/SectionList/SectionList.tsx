import { Stream } from "@rimbu/stream";
import classnames from "classnames";
import { ViewSection } from "../../model";
import { SectionCover } from "./SectionCover";

interface Props {
  sections: Stream<ViewSection>;
}

export const SectionList = (props: Props) => {
  return (
    <div className={classnames("sections", "list")}>
      {props.sections.map(section => (
        <SectionCover key={section.id} section={section} />
      ))}
    </div>
  );
};
