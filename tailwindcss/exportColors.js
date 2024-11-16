import dark from "./themes/dark.js";
import light from "./themes/light.js";

import { computed } from "vue";

const theme = computed(() => {
  if (localStorage.getItem("isDark") === "true") {
    return dark;
  }
  return light;
});

export { theme, dark, light };
