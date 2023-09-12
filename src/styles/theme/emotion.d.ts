import CustomTheme from "styles/theme";

import "@emotion/react";

type CustomThemeType = typeof CustomTheme;

declare module "@emotion/react" {
  export interface Theme extends CustomThemeType {}
}
