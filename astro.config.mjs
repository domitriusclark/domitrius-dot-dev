import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://domitrius.dev",
  integrations: [astroImageTools, tailwind()],
});
