import { hardwiredSections } from "./hardwired-sections";

export interface Section {
  id: string;
  name: string;
  compositionIds: readonly string[];
}

export interface SectionRepository {
  findAll(): readonly Section[];
  findById(sectionId: string): Section | undefined;
}

export class HardwiredSectionRepository implements SectionRepository {
  private readonly idToSectionMap: Map<string, Section>;

  constructor() {
    this.idToSectionMap = new Map();

    hardwiredSections.forEach(section =>
      this.idToSectionMap.set(section.id, section)
    );
  }

  findById(sectionId: string): Section | undefined {
    return this.idToSectionMap.get(sectionId);
  }

  findAll(): readonly Section[] {
    return hardwiredSections;
  }
}
