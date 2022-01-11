import React from "react";
import { render } from "@testing-library/react";
import { SWRConfig } from "swr";
import fetcher from "./fetcher";

const Wrapper = ({ children }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 1000 * 60 * 15,
        fetcher: fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

// re export everythng from rtl
export * from "@testing-library/react";

export { customRender as render };
