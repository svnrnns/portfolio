function applyOpactiy(variable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
}

import light from "./themes/light";

const theme = {};

Object.entries(light).reduce((acc, [key, value]) => {
  acc[key] = applyOpactiy("--color-" + key);
  return acc;
}, theme);

export default theme;
