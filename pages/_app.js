import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { SWRConfig } from "swr";
import PageLayout from "../components/PageLayout.jsx";
import TitleBar from "../components/TitleBar";

// console.log("=== PageLayout?", PageLayout);

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <ChakraProvider>
          {/* <TitleBar />
          <PageLayout> */}
          <Component {...pageProps} />
          {/* </PageLayout> */}
        </ChakraProvider>
      </SWRConfig>
    </>
  );
}
