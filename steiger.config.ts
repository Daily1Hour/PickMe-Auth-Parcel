import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      "fsd/no-public-api-sidestep": "off",
      "fsd/public-api": "off",
    },
  },
]);
