import Link from "next/link";
import { ViewComposition } from "../viewmodel/viewCompositions";

interface Props {
  composition: ViewComposition;
}

export default function CompositionCover({ composition }: Props) {
  return (
    <div className="composition-cover">
      <time dateTime={composition.rawDate}>{composition.userDate}</time>
      <Link href={`/${composition.id}`} passHref>
        <a className="title">{composition.title}</a>
      </Link>
    </div>
  );
}
