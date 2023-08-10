import { Composition } from "../model/compositions";

const userDateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric"
});

export interface ViewComposition {
  id: string;
  title: string;
  rawDate: string;
  userDate: string;
  text?: string;
}

function rawFormatDate(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function toView(composition: Composition): ViewComposition {
  return {
    id: composition.id,
    title: composition.title,
    rawDate: rawFormatDate(composition.date),
    userDate: userDateFormatter.format(composition.date)
  };
}
