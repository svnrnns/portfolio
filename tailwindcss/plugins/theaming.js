import plugin from "tailwindcss/plugin";
import dark from "../themes/dark.js";
import light from "../themes/light.js";
import { parseColor, formatColor } from "tailwindcss/lib/util/color.js";

const themes = {
  dark,
  light,
};

export default plugin(function ({ addComponents, theme }) {
  addComponents({
    [`:root[data-theme="dark"]`]: Object.entries(themes.dark).reduce(
      (acc, [k, v]) => {
        let color = parseColor(v, { loose: true }).color.join(", ");
        acc["--color-" + k] = color;
        return acc;
      },
      {}
    ),
  });

  addComponents({
    [`:root`]: Object.entries(themes.light).reduce((acc, [k, v]) => {
      let color = parseColor(v, { loose: true }).color.join(", ");
      acc["--color-" + k] = color;
      return acc;
    }, {}),
  });
});
