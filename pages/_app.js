import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
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
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
