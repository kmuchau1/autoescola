import React from "react";
import { addDecorator, addParameters } from "@storybook/react";

import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </>
));

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (default)",
    styles: {
      width: "640px",
      height: "320px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});