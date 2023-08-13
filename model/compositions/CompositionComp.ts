import { Comp } from "@rimbu/common";
import { Composition } from "./Composition";

export namespace CompositionComp {
  export function createDefault(): Comp<Composition> {
    return {
      compare(left: Composition, right: Composition): number {
        return right.date.unboxed.getTime() - left.date.unboxed.getTime();
      },

      isComparable(obj: any): obj is Composition {
        return obj["date"];
      }
    };
  }
}
