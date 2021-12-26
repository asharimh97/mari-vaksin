import {
  ThemeProvider,
  Preflight,
  defaultTheme,
} from "@xstyled/styled-components";
import { SWRConfig } from "swr";
import GlobalStyle from "../config/GlobalStyles";
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
      <ThemeProvider theme={defaultTheme}>
        <Preflight />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
