const importAll = require =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});

export const images = importAll(
  require.context("../../res/screenshots", true, /colour_\d\.(png|jpe?g)$/)
);