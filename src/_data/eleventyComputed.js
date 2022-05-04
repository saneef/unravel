const { resolveUrl } = require("../../eleventy/url.js");
module.exports = {
  async resolvedUrl(data) {
    const url = data?.eleventy?.serverless?.query?.url;

    if (url) {
      return resolveUrl(url);
    }
  },
};
