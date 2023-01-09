import Link from "next/link";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout mainClass="not-found-page">
      <p>
        It seems you have requested a resource currently not available within
        Arcadia! ^__^
      </p>

      <p>
        Please, return to the <Link href="/">home page</Link> to explore the
        table of contents.
      </p>
    </Layout>
  );
}
