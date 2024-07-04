import { List } from "@rimbu/list";

export type Section = Readonly<{
  id: string;
  name: string;
  compositionIds: List.NonEmpty<string>;
}>;
