import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import { SWRConfig } from "swr";

// import { fonts } from "../lib/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style> */}
      {/* <ChakraProvider theme={theme}> */}

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
          <Component {...pageProps} />
        </ChakraProvider>
      </SWRConfig>
    </>
  );
}
