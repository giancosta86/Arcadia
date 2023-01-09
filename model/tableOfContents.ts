import { Composition, CompositionRepository } from "./compositions";
import { Section, SectionRepository } from "./sections";

export class TableOfContents {
  constructor(
    private readonly sectionRepository: SectionRepository,
    private readonly compositionRepository: CompositionRepository
  ) {}

  findSectionsFor(composition: Composition): readonly Section[] {
    return this.sectionRepository
      .findAll()
      .filter(section => section.compositionIds.includes(composition.id));
  }

  findCompositionsFor(section: Section): readonly Composition[] {
    return section.compositionIds.map(compositionId => {
      const relatedComposition =
        this.compositionRepository.findById(compositionId);
      if (relatedComposition === undefined) {
        throw new Error(`Unknown composition id: '${compositionId}'`);
      }

      return relatedComposition;
    });
  }
}
