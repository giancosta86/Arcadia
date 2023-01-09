import Layout from "../components/Layout";
import SectionList from "../components/SectionList";
import { sectionRepository } from "../globals";
import { toView } from "../viewmodel/viewSections";

export default function Sections() {
  return (
    <Layout mainClass="sections-page">
      <SectionList
        sections={sectionRepository.findAll().map(section => toView(section))}
      />
    </Layout>
  );
}
