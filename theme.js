import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f7fafc",
      // Add other shades of gray here
      900: "#1a202c", // Dark graphite gray
    },
  },
});

export default theme;
