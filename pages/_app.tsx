import { AppProps } from "next/app";
import "@giancosta86/hermes-react/dist/index.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
