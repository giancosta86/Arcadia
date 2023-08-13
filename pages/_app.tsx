import { AppProps } from "next/app";
import "@giancosta86/hermes-react/dist/index.css";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
