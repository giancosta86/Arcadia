import { Section } from "./Section";

export type ViewSection = Readonly<{
  id: string;
  name: string;
  compositionCount: number;
}>;

export namespace ViewSection {
  export function from(section: Section): ViewSection {
    return {
      id: section.id,
      name: section.name,
      compositionCount: section.compositionIds.length
    };
  }
}
