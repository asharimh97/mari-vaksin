import { SWRConfig } from "swr";
import "../styles/globals.css";
import fetcher from "../utils/fetcher";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 1000 * 60 * 15,
        fetcher: fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
