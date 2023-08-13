import Link from "next/link";
import { ViewSection } from "../../model";

export interface SectionCoverProps {
  section: ViewSection;
}

export function SectionCover({ section }: SectionCoverProps) {
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
