import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { SWRConfig } from "swr";
import theme from "../components/Theme.jsx";

import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
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
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
