const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: "./netlify/functions/",
    copy: ["./eleventy"],
  });

  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addWatchTarget("./src/styles/");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
