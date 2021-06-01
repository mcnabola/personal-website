import { deep, swiss } from "@theme-ui/presets";

const theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },

  styles: {
    ...swiss.styles,
    p: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 3,
    },
  },
};

export default theme;