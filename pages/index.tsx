import { CompositionList, Layout } from "../components";
import { ViewComposition, Site } from "../model";

export default function Home() {
  return (
    <Layout>
      <div>
        <CompositionList
          compositions={Site.compositionRepository
            .findAll()
            .map(composition => ViewComposition.from(composition))}
        />
      </div>
    </Layout>
  );
}
