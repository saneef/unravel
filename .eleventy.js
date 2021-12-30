const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "dynamic",
    functionsDir: "./netlify/functions/",
    copy: ["./eleventy"],
  });

  eleventyConfig.addNunjucksAsyncShortcode("resolveUrl", async (url) => {
    const { resolveUrl } = await import("./eleventy/url.mjs");
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
