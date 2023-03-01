import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import { promises as fs } from "fs";
import { compositionRepository, site } from "../globals";
import { toView, ViewComposition } from "../viewmodel/viewCompositions";
import Layout from "../components/Layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = compositionRepository.findAll().map(composition => ({
    params: { id: composition.id }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  const compositionId = context.params!.id as string;

  const composition = compositionRepository.findById(compositionId);
  if (composition === undefined) {
    throw new Error(`Could not find composition having id '${compositionId}'`);
  }

  const viewComposition = toView(composition);

  viewComposition.htmlContent = await readCompositionHtmlContent(compositionId);

  return {
    props: {
      composition: viewComposition
    }
  };
};

interface Props {
  composition: ViewComposition;
}

export default function CompositionPage(props: Props) {
  return (
    <Layout title={`${props.composition.title} - ${site.shortTitle}`}>
      <div className="composition">
        <span className="title">{props.composition.title}</span>

        <div
          dangerouslySetInnerHTML={{
            __html: props.composition.htmlContent ?? ""
          }}
        />
      </div>
    </Layout>
  );
}

async function readCompositionHtmlContent(
  compositionId: string
): Promise<string> {
  const compositionFilePath = path.join(
    process.cwd(),
    "compositions",
    `${compositionId}.txt`
  );
  const compositionContent = await fs.readFile(compositionFilePath, "utf-8");

  const paragraphs = compositionContent.split("\n\n");

  const htmlParagraphs = paragraphs.map(paragraph => {
    const paragraphLines = paragraph.split("\n");
    return `<p>${paragraphLines.join("<br/>\n")}</p>`;
  });

  return htmlParagraphs.join("\n");
}
