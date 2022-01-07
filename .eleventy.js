const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const { resolveUrl } = require("./eleventy/url.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: "./netlify/functions/",
    copy: ["./eleventy"],
  });

  eleventyConfig.addNunjucksAsyncShortcode("resolveUrl", async (url) => {
    const res = await resolveUrl(url);

    if (!res) {
      return `We unable to resolve "${url}".`;
    }

    return res;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
