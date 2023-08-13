import Link from "next/link";
import { ViewComposition } from "../../model";

export interface CompositionCoverProps {
  composition: ViewComposition;
}

export const CompositionCover = ({ composition }: CompositionCoverProps) => {
  return (
    <div className="composition-cover">
      <time dateTime={composition.isoDate}>{composition.localizedDate}</time>
      <Link href={`/${composition.id}`} passHref className="title">
        {composition.title}
      </Link>
    </div>
  );
};
