import { basePath } from "../../next.config";
import { HardwiredCompositionRepository } from "../compositions";
import { HardwiredSectionRepository } from "../sections";
import { TableOfContents } from "./TableOfContents";

export namespace Site {
  export const shortTitle = "Arcadia";
  export const longTitle = "Arcadia - Dreams and Poetry";

  export function getAbsolutePath(absolutePathInContext: string): string {
    return `${basePath}${absolutePathInContext}`;
  }

  export function getFullUrl(absolutePathInContext: string): string {
    return `https://gianlucacosta.info${getAbsolutePath(
      absolutePathInContext
    )}`;
  }

  export const sectionRepository = new HardwiredSectionRepository();

  export const compositionRepository = new HardwiredCompositionRepository();

  export const tableOfContents = new TableOfContents(
    sectionRepository,
    compositionRepository
  );
}
