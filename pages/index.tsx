import CompositionList from "../components/CompositionList";
import Layout from "../components/Layout";
import { compositionRepository } from "../globals";
import { toView } from "../viewmodel/viewCompositions";

export default function Home() {
  return (
    <Layout>
      <div>
        <CompositionList
          compositions={[...compositionRepository.findAll()]
            .sort((left, right) => right.date.getTime() - left.date.getTime())
            .map(composition => toView(composition))}
        />
      </div>
    </Layout>
  );
}
