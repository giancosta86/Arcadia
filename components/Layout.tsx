import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";
import packageInfo from "../package.json";
import { ExternalLinks, Site } from "../model";
import { ExternalLink } from "./ExternalLink";

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  mainClass?: string;
}

export const Layout = ({ children, mainClass, title }: LayoutProps) => {
  const { asPath: absolutePathInContext } = useRouter();

  const fullAbsolutePath = Site.getAbsolutePath(absolutePathInContext);

  return (
    <div className="layout">
      <Head>
        <title>{title ?? Site.longTitle}</title>

        <link rel="icon" href={Site.getAbsolutePath("/favicon.png")} />
        <link
          rel="apple-touch-icon"
          href={Site.getAbsolutePath("/favicon.png")}
        ></link>
        <meta name="author" content="Gianluca Costa" />
        <meta name="description" content="Dreams and Poetry" />
        <meta name="version" content={packageInfo.version} />

        <meta property="og:title" content={title ?? Site.longTitle} />
        <meta property="og:description" content="Dreams and Poetry" />
        <meta property="og:image" content={Site.getFullUrl("/preview.png")} />
        <meta property="og:url" content={fullAbsolutePath} />

        <link
          rel="manifest"
          href={Site.getAbsolutePath("/manifest.webmanifest")}
        ></link>

        <link rel="canonical" href={fullAbsolutePath} />
      </Head>

      <header>
        <Link href="/" passHref className="logo-banner">
          <img src={Site.getAbsolutePath("/logo.svg")} alt="Logo" />
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

      <div className={classnames("main", mainClass)}>{children}</div>

      <footer>
        <hr />
        Copyright ©{" "}
        <ExternalLink href={ExternalLinks.gcWebsite}>
          Gianluca Costa
        </ExternalLink>
      </footer>
    </div>
  );
};
