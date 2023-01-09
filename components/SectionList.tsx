import { ViewSection } from "../viewmodel/viewSections";
import SectionCover from "./SectionCover";

interface Props {
  sections: readonly ViewSection[];
}

export default function SectionList(props: Props) {
  return (
    <div className="sections list">
      {props.sections.map(section => (
        <SectionCover key={section.id} section={section} />
      ))}
    </div>
  );
}
