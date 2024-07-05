import { Stream } from "@rimbu/stream";
import { OrderedHashMap } from "@rimbu/ordered";
import { RMap } from "@rimbu/collection-types";
import { Section } from "./Section";
import { SectionRepository } from "./SectionRepository";
import { hardwiredSections } from "./hardwiredSections";

export class HardwiredSectionRepository implements SectionRepository {
  private readonly sectionsById: RMap.NonEmpty<string, Section>;

  constructor() {
    this.sectionsById = OrderedHashMap.from(
      hardwiredSections.map(section => [section.id, section])
    );
  }

  findById(sectionId: string): Section | undefined {
    return this.sectionsById.get(sectionId);
  }

  findAll(): Stream<Section> {
    return this.sectionsById.streamValues();
  }
}
