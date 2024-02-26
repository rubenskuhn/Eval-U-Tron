import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "linear-gradient(to top right, #333333, #000000)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        color: "white",
      },
    },
  },
});

export default theme;
