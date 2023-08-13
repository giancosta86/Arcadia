import { IsoDate } from "@giancosta86/time-utils";

export type Composition = Readonly<{
  id: string;
  title: string;
  date: IsoDate;
}>;
