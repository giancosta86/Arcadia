import { Stream } from "@rimbu/stream";
import { Section } from "./Section";

export interface SectionRepository {
  findAll(): Stream<Section>;

  findById(sectionId: string): Section | undefined;
}
