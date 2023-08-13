import { IsoDateFormat } from "@giancosta86/hermes";
import { Composition } from "./Composition";

export type ViewComposition = Readonly<{
  id: string;
  title: string;
  isoDate: string;
  localizedDate: string;
  text?: string;
}>;

export namespace ViewComposition {
  const isoDateFormat = new IsoDateFormat("en");

  export function from(composition: Composition): ViewComposition {
    return {
      id: composition.id,
      title: composition.title,
      isoDate: composition.date.toString(),
      localizedDate: isoDateFormat.format(composition.date)
    };
  }
}
