import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { links, site } from "../globals";
import ExternalLink from "./ExternalLink";
import packageInfo from "../package.json";

interface Props {
  children: React.ReactNode;
  title?: string;
  mainClass?: string;
}

export default function Layout({ children, mainClass, title }: Props) {
  const { asPath: absolutePathInContext } = useRouter();

  return (
    <div className="layout">
      <Head>
        <title>{title ?? site.longTitle}</title>

        <link rel="icon" href={site.getAbsolutePath("/favicon.ico")} />
        <meta name="author" content="Gianluca Costa" />
        <meta name="description" content="Dreams and Poetry" />
        <meta name="version" content={packageInfo.version} />

        <meta property="og:title" content={title ?? site.longTitle} />
        <meta property="og:description" content="Dreams and Poetry" />
        <meta property="og:image" content={site.getUrl("/preview.png")} />
        <meta property="og:url" content={site.getUrl(absolutePathInContext)} />

        <link
          rel="manifest"
          href={site.getAbsolutePath("/manifest.webmanifest")}
        ></link>

        <link rel="canonical" href={site.getUrl(absolutePathInContext)} />
      </Head>

      <header>
        <Link href="/" passHref className="logo-banner">

          <img src={site.getAbsolutePath("/logo.svg")} alt="Logo" />
          <span className="title">Arcadia</span>

        </Link>

        <div className="menu">
          <Link href="/sections" passHref className="button sections">
            Sections
          </Link>

          <Link href="/about" passHref className="button about">
            About...
          </Link>
        </div>
      </header>

      <div className={`main ${mainClass ?? ""}`.trim()}>{children}</div>

      <footer>
        <hr />
        Copyright ©{" "}
        <ExternalLink href={links.gcwebsite}>Gianluca Costa</ExternalLink>
      </footer>
    </div>
  );
}
