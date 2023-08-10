import React from "react";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { GetStaticPaths, GetStaticProps } from "next";
import { compositionRepository, site } from "../globals";
import { AnnotatedText } from "@giancosta86/hermes-react";
import { toView, ViewComposition } from "../viewmodel/viewCompositions";
import Layout from "../components/Layout";
import { logograms } from "../viewmodel/logograms";

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

  viewComposition.text = await readCompositionText(compositionId);

  return {
    props: {
      composition: viewComposition
    }
  };
};

interface Props {
  composition: ViewComposition;
}

export default function CompositionPage({ composition }: Props) {
  return (
    <Layout title={`${composition.title} - ${site.shortTitle}`}>
      <div className="composition">
        <span className="title">{composition.title}</span>

        <div>
          <AnnotatedText
            text={composition.text ?? ""}
            metadataByChar={logograms}
          />
        </div>
      </div>
    </Layout>
  );
}

function readCompositionText(compositionId: string): Promise<string> {
  const compositionFilePath = join(
    process.cwd(),
    "compositions",
    `${compositionId}.txt`
  );
  return readFile(compositionFilePath, "utf-8");
}
