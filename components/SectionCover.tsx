import Link from "next/link";
import { ViewSection } from "../viewmodel/viewSections";

interface Props {
  section: ViewSection;
}

export default function SectionCover({ section }: Props) {
  return (
    <div className="section-cover">
      <Link href={`/sections/${section.id}`} passHref className="name">
        {section.name}
      </Link>

      <span className="composition-count">
        {section.compositionCount} compositions
      </span>
    </div>
  );
}
